import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { getBeekeepingAdvice } from '../services/geminiService';

const BeeAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Moni! I am your **Malandula Bee Assistant**. How can I help you unlock the **Hidden Treasure** of beekeeping today?' }
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
      {isOpen ? (
        <div className="bg-white rounded-3xl shadow-2xl border border-amber-100 w-[90vw] sm:w-[450px] flex flex-col overflow-hidden max-h-[600px] animate-in fade-in zoom-in duration-300">
          <div className="bg-amber-600 p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <i className="fas fa-robot"></i>
              </div>
              <div>
                <h4 className="font-bold leading-none text-sm">Malandula Advisor</h4>
                <span className="text-[10px] opacity-80 uppercase tracking-widest font-bold">Expert AI Consultant</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-amber-200 transition-colors">
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-50 h-[400px]">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} w-full`}>
                <div className={`max-w-[95%] px-4 py-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-amber-600 text-white rounded-br-none shadow-md' 
                    : 'bg-white border border-amber-100 text-stone-700 rounded-bl-none shadow-sm prose-chat'
                }`}>
                  {m.role === 'bot' ? (
                    <ReactMarkdown>{m.text}</ReactMarkdown>
                  ) : (
                    m.text
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start w-full">
                <div className="bg-white border border-amber-100 px-4 py-3 rounded-2xl rounded-bl-none shadow-sm flex gap-1 items-center">
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t border-stone-100 bg-white flex gap-2">
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask about hives, smokers, or honey..."
              className="flex-1 bg-stone-100 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
            />
            <button 
              type="submit" 
              disabled={isTyping}
              className="bg-amber-600 text-white w-10 h-10 rounded-xl flex items-center justify-center hover:bg-amber-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-amber-600 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 group relative"
        >
          <i className="fas fa-comment-dots text-2xl"></i>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse shadow-sm">
            AI HELP
          </span>
        </button>
      )}
    </div>
  );
};

export default BeeAssistant;