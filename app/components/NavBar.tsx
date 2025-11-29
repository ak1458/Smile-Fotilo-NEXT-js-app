'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
                <Link href="/#services" onClick={handleLinkClick} className="block px-3 py-3 text-base font-medium text-slate-300 hover:bg-[#0F172A] rounded-md">Services</Link>
                <Link href="/about" onClick={handleLinkClick} className="block px-3 py-3 text-base font-medium text-slate-300 hover:bg-[#0F172A] rounded-md">About</Link>
                <Link href="/#contact" onClick={handleLinkClick} className="block mt-4 text-center px-3 py-3 text-base font-bold bg-sky-400 text-[#0F172A] rounded-md">
                    Start Project
                </Link>
            </div >
        </div >
    )
}
        </nav >
    );
};
