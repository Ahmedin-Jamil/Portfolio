import { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '@/lib/gemini';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bot, Send, User, X, Minimize2, Maximize2 } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const systemPrompt = `You are an AI assistant for my portfolio website. Your role is to help visitors understand my expertise in AI Solutions Architecture and Full-Stack Development. Here are some key points about me:

1. I specialize in:
   - AI Solutions Architecture
   - Full-Stack Development
   - AI Chatbot Development
   - System Integration
   - Business Analysis

2. Notable Projects:
   - Baguio Pet Boarding Platform (with AI Chatbot)
   - Quantum Flow Enterprise (ERP System)
   - AI Resume Analyzer Pro
   - SmartFlow Onboarding System

3. Key Skills:
   - AI Prompt Engineering (95%)
   - System Architecture (90%)
   - Full-Stack Development (85%)
   - Business Analysis (88%)

Always be professional, informative, and showcase my expertise in AI and development. If asked about hiring or contact, direct them to the contact form on the portfolio.

Keep responses concise but informative, focusing on demonstrating both technical knowledge and business value.`;

export default function ChatBot() {
  useEffect(() => {
    // Ensure the chatbot is properly initialized
    console.log('ChatBot initialized');
  }, []);

  // Set minimized to true by default
  const [isMinimized, setIsMinimized] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm the AI assistant for this portfolio. I can tell you about the projects, skills, and expertise showcased here. What would you like to know?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    "Tell me about your AI projects",
    "What's your expertise in chatbots?",
    "Show me your technical skills",
    "How can we work together?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = async (userMessage: string) => {
    try {
      const response = await getGeminiResponse(userMessage, systemPrompt);
      return response;
    } catch (error) {
      console.error('Error:', error);
      return "I apologize, but I'm having trouble connecting at the moment. Please try again later.";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);
    setShowSuggestions(false);

    const response = await generateResponse(userMessage);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <div
      className={`fixed bottom-4 right-4 z-[9999]`}
      onMouseEnter={() => {
        hoverTimeout.current = setTimeout(() => setIsHovered(true), 350); // 350ms delay
      }}
      onMouseLeave={() => {
        if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
        setIsHovered(false);
      }}
    >
      {/* Minimized Circle Bot Icon */}
      {isMinimized && !isHovered && (
        <button
          className="flex items-center justify-center w-16 h-16 rounded-full bg-white border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-200"
          style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)' }}
          onClick={() => setIsMinimized(false)}
          aria-label="Open Chatbot"
        >
          <Bot className="w-8 h-8 text-primary" />
        </button>
      )}
      {/* Expanded on hover or when not minimized, with slide-out effect */}
      <div
        style={{
          transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.4s',
          transform: (!isMinimized || isHovered)
            ? 'translateX(0)' : 'translateX(120%)',
          opacity: (!isMinimized || isHovered) ? 1 : 0,
          pointerEvents: (!isMinimized || isHovered) ? 'auto' : 'none',
          position: 'absolute',
          bottom: 0,
          right: 0,
          zIndex: 10,
        }}
      >
        {((!isMinimized || isHovered)) && (
          <Card className="border-2 border-primary/20 w-[380px]">
          {/* Chat Header */}
          <div className="flex items-center justify-between p-4 border-b bg-primary/5">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">Portfolio Assistant</h3>
            </div>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8"
                onClick={() => setIsMinimized(!isMinimized)}
              >
                {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8"
                onClick={() => setMessages([messages[0]])}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Only show chat content if not minimized */}
          {!isMinimized && (
            <>
              {/* Messages Area */}
              <ScrollArea className="h-[400px] p-4 space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex gap-2 ${
                      message.role === 'assistant' ? 'justify-start' : 'justify-end'
                    }`}
                  >
                    {message.role === 'assistant' && (
                      <Bot className="w-6 h-6 text-primary mt-2" />
                    )}
                    <div
                      className={`rounded-lg p-3 max-w-[80%] ${
                        message.role === 'assistant'
                          ? 'bg-primary/10'
                          : 'bg-primary text-primary-foreground'
                      }`}
                    >
                      {message.content}
                    </div>
                    {message.role === 'user' && (
                      <User className="w-6 h-6 text-primary mt-2" />
                    )}
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-2">
                    <Bot className="w-6 h-6 text-primary mt-2" />
                    <div className="bg-primary/10 rounded-lg p-3">
                      Thinking...
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </ScrollArea>

              {/* Suggestions */}
              {showSuggestions && (
                <div className="p-4 border-t border-border/50">
                  <div className="flex flex-wrap gap-2">
                    {suggestions.map((suggestion, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setInput(suggestion);
                          handleSubmit(new Event('submit') as any);
                        }}
                      >
                        {suggestion}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input Area */}
              <form onSubmit={handleSubmit} className="p-4 border-t">
                <div className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    disabled={isLoading}
                  />
                  <Button type="submit" disabled={isLoading || !input.trim()}>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </form>
            </>
          )}
          </Card>
        )}
      </div>
    </div>
  );
}