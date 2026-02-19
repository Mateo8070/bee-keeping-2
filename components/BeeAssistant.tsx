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
    setMessages(prev => [...prev, { role: 'bot', text: response || 'Sorry, I missed that. Please try again.' }]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {/* Chat Panel */}
      {isOpen && (
        <div className="bg-stone-900 rounded-3xl shadow-2xl border border-white/10 w-[95vw] sm:w-[460px] flex flex-col overflow-hidden max-h-[72vh] mb-4"
          style={{ animation: 'slideUp 0.25s ease-out' }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-600 to-amber-500 p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 backdrop-blur-sm w-10 h-10 rounded-xl flex items-center justify-center text-white text-lg">
                🐝
              </div>
              <div>
                <h4 className="font-bold text-stone-900 leading-none text-sm">Malandula Bee Advisor</h4>
                <span className="text-[10px] text-stone-800/70 uppercase tracking-widest font-bold">AI Expert · Powered by Gemini</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-stone-900/60 hover:text-stone-900 transition-colors p-2" aria-label="Close assistant">
              <i className="fas fa-times text-lg"></i>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[280px] bg-stone-900/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} w-full`}>
                {m.role === 'bot' && (
                  <div className="w-7 h-7 bg-amber-500/20 border border-amber-500/30 rounded-full flex items-center justify-center text-xs mr-2 flex-shrink-0 mt-0.5">🐝</div>
                )}
                <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${m.role === 'user'
                    ? 'bg-amber-500 text-stone-900 font-medium rounded-br-none'
                    : 'bg-stone-800 border border-white/8 text-stone-200 rounded-bl-none prose-chat'
                  }`}>
                  {m.role === 'bot' ? <ReactMarkdown>{m.text}</ReactMarkdown> : m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start items-center gap-2">
                <div className="w-7 h-7 bg-amber-500/20 border border-amber-500/30 rounded-full flex items-center justify-center text-xs">🐝</div>
                <div className="bg-stone-800 border border-white/8 px-4 py-3 rounded-2xl rounded-bl-none flex gap-1.5 items-center">
                  {[0, 150, 300].map(d => (
                    <div key={d} className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: `${d}ms` }} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-3 border-t border-white/8 bg-stone-900 flex gap-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask about hives, gear, honey..."
              className="flex-1 bg-stone-800 border border-white/10 rounded-xl px-4 py-3 text-sm text-stone-100 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
            />
            <button
              type="submit"
              disabled={isTyping}
              className="bg-amber-500 hover:bg-amber-400 text-stone-900 w-12 h-12 rounded-xl flex items-center justify-center transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-amber-500/20 active:scale-95"
            >
              <i className="fas fa-paper-plane text-sm"></i>
            </button>
          </form>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(o => !o)}
        className="relative w-16 h-16 rounded-full shadow-2xl shadow-amber-500/30 flex items-center justify-center transition-all active:scale-95 hover:scale-110 border-4 border-stone-950 group"
        style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}
        aria-label={isOpen ? 'Close assistant' : 'Open AI Bee Assistant'}
      >
        <span className="text-2xl">{isOpen ? '✕' : '🐝'}</span>
        {!isOpen && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full animate-pulse border-2 border-stone-950">
            AI
          </span>
        )}
      </button>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
};

export default BeeAssistant;
