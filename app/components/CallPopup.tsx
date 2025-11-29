'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const CallPopup = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 5000); // Show after 5 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    className="fixed bottom-8 left-8 z-50 max-w-sm"
                >
                    <div className="bg-[#1E293B] border border-sky-400/30 p-4 rounded-2xl shadow-2xl relative">
                        <button
                            onClick={() => setIsVisible(false)}
                            className="absolute -top-2 -right-2 bg-slate-700 text-slate-300 rounded-full p-1 hover:bg-slate-600"
                        >
                            <span className="material-symbols-rounded text-sm">close</span>
                        </button>

                        <div className="flex items-center gap-4">
                            <div className="bg-sky-500/10 p-3 rounded-full text-sky-400 animate-pulse">
                                <span className="material-symbols-rounded text-2xl">call</span>
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-sm">Ready to scale?</h4>
                                <p className="text-slate-400 text-xs mb-2">Book a free strategy call with us.</p>
                                <a href="tel:+919453878422" className="text-sky-400 text-xs font-bold hover:underline">
                                    Call +91 9453878422
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
