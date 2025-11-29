'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Message = {
    id: string;
    text: string;
    isUser: boolean;
};

const QA_DATA = [
    {
        id: 'services',
        question: 'What services do you offer?',
        answer: 'We offer Web Design, Development, Branding, and Digital Marketing services tailored for global brands.'
    },
    {
        id: 'pricing',
        question: 'How much does a website cost?',
        answer: 'Our packages start from ₹29,999. You can view our detailed pricing section on the homepage.'
    },
    {
        id: 'contact',
        question: 'How can I contact you?',
        answer: 'You can email us at ashrafkamal1458@gmail.com or call us at +91 9453878422.'
    },
    {
        id: 'location',
        question: 'Where are you located?',
        answer: 'We are based in Gonda, Greater Noida, Lucknow, and Ayodhya, serving clients globally.'
    }
];

export const ChatSupport = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: 'welcome', text: 'Hi! 👋 How can we help you today?', isUser: false }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, isOpen]);

    const handleQuestionClick = (qa: typeof QA_DATA[0]) => {
        // Add user question
        const userMsgId = Date.now().toString();
        setMessages(prev => [...prev, { id: userMsgId, text: qa.question, isUser: true }]);
        setIsTyping(true);

        // Simulate typing delay
        setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [...prev, { id: Date.now().toString(), text: qa.answer, isUser: false }]);
        }, 1000);
    };

    return (
        <>
            {/* Chat Trigger Button */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-24 right-8 z-50 p-4 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-500 transition-colors border-2 border-white/10"
                aria-label="Open Support Chat"
            >
                {isOpen ? (
                    <span className="material-symbols-rounded text-2xl">close</span>
                ) : (
                    <span className="material-symbols-rounded text-2xl">chat</span>
                )}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-40 right-8 z-50 w-80 sm:w-96 bg-[#0F172A] border border-indigo-500/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[500px]"
                    >
                        {/* Header */}
                        <div className="bg-indigo-600 p-4 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                <span className="material-symbols-rounded text-white text-sm">support_agent</span>
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-sm">Smile Fotilo Support</h3>
                                <p className="text-indigo-200 text-xs">We typically reply instantly</p>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#020617] scrollbar-thin scrollbar-thumb-indigo-900 scrollbar-track-transparent">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.isUser
                                                ? 'bg-indigo-600 text-white rounded-tr-none'
                                                : 'bg-[#1E293B] text-slate-300 rounded-tl-none border border-white/5'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-[#1E293B] p-3 rounded-2xl rounded-tl-none border border-white/5 flex gap-1">
                                        <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                        <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                        <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Actions */}
                        <div className="p-4 bg-[#0F172A] border-t border-white/5">
                            <p className="text-xs text-slate-500 mb-2 font-medium uppercase tracking-wider">Suggested Questions</p>
                            <div className="flex flex-wrap gap-2">
                                {QA_DATA.map((qa) => (
                                    <button
                                        key={qa.id}
                                        onClick={() => handleQuestionClick(qa)}
                                        className="text-xs bg-[#1E293B] hover:bg-indigo-600 hover:text-white text-slate-300 px-3 py-2 rounded-lg transition-colors border border-white/5 text-left"
                                    >
                                        {qa.question}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
