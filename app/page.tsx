'use client';

import React, { useState, useTransition } from 'react';
import { motion } from 'framer-motion';
import { sendContactEmail } from './actions';

// --- Configuration ---
const theme = {
  colors: {
    bg: '#0F172A',      // Deep Void Blue
    surface: '#1E293B', // Surface Slate
    accent: '#38BDF8',  // Electric Blue (Tech)
    text: '#F8FAFC',    // White Text
    body: '#94A3B8',    // Grey Text
    success: '#10B981', // Emerald Green (Growth)
  }
};

// --- Components ---

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0F172A]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group" onClick={handleLinkClick}>
            {/* Replaced text logo with Image */}
            <img src="/logo.png" alt="Smile Fotilo Logo" className="h-10 w-auto object-contain" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Work', 'Services', 'About'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-slate-400 hover:text-sky-400 transition-colors">
                {item}
              </a>
            ))}
            <a href="#contact" className="px-5 py-2.5 rounded-full bg-sky-400 text-[#0F172A] font-bold text-sm hover:bg-white transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:-translate-y-0.5">
              Start Project
            </a>
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
            {['Home', 'Work', 'Services', 'About'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={handleLinkClick} className="block px-3 py-3 text-base font-medium text-slate-300 hover:bg-[#0F172A] rounded-md">
                {item}
              </a>
            ))}
            <a href="#contact" onClick={handleLinkClick} className="block mt-4 text-center px-3 py-3 text-base font-bold bg-sky-400 text-[#0F172A] rounded-md">
              Start Project
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center bg-[#0F172A]">
      {/* Anti-Gravity Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-[128px]"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[128px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E293B] border border-white/5 mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Accepting Projects 2025</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-50 leading-[1.1] mb-6 tracking-tight"
        >
          We Build Digital Experiences for <br className="hidden md:block" />
          Brands in <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-400">Gonda & Lucknow</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
        >
          Web Design. SEO. Strategic Branding. <br />
          The agency behind <span className="text-emerald-400 font-semibold border-b border-emerald-400/30">PulseKart</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#work" className="px-8 py-4 rounded-full bg-sky-400 text-[#0F172A] font-bold text-lg hover:bg-white transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] min-w-[180px]">
            View Our Work
          </a>
          <a href="#contact" className="px-8 py-4 rounded-full bg-transparent border border-slate-600 text-slate-200 font-medium text-lg hover:border-sky-400 hover:text-sky-400 transition-all min-w-[180px]">
            Book Strategy Call
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { icon: 'code', title: 'Web Development', desc: 'Fast, secure, and SEO-optimized websites on WordPress & Custom Stacks loading in under 2 seconds.' },
    { icon: 'trending_up', title: 'Digital Growth', desc: 'Data-driven SEO and Google Ads strategies that actually bring customers to your door.' },
    { icon: 'photo_camera', title: 'Creative Studio', desc: 'High-end product photography and brand identity design. Visuals that elevate perceived value.' }
  ];

  return (
    <section id="services" className="py-24 bg-[#0F172A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sky-400 font-bold tracking-wider uppercase text-sm">Our Expertise</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-50 mt-3">Digital Solutions</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-[#1E293B] p-8 rounded-3xl border border-white/5 hover:border-sky-400/50 hover:shadow-[0_10px_40px_-10px_rgba(56,189,248,0.1)] transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-[#0F172A] border border-sky-400/20 flex items-center justify-center text-sky-400 mb-6">
                <span className="material-symbols-rounded text-3xl">{service.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-50 mb-4">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    { title: 'PulseKart', category: 'Own Venture', desc: 'Complete E-commerce Architecture.', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80' },
    { title: 'KapdaFactory', category: 'E-Commerce', desc: 'Scale Up & Optimization.', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80' },
    { title: 'City Care Clinic', category: 'Brand Identity', desc: 'Booking System & SEO.', img: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <section id="work" className="py-24 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sky-400 font-bold tracking-wider uppercase text-sm">Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-50 mt-3">Selected Works</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-white/5">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-sky-500 text-[#0F172A] text-xs font-bold rounded-full">{project.category}</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-50 mb-2">{project.title}</h3>
              <p className="text-slate-400 text-sm">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sky-400 font-bold tracking-wider uppercase text-sm">Packages</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-50 mt-3">Simple Pricing</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Starter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl bg-[#1E293B] border border-white/5 hover:border-sky-400 transition-all"
          >
            <div className="text-sky-400 font-bold uppercase text-xs mb-2">The Starter</div>
            <h3 className="text-2xl font-bold text-slate-50 mb-4">₹15k <span className="text-sm text-slate-400 font-normal">/ project</span></h3>
            <p className="text-sm text-slate-400 mb-8">For doctors, clinics, or small shops needing a professional face.</p>
            <button className="block w-full py-3 rounded-xl border border-white/10 text-center font-bold text-slate-50 hover:bg-sky-400 hover:text-[#0F172A] transition-colors">Get Started</button>
          </motion.div>
          {/* Growth */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 rounded-3xl bg-[#1E293B] border border-sky-400 relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(56,189,248,0.15)]"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sky-400 text-[#0F172A] text-xs font-bold px-3 py-1 rounded-full uppercase">Popular</div>
            <div className="text-sky-400 font-bold uppercase text-xs mb-2">The Growth</div>
            <h3 className="text-2xl font-bold text-slate-50 mb-4">₹35k <span className="text-sm text-slate-400 font-normal">/ starting</span></h3>
            <p className="text-sm text-slate-400 mb-8">For retail brands ready to sell online. Dynamic content management.</p>
            <button className="block w-full py-3 rounded-xl bg-sky-400 text-center font-bold text-[#0F172A] hover:bg-white transition-colors">Choose Growth</button>
          </motion.div>
          {/* Custom */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-3xl bg-[#1E293B] border border-white/5 hover:border-emerald-400 transition-all"
          >
            <div className="text-emerald-400 font-bold uppercase text-xs mb-2">The Domination</div>
            <h3 className="text-2xl font-bold text-slate-50 mb-4">Custom</h3>
            <p className="text-sm text-slate-400 mb-8">Full stack solution. From product photography to running ads.</p>
            <button className="block w-full py-3 rounded-xl border border-white/10 text-center font-bold text-slate-50 hover:bg-emerald-400 hover:text-[#0F172A] transition-colors">Contact Sales</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    startTransition(async () => {
      const result = await sendContactEmail(formData);
      setStatus(result);
      if (result.success) {
        (event.target as HTMLFormElement).reset();
      }
    });
  };

  return (
    <section id="contact" className="py-24 bg-[#1E293B] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mt-4 mb-6">
              Let's Build Something <br /><span className="text-sky-400">Extraordinary.</span>
            </h2>
            <p className="text-slate-400 mb-8">
              Ready to transform your digital presence? Fill out the form, and I'll personally get back to you within 24 hours.
            </p>
            <div className="space-y-6 mt-8">
              <div className="flex items-center gap-4">
                <span className="material-symbols-rounded text-sky-400 bg-[#0F172A] p-3 rounded-full">call</span>
                <span className="text-slate-200 font-bold">+91 9453878422</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-rounded text-sky-400 bg-[#0F172A] p-3 rounded-full">mail</span>
                <span className="text-slate-200 font-bold">support@smilefotilo.com</span>
              </div>
              {/* Address Removed as requested */}
            </div>
          </motion.div>

          {/* COMPLETE Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0F172A] p-8 rounded-3xl border border-white/5 shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Input */}
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Name</label>
                  <input name="name" type="text" placeholder="Your Name" required className="w-full bg-[#1E293B] border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:border-sky-400 outline-none transition-colors" />
                </div>
                {/* Phone Input */}
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Phone</label>
                  <input name="phone" type="tel" placeholder="+91..." required className="w-full bg-[#1E293B] border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:border-sky-400 outline-none transition-colors" />
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Email</label>
                <input name="email" type="email" placeholder="hello@example.com" required className="w-full bg-[#1E293B] border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:border-sky-400 outline-none transition-colors" />
              </div>

              {/* Project Type Dropdown - ADDED */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Project Type</label>
                <select name="projectType" className="w-full bg-[#1E293B] border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:border-sky-400 outline-none transition-colors">
                  <option>Web Development</option>
                  <option>E-Commerce Store</option>
                  <option>Product Photography</option>
                  <option>Digital Marketing / SEO</option>
                  <option>Brand Identity</option>
                </select>
              </div>

              {/* Message Textarea */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Message</label>
                <textarea name="message" rows={4} placeholder="Tell us about your project goals..." required className="w-full bg-[#1E293B] border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:border-sky-400 outline-none transition-colors"></textarea>
              </div>

              <button type="submit" disabled={isPending} className="w-full py-4 rounded-xl bg-sky-400 text-[#0F172A] font-bold text-lg hover:bg-white transition-all shadow-lg hover:shadow-sky-500/20 disabled:opacity-50 disabled:cursor-not-allowed">
                {isPending ? 'Sending...' : 'Send Message'}
              </button>

              {status && (
                <div className={`text-center text-sm font-bold ${status.success ? 'text-emerald-400' : 'text-red-400'}`}>
                  {status.message}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-black border-t border-white/10 pt-16 pb-8 text-center text-slate-500 text-sm">
    <div className="max-w-7xl mx-auto px-4">
      <p className="mb-4 flex justify-center gap-6">
        <a href="#" className="hover:text-sky-400 transition-colors">Instagram</a>
        <a href="#" className="hover:text-sky-400 transition-colors">LinkedIn</a>
        <a href="#" className="hover:text-sky-400 transition-colors">Facebook</a>
      </p>
      <p>&copy; 2025 Smile Fotilo. Created by Smile fotilo.</p>
    </div>
  </footer>
);

export default function Home() {
  return (
    <main className="bg-[#0F172A] min-h-screen text-slate-200 font-sans selection:bg-sky-400 selection:text-[#0F172A]">
      <NavBar />
      <Hero />
      <Services />
      <Portfolio />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
