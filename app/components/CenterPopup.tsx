'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const CenterPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasClosed, setHasClosed] = useState(false);

    useEffect(() => {
        // Show after 15 seconds
        const timer = setTimeout(() => {
            if (!hasClosed) setIsVisible(true);
        }, 15000);

        return () => clearTimeout(timer);
    }, [hasClosed]);

    const handleClose = () => {
        setIsVisible(false);
        setHasClosed(true);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative bg-[#0F172A] border border-indigo-500/30 p-8 rounded-3xl max-w-md w-full shadow-2xl"
                    >
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
                        >
                            <span className="material-symbols-rounded text-2xl">close</span>
                        </button>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-indigo-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-indigo-400">
                                <span className="material-symbols-rounded text-4xl">rocket_launch</span>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2">Wait! Don't Miss Out</h3>
                            <p className="text-slate-400 mb-8">
                                Get a free website audit and strategy session worth ₹5,000. Limited slots available for this month.
                            </p>

                            <a
                                href="#contact"
                                onClick={handleClose}
                                className="block w-full py-4 rounded-xl bg-indigo-500 text-white font-bold text-lg hover:bg-indigo-400 transition-all shadow-lg hover:shadow-indigo-500/25"
                            >
                                Claim Free Audit
                            </a>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
