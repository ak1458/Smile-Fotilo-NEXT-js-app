'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className="fixed top-0 w-full z-50 bg-[#0F172A]/90 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group" onClick={handleLinkClick}>
                        {/* Replaced text logo with Image */}
                        <img src="/logo.png" alt="Smile Fotilo Logo" className="h-10 w-auto object-contain brightness-200" />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/#home" className="text-sm font-medium text-slate-400 hover:text-sky-400 transition-colors">Home</Link>
                        <Link href="/#work" className="text-sm font-medium text-slate-400 hover:text-sky-400 transition-colors">Work</Link>
                        <Link href="/#services" className="text-sm font-medium text-slate-400 hover:text-sky-400 transition-colors">Services</Link>
                        <Link href="/about" className="text-sm font-medium text-slate-400 hover:text-sky-400 transition-colors">About</Link>
                        <Link href="/#contact" className="px-5 py-2.5 rounded-full bg-sky-400 text-[#0F172A] font-bold text-sm hover:bg-white transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:-translate-y-0.5">
                            Start Project
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-100 p-2">
                        <span className="material-symbols-rounded text-3xl">menu</span>
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-[#1E293B] border-t border-white/5 absolute w-full">
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        <Link href="/#home" onClick={handleLinkClick} className="block px-3 py-3 text-base font-medium text-slate-300 hover:bg-[#0F172A] rounded-md">Home</Link>
                        <Link href="/#work" onClick={handleLinkClick} className="block px-3 py-3 text-base font-medium text-slate-300 hover:bg-[#0F172A] rounded-md">Work</Link>
                        <Link href="/#services" onClick={handleLinkClick} className="block px-3 py-3 text-base font-medium text-slate-300 hover:bg-[#0F172A] rounded-md">Services</Link>
                        <Link href="/about" onClick={handleLinkClick} className="block px-3 py-3 text-base font-medium text-slate-300 hover:bg-[#0F172A] rounded-md">About</Link>
                        <Link href="/#contact" onClick={handleLinkClick} className="block mt-4 text-center px-3 py-3 text-base font-bold bg-sky-400 text-[#0F172A] rounded-md">
                            Start Project
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};
