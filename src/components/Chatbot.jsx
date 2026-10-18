import { useState, useRef, useEffect } from 'react';
import { X, Send } from 'lucide-react';
import { LogoMark } from './Logo';

// Removed ScaryIPJoke

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [userIP, setUserIP] = useState('192.168.1.1');
  
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      sender: 'ai', 
      text: "Hi! I'm Giovanni's AI assistant. Ask me anything about his skills, experience, or projects!" 
    }
  ]);
  
  const messagesEndRef = useRef(null);

  // Fetch user's real IP address for the joke
  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then(res => res.json())
      .then(data => setUserIP(data.ip))
      .catch(() => setUserIP('192.168.1.1'));
  }, []);

  // Show tooltip after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000); // Pops up 3 seconds after website loads
    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Simulated AI Logic (Keyword matching trained on Resume/Data)
  const generateAIResponse = (userText, questionCount) => {
    const text = userText.toLowerCase();
    let coreResponse;
    
    // 1. Tech Stack & Skills
    if (text.includes('react') || text.includes('vue') || text.includes('frontend')) {
      coreResponse = "Giovanni is highly skilled in frontend development! He builds complex interfaces primarily with ReactJS, Vue.js 3, and Tailwind CSS. He's also proficient with Next.js and Inertia.js.";
    }
    else if (text.includes('laravel') || text.includes('php') || text.includes('backend') || text.includes('api')) {
      coreResponse = "For backend architecture, Giovanni specializes in Laravel (PHP). He builds robust RESTful APIs, handles database migrations, and implements secure authentication. He also has strong experience with Supabase, MySQL, and PostgreSQL.";
    }
    else if (text.includes('mobile') || text.includes('app') || text.includes('native') || text.includes('amo na')) {
      coreResponse = "Yes! He is an experienced mobile developer. He builds cross-platform iOS and Android apps using React Native and Expo Router. He recently built the 'Amo Na' application which features offline-first local state storage.";
    }
    
    // 2. Work Experience
    else if (text.includes('experience') || text.includes('work') || text.includes('job') || text.includes('nexxus')) {
      coreResponse = "Giovanni is currently a Full-Stack Software Developer at Nexxus Software Corporation (Sept 2026 - Present), where he architects and deploys scalable web apps using React, Vue, and Laravel. He also works as an Independent Freelance Developer.";
    }
    else if (text.includes('evsu') || text.includes('intern') || text.includes('college')) {
      coreResponse = "Giovanni studied at Eastern Visayas State University (EVSU). During his time there, he worked as IT Staff & Systems Developer for the College of Engineering, where he engineered their Dean's Office System to digitize administrative records.";
    }
    
    // 3. Projects
    else if (text.includes('project') || text.includes('portfolio') || text.includes('build')) {
      coreResponse = "Giovanni has built over 10 major projects! Some highlights include: 'VFluxify' (a lossless music streamer), 'Waray Flix' (a React 19 streaming app), 'JK Boutique' (Next.js commerce platform), and 'Amo Na' (React Native app).";
    }
    else if (text.includes('vfluxify') || text.includes('music')) {
      coreResponse = "'VFluxify' is one of his flagship projects. It's a lossless music streaming app built with a clean Obsidian-inspired UI, featuring live synchronized lyrics and cloud playlists. It's built with Tailwind CSS and full-stack web tech.";
    }
    
    // 4. Endorsements / Soft Skills
    else if (text.includes('endorse') || text.includes('soft skill') || text.includes('team') || text.includes('learn')) {
      coreResponse = "Giovanni comes highly recommended! Fellow developers like Lorenz Gabriel Sabalza and JP praise his ability to learn new tech stacks almost overnight. Danil Ampatin noted his natural instinct for writing clean, efficient code.";
    }

    // 5. Contact & Availability
    else if (text.includes('hire') || text.includes('available') || text.includes('freelance') || text.includes('opportunity')) {
      coreResponse = "Giovanni is actively accepting project-based and contract work! He is ready to bring value to your engineering team. The best way to reach him is by emailing giovannihanzguino@gmail.com.";
    }
    else if (text.includes('contact') || text.includes('social') || text.includes('email') || text.includes('reach') || text.includes('link')) {
      coreResponse = (
        <div className="flex flex-col gap-2">
          <p>You can email Giovanni at <strong>giovannihanzguino@gmail.com</strong> or reach out on his socials:</p>
          <div className="flex flex-col gap-1 mt-1">
            <a href="https://github.com/vannrosales" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4 decoration-line hover:decoration-fg">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/giovanni-hanz-guino-971118378/" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4 decoration-line hover:decoration-fg">LinkedIn ↗</a>
            <a href="https://discord.com/awsdvann" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4 decoration-line hover:decoration-fg">Discord ↗</a>
            <a href="https://instagram.com/008.vann" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4 decoration-line hover:decoration-fg">Instagram ↗</a>
            <a href="https://www.facebook.com/nnav.08" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4 decoration-line hover:decoration-fg">Facebook ↗</a>
          </div>
        </div>
      );
    }

    // 6. Local Dialect Easter Eggs
    else if (text.includes('bayot') || text.includes('bading') || text.includes('bakla') || text.includes('gay') || text.includes('biot')) {
      coreResponse = "bayot ka gjap 😂";
    }
    else if (text.includes('nayawa') || text.includes('yawa')) {
      coreResponse = "yawaka gjap 😂";
    }
    else if (text.includes('potaka') || text.includes('pota')) {
      coreResponse = "potaka gjap 😂";
    }
    else if (text.includes('bulok')){
      coreResponse = "bulok ka gjap 😂";
    }
    else if (text.includes('bai') || text.includes('bisakol') || text.includes('bisaya')) {
      coreResponse = "ulol pagpag eater😂";
    }

    // 7. Identity / Greetings
    else if (text.includes('who are you') || text.includes('ai') || text.includes('bot')) {
      coreResponse = "I am a custom AI assistant built directly into this portfolio! I have memorized Giovanni's entire resume, tech stack, and project history to help you learn more about him quickly.";
    }
    
    // 8. Gibberish / Keyboard Smash Detection
    else if (!text.includes(' ') && text.length > 10) {
      coreResponse = "Did your cat walk over your keyboard? 😹 If you have a question about Giovanni's frontend or mobile development skills, just let me know!";
    }
    
    else {
      const words = text.split(/[\s,!?]+/);
      if (words.includes('hello') || words.includes('hi') || words.includes('hey') || words.includes('yo')) {
        coreResponse = "Hello there! 👋 I'm a custom AI built to answer questions about Giovanni Hanz Guino. What would you like to know about his engineering experience?";
      } else {
        // Default fallback
        coreResponse = "That's a great question! While I'm just a lightweight AI assistant trained on his resume, Giovanni would love to answer that for you himself. You can email him at giovannihanzguino@gmail.com to chat!";
      }
    }

    // Trigger Easter Egg exactly on the 3rd question regardless of what they asked!
    if (questionCount === 3) {
      const os = navigator.userAgent.includes('Win') ? 'Windows' : navigator.userAgent.includes('Mac') ? 'MacOS' : navigator.userAgent.includes('Linux') ? 'Linux' : 'Windows 11';
      const browser = navigator.userAgent.includes('Chrome') ? 'Google Chrome' : navigator.userAgent.includes('Safari') ? 'Safari' : navigator.userAgent.includes('Brave') ? 'Brave Browser' : 'Browser';

      const ipMsg = (
        <div className="font-mono text-xs">
          <p className="text-red-600 dark:text-red-400 font-bold mb-1">Hacking Attempt Detected</p>
          <p>Extracting IP Address: <strong className="text-red-500">{userIP}</strong></p>
        </div>
      );
      
      const systemMsg = (
        <div className="font-mono text-xs">
          <p>Identifying System: <strong className="text-red-500">{os}</strong></p>
          <p>Browser Fingerprint: <strong className="text-red-500">{browser}</strong></p>
        </div>
      );
      
      const jokeMsg = "😂 ...Just kidding! But seriously, always be careful—anything on the internet can get your information if you aren't safe!";
      
      return [coreResponse, ipMsg, systemMsg, jokeMsg];
    }

    return coreResponse;
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = { id: Date.now(), sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Calculate how many questions the user has asked (including this one)
    const questionCount = messages.filter(m => m.sender === 'user').length + 1;

    // Get response (could be string or array)
    const rawResponse = generateAIResponse(userMessage.text, questionCount);
    const responses = Array.isArray(rawResponse) ? rawResponse : [rawResponse];

    const sendSequentially = (index) => {
      if (index >= responses.length) {
        setIsTyping(false);
        return;
      }
      
      // Add current message
      setMessages(prev => [...prev, { id: Date.now() + index, sender: 'ai', text: responses[index] }]);
      
      // If there are more messages, keep typing and trigger next
      if (index < responses.length - 1) {
        setIsTyping(true);
        setTimeout(() => sendSequentially(index + 1), 2500);
      } else {
        setIsTyping(false);
      }
    };

    // Initial AI thinking delay
    setTimeout(() => sendSequentially(0), 1000);
  };

  return (
    <>
      {/* Tooltip Notification */}
      <div 
        className={`fixed bottom-22 right-6 z-50 bg-bg border border-line px-4 py-3 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.3)] transition-all duration-500 origin-bottom-right ${showTooltip && !isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-2 pointer-events-none'}`}
      >
        <p className="font-serif italic text-lg leading-none">Ask me anything.</p>
        <p className="text-[11px] text-muted mt-1">I'm the vnn.dev assistant</p>
      </div>

      {/* Floating Chat Button */}
      <button
        onClick={() => {
          setIsOpen(true);
          setShowTooltip(false);
        }}
        className={`fixed bottom-6 right-6 z-50 h-12 pl-4 pr-5 bg-fg text-bg rounded-full shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)] hover:scale-105 transition-all duration-300 flex items-center gap-2 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
        aria-label="Open AI Chat"
      >
        <LogoMark draw={false} className="h-4 w-auto" strokeWidth={4} />
        <span className="font-serif italic text-lg leading-none">ai</span>
      </button>

      {/* Chat Window Overlay */}
      <div 
        className={`fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] sm:w-[400px] h-[520px] max-h-[80vh] flex flex-col bg-bg border border-line shadow-[0_40px_80px_-40px_rgba(0,0,0,0.45)] overflow-hidden transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}
      >
        {/* Chat Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-line">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-line">
              <img src="/avatar.png" alt="AI Avatar" className="w-full h-full object-cover grayscale" />
            </div>
            <div>
              <h3 className="font-serif text-xl leading-none">vnn<em>.dev</em> assistant</h3>
              <p className="text-[11px] text-muted mt-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-fg animate-pulse"></span> Online
              </p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 opacity-50 hover:opacity-100 transition-opacity"
            aria-label="Close chat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-5">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[85%] text-sm leading-relaxed ${
                  msg.sender === 'user' 
                    ? 'bg-fg text-bg px-4 py-3 rounded-2xl rounded-br-sm' 
                    : 'border-l border-fg pl-4 py-1'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          
          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="border-l border-fg pl-4 py-2 flex gap-1.5 items-center">
                <div className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={handleSend} className="px-5 py-4 border-t border-line flex gap-3 items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about my tech stack…"
            className="flex-1 bg-transparent py-2 text-sm focus:outline-none placeholder:text-muted"
          />
          <button 
            type="submit"
            disabled={!input.trim() || isTyping}
            className="p-2.5 bg-fg text-bg rounded-full hover:scale-105 disabled:opacity-30 disabled:hover:scale-100 transition-all"
            aria-label="Send message"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </>
  );
}

