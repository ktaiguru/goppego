import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const INITIAL_MESSAGE = {
  role: 'bot',
  text: "Hi! I'm the GOPPE Go assistant. Are you here as an educator or a business owner?",
  options: [
    { label: "I'm an Educator", action: 'educator' },
    { label: "I'm a Business Owner", action: 'business' },
  ],
};

const RESPONSES = {
  educator: {
    text: "We help educators level up through consulting, AI training, and literacy intervention. What would you like to do?",
    options: [
      { label: 'View Education Services', action: '/education' },
      { label: 'Schedule a Consultation', action: '/contact' },
    ],
  },
  business: {
    text: "We build custom AI workflows and agents for small businesses. Want to explore or talk to us directly?",
    options: [
      { label: 'View AI Services', action: '/ai-services' },
      { label: 'Contact Us', action: '/contact' },
    ],
  },
  default: {
    text: "I can help you find the right path. Are you looking for education consulting or AI solutions?",
    options: [
      { label: "I'm an Educator", action: 'educator' },
      { label: "I'm a Business Owner", action: 'business' },
    ],
  },
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleUserMessage = (text) => {
    const lower = text.toLowerCase();
    let response;
    if (lower.includes('educator') || lower.includes('teacher') || lower.includes('school') || lower.includes('education')) {
      response = RESPONSES.educator;
    } else if (lower.includes('business') || lower.includes('ai') || lower.includes('workflow') || lower.includes('agent') || lower.includes('company') || lower.includes('owner')) {
      response = RESPONSES.business;
    } else {
      response = RESPONSES.default;
    }

    setMessages((prev) => [
      ...prev,
      { role: 'user', text },
      { role: 'bot', text: response.text, options: response.options },
    ]);
    setInput('');
  };

  const handleOptionClick = (option) => {
    if (option.action.startsWith('/')) {
      navigate(option.action);
      setIsOpen(false);
    } else {
      handleUserMessage(option.label);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleUserMessage(input.trim());
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        style={{
          position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 50,
          width: '3.5rem', height: '3.5rem', borderRadius: '50%',
          background: isOpen ? '#060e1d' : 'linear-gradient(135deg, #D4A017, #B8840A)',
          border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(212,160,23,0.45)',
          transition: 'all 0.25s ease',
        }}
      >
        {isOpen
          ? <X size={20} color="white" />
          : <MessageCircle size={20} color="white" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div style={{
          position: 'fixed', bottom: '5.5rem', right: '1.5rem', zIndex: 50,
          width: '340px', maxWidth: 'calc(100vw - 2rem)',
          background: 'white', borderRadius: '1.25rem',
          boxShadow: '0 24px 60px rgba(6,14,29,0.2)',
          border: '1px solid #e8edf5',
          display: 'flex', flexDirection: 'column',
          overflow: 'hidden',
        }}>

          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, #060e1d 0%, #0f2244 100%)',
            padding: '1rem 1.25rem',
            display: 'flex', alignItems: 'center', gap: '0.75rem',
          }}>
            <div style={{
              width: '2.25rem', height: '2.25rem', borderRadius: '50%',
              background: 'rgba(212,160,23,0.2)', border: '1px solid rgba(212,160,23,0.4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <Sparkles size={14} color="#D4A017" />
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ color: 'white', fontWeight: 700, fontSize: '0.875rem', margin: 0 }}>GOPPE Go Assistant</p>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.72rem', margin: 0 }}>Here to help you navigate</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.25rem', color: 'rgba(255,255,255,0.5)' }}
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div style={{
            flex: 1, overflowY: 'auto', padding: '1.25rem 1rem',
            display: 'flex', flexDirection: 'column', gap: '1rem',
            maxHeight: '320px', minHeight: '200px',
          }}>
            {messages.map((msg, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
                {/* Bubble */}
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.5rem', flexDirection: msg.role === 'user' ? 'row-reverse' : 'row' }}>
                  {/* Avatar */}
                  <div style={{
                    width: '1.75rem', height: '1.75rem', borderRadius: '50%', flexShrink: 0,
                    background: msg.role === 'bot' ? 'linear-gradient(135deg, #D4A017, #B8840A)' : '#e2e8f0',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {msg.role === 'bot'
                      ? <Bot size={12} color="white" />
                      : <User size={12} color="#64748b" />}
                  </div>
                  {/* Text */}
                  <div style={{
                    maxWidth: '78%', padding: '0.6rem 0.875rem',
                    borderRadius: msg.role === 'user' ? '1rem 1rem 0.2rem 1rem' : '1rem 1rem 1rem 0.2rem',
                    background: msg.role === 'user' ? '#0f2244' : '#f2f6fb',
                    color: msg.role === 'user' ? 'white' : '#1e293b',
                    fontSize: '0.825rem', lineHeight: 1.55,
                  }}>
                    {msg.text}
                  </div>
                </div>

                {/* Option buttons — stacked, full-width feel */}
                {msg.options && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', paddingLeft: '2.25rem', width: '100%' }}>
                    {msg.options.map((opt, j) => (
                      <button
                        key={j}
                        onClick={() => handleOptionClick(opt)}
                        style={{
                          background: 'white', border: '1.5px solid #D4A017',
                          color: '#0f2244', fontWeight: 600, fontSize: '0.775rem',
                          padding: '0.45rem 0.875rem', borderRadius: '0.5rem',
                          cursor: 'pointer', textAlign: 'left',
                          transition: 'all 0.15s ease',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = '#D4A017'; e.currentTarget.style.color = '#0f2244'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#0f2244'; }}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            style={{
              padding: '0.875rem 1rem',
              borderTop: '1px solid #f1f5f9',
              display: 'flex', gap: '0.5rem', alignItems: 'center',
              background: '#fafbfc',
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message…"
              style={{
                flex: 1, fontSize: '0.8rem', padding: '0.55rem 0.875rem',
                border: '1.5px solid #e2e8f0', borderRadius: '0.625rem',
                outline: 'none', color: '#1e293b', background: 'white',
              }}
            />
            <button
              type="submit"
              style={{
                width: '2.25rem', height: '2.25rem', borderRadius: '0.625rem',
                background: '#D4A017', border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Send size={14} color="white" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
