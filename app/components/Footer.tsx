import React from 'react';

export const Footer = () => (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 text-center text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto px-4">
            <div className="mb-4 flex justify-center gap-4">
                <a href="https://www.instagram.com/ashrafkamal14/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1E293B] flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-all">
                    <span className="material-symbols-rounded text-xl">photo_camera</span>
                </a>
                <a href="https://www.linkedin.com/in/ashrafkamal14/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1E293B] flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-all">
                    <span className="material-symbols-rounded text-xl">work</span>
                </a>
                <a href="https://www.facebook.com/smilefotilo" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1E293B] flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-all">
                    <span className="material-symbols-rounded text-xl">public</span>
                </a>
            </div>
            <p>&copy; 2025 Smile Fotilo. Created by Smile fotilo.</p>
        </div>
    </footer>
);
