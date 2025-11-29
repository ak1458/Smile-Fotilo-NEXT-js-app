'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';

export default function AboutPage() {
    return (
        <main className="bg-[#0F172A] min-h-screen text-slate-200 font-sans selection:bg-sky-400 selection:text-[#0F172A]">
            <NavBar />

            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-slate-50 mb-6">
                            We Are <span className="text-sky-400">Smile Fotilo</span>
                        </h1>
                        <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                            Based in the heart of Gonda & Lucknow, we are a team of passionate digital craftsmen. We don't just build websites; we build digital legacies.
                        </p>
                        <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                            Our journey began with a simple mission: to help local businesses compete on a global scale. Today, we are proud to be the agency behind successful brands like PulseKart and Veloria Vault.
                        </p>
                        <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                            We believe in the power of design to transform businesses. Whether you are a doctor, a retailer, or a startup, we have the tools and expertise to elevate your brand.
                        </p>

                        <div className="flex gap-8">
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-1">50+</h3>
                                <p className="text-slate-500 text-sm uppercase tracking-wider">Projects Delivered</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-1">100%</h3>
                                <p className="text-slate-500 text-sm uppercase tracking-wider">Client Satisfaction</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/5 relative z-10">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                                alt="Team working together"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
