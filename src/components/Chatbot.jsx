import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { Sparkles } from 'lucide-react';

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
            <a href="https://github.com/vannrosales" target="_blank" rel="noreferrer" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/giovanni-hanz-guino-971118378/" target="_blank" rel="noreferrer" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">LinkedIn ↗</a>
            <a href="https://discord.com/awsdvann" target="_blank" rel="noreferrer" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">Discord ↗</a>
            <a href="https://instagram.com/008.vann" target="_blank" rel="noreferrer" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">Instagram ↗</a>
            <a href="https://www.facebook.com/nnav.08" target="_blank" rel="noreferrer" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">Facebook ↗</a>
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
        className={`fixed bottom-24 right-6 z-50 bg-[var(--bg-color)]/90 backdrop-blur-md border border-black/20 dark:border-white/20 text-black dark:text-white px-5 py-3 rounded-2xl rounded-br-sm shadow-2xl transition-all duration-500 origin-bottom-right flex flex-col gap-1 ${showTooltip && !isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-50 opacity-0 translate-y-4 pointer-events-none'}`}
      >
        <div className="text-xs font-bold tracking-widest uppercase flex items-center gap-2">
          <Bot className="w-3.5 h-3.5 text-emerald-500" />
          Click Me!
        </div>
        <div className="text-[10px] opacity-70 font-medium">I am the vnn.dev AI Chatbot</div>
      </div>

      {/* Floating Chat Button */}
      <button
        onClick={() => {
          setIsOpen(true);
          setShowTooltip(false);
        }}
        className={`fixed bottom-6 right-6 z-50 h-14 px-5 bg-[var(--bg-color)]/80 backdrop-blur-md border border-black/20 dark:border-white/20 text-black dark:text-white rounded-full shadow-2xl hover:scale-110 hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300 flex items-center justify-center ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
        aria-label="Open AI Chat"
      >
        <span className="font-black tracking-tighter text-lg">vnn<span className="text-emerald-500 animate-pulse">.</span>ai</span>
      </button>

      {/* Chat Window Overlay */}
      <div 
        className={`fixed bottom-6 right-6 z-50 w-[350px] sm:w-[400px] h-[500px] max-h-[80vh] flex flex-col bg-zinc-50 dark:bg-zinc-900 border border-black/20 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}
      >
        {/* Chat Header */}
        <div className="flex items-center justify-between p-4 bg-black/5 dark:bg-white/5 border-b border-black/20 dark:border-white/10">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-black/10 dark:border-white/10 shadow-sm bg-emerald-50/50 dark:bg-emerald-900/20">
              <img src="/avatar.png" alt="AI Avatar" className="w-full h-full object-cover" />
              <div className="absolute bottom-0.5 right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white dark:border-black"></div>
            </div>
            <div>
              <h3 className="font-bold text-xs tracking-widest uppercase opacity-80">vnn.dev Assistant</h3>
              <p className="text-[10px] opacity-40 font-mono tracking-widest uppercase mt-0.5 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Online
              </p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition-colors opacity-50 hover:opacity-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-6">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[85%] p-4 text-sm leading-relaxed ${
                  msg.sender === 'user' 
                    ? 'bg-black text-white dark:bg-white dark:text-black rounded-2xl rounded-br-sm shadow-md font-medium' 
                    : 'bg-[var(--bg-color)] border border-black/20 dark:border-white/10 rounded-2xl rounded-bl-sm shadow-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          
          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-[var(--bg-color)] border border-black/20 dark:border-white/10 p-5 rounded-2xl rounded-bl-sm flex gap-1.5 items-center shadow-sm">
                <div className="w-1.5 h-1.5 bg-black/40 dark:bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-1.5 h-1.5 bg-black/40 dark:bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-1.5 h-1.5 bg-black/40 dark:bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={handleSend} className="p-4 bg-[var(--bg-color)] border-t border-black/20 dark:border-white/10 flex gap-3 items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about my tech stack..."
            className="flex-1 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-black/30 dark:focus:border-white/30 transition-colors placeholder:text-black/40 dark:placeholder:text-white/40"
          />
          <button 
            type="submit"
            disabled={!input.trim() || isTyping}
            className="p-3 bg-black text-white dark:bg-white dark:text-black rounded-full hover:scale-105 disabled:opacity-30 disabled:hover:scale-100 transition-all shadow-md"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </>
  );
}

