import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { getBeekeepingAdvice } from '../services/geminiService';

const BeeAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Moni! 🐝 I am your **Malandula Bee Advisor**. Ask me anything about beekeeping, equipment, or how to start ulimi wa njuchi!' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    const userMsg = query;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setQuery('');
    setIsTyping(true);
    const response = await getBeekeepingAdvice(userMsg);
    setMessages(prev => [...prev, { role: 'bot', text: response || 'Sorry, I missed that. Try again.' }]);
    setIsTyping(false);
  };

  return (
    <>
      {/* ── Desktop-only backdrop (tap to dismiss) ── */}
      {isOpen && (
        <div
          className="hidden sm:block fixed inset-0 bg-black/50 backdrop-blur-[2px] z-[59]"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/*
        ── Chat panel ──
        MOBILE  (<640 px): floating modal above the FAB, slides up
        DESKTOP (≥640 px): full-height left drawer, slides in from left
      */}
      <div className={`chat-panel ${isOpen ? 'chat-panel-open' : 'chat-panel-closed'}
        fixed z-[60] flex flex-col bg-[#0c1530] shadow-2xl shadow-black/60
        bottom-[88px] left-3 right-3 max-h-[72vh] rounded-3xl border border-white/5
        sm:top-0 sm:right-0 sm:left-auto sm:bottom-auto sm:h-screen sm:w-[420px] sm:rounded-none sm:border-l sm:border-0
      `}>

        {/* Header */}
        <div className="bg-gradient-to-r from-amber-600 to-amber-500 p-4 flex items-center justify-between flex-shrink-0
          rounded-t-3xl sm:rounded-none">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 w-10 h-10 rounded-xl flex items-center justify-center text-lg">🐝</div>
            <div>
              <h4 className="font-bold text-stone-900 leading-none text-sm">Malandula Bee Advisor</h4>
              <p className="text-[10px] text-stone-800/80 font-bold mt-0.5">AI Expert · Powered by Gemini</p>
            </div>
          </div>

          {/* ✕ — visible on mobile only (desktop closes via backdrop/FAB) */}
          <button
            onClick={() => setIsOpen(false)}
            className="sm:hidden text-stone-900/60 hover:text-stone-900 transition-colors p-2 rounded-xl hover:bg-white/20 active:scale-90"
            aria-label="Close chat"
          >
            <i className="fas fa-times text-base" />
          </button>
        </div>

        {/* Messages — flex-1 + min-h-0 ensures input never gets pushed off */}
        <div ref={scrollRef} className="flex-1 min-h-0 overflow-y-auto p-4 space-y-4">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} w-full`}>
              {m.role === 'bot' && (
                <div className="w-7 h-7 bg-amber-500/15 border border-amber-500/15 rounded-full flex items-center justify-center text-xs mr-2 flex-shrink-0 mt-0.5">
                  🐝
                </div>
              )}
              <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${m.role === 'user'
                ? 'bg-amber-500 text-stone-900 font-medium rounded-br-none'
                : 'bg-[#162248] border border-white/5 text-stone-200 rounded-bl-none'
                }`}>
                {m.role === 'bot' ? <ReactMarkdown>{m.text}</ReactMarkdown> : m.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start items-center gap-2">
              <div className="w-7 h-7 bg-amber-500/15 border border-amber-500/15 rounded-full flex items-center justify-center text-xs">🐝</div>
              <div className="bg-[#162248] border border-white/5 px-4 py-3 rounded-2xl rounded-bl-none flex gap-1.5 items-center">
                {[0, 150, 300].map(d => (
                  <div key={d} className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: `${d}ms` }} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Input — flex-shrink-0 keeps it always visible */}
        <form
          onSubmit={handleSubmit}
          className="flex-shrink-0 p-3 border-t border-white/5 bg-[#0c1530] flex gap-2 rounded-b-3xl sm:rounded-none"
        >
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Ask about hives, gear, honey..."
            className="flex-1 bg-[#0f1e3a] border border-white/5 rounded-xl px-4 py-3 text-sm text-stone-100 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-500/40 transition-all"
          />
          <button
            type="submit"
            disabled={isTyping}
            className="bg-amber-500 hover:bg-amber-400 text-stone-900 w-12 h-12 rounded-xl flex items-center justify-center transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-amber-500/20 active:scale-95 flex-shrink-0"
          >
            <i className="fas fa-paper-plane text-sm" />
          </button>
        </form>
      </div>

      {/* ── FAB — always bottom-right ── */}
      <div className="fixed bottom-6 right-6 z-[61]">
        <button
          onClick={() => setIsOpen(o => !o)}
          className="relative w-16 h-16 rounded-full shadow-2xl shadow-amber-500/30 flex items-center justify-center transition-all active:scale-95 hover:scale-110 border-4 border-[#070d1c]"
          style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}
          aria-label={isOpen ? 'Close assistant' : 'Open AI Bee Assistant'}
        >
          {/* On desktop show ✕ when open so they can close without backdrop click */}
          <span className="text-2xl hidden sm:block">{isOpen ? '✕' : '🐝'}</span>
          {/* On mobile always show 🐝 — the panel's own X button closes it */}
          <span className="text-2xl sm:hidden">🐝</span>
          {!isOpen && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full animate-pulse border-2 border-[#070d1c]">
              AI
            </span>
          )}
        </button>
      </div>

      {/* ── Responsive animation — two different transforms ── */}
      <style>{`
        .chat-panel {
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease;
        }
        /* Mobile: floats up from below FAB */
        @media (max-width: 639px) {
          .chat-panel-closed { transform: translateY(20px); opacity: 0; pointer-events: none; }
          .chat-panel-open   { transform: translateY(0);    opacity: 1; pointer-events: auto; }
        }
        /* Desktop: slides in/out from the RIGHT */
        @media (min-width: 640px) {
          .chat-panel-closed { transform: translateX(100%); opacity: 1; pointer-events: none; }
          .chat-panel-open   { transform: translateX(0);    opacity: 1; pointer-events: auto; }
        }
      `}</style>
    </>
  );
};

export default BeeAssistant;
