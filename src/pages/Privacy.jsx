import React from 'react';
import { ArrowLeft, Shield, Lock, Eye, ShieldCheck } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-height-screen bg-[#070F21] text-slate-200 antialiased selection:bg-[#E8621A] selection:text-white relative overflow-hidden flex flex-col justify-between py-12 px-4 sm:px-6 lg:px-8">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#E8621A]/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-500/3 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-4xl mx-auto w-full relative z-10 space-y-8">
        {/* Header / Brand */}
        <header className="flex items-center justify-between border-b border-slate-900 pb-6">
          <a href="/" className="flex items-center gap-3 group">
            <img 
              src="images/logo.png" 
              alt="Bangarkonda Logo" 
              className="h-20 w-auto object-contain filter drop-shadow-[0_0_8px_rgba(232,98,26,0.25)] transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col justify-center">
              <span className="text-sm font-black tracking-widest text-[#E8621A] uppercase leading-none font-sans">
                BANGARKONDA
              </span>
              <span className="text-[9px] tracking-[0.25em] text-[#d4af37] font-black uppercase mt-0.5 leading-none">
                PROJECTS
              </span>
              <span className="text-[5.5px] tracking-[0.1em] text-slate-400 font-bold uppercase mt-0.5 leading-none">
                CONSTRUCTION • DEVELOPMENT • TRADING
              </span>
            </div>
          </a>

          <a 
            href="/" 
            className="btn-outline px-4 py-2 text-xs font-black uppercase tracking-wider inline-flex items-center gap-2 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </a>
        </header>

        {/* Hero Section */}
        <div className="space-y-3">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#d4af37] flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#E8621A]" />
            LEGAL & COMPLIANCE DESK
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Privacy Policy
          </h1>
          <div className="w-16 h-1 bg-[#E8621A]"></div>
          <p className="text-xs text-slate-400 font-mono">
            Effective Date: 10 June 2026
          </p>
        </div>

        {/* Content */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl space-y-8 leading-relaxed text-sm">
          <p className="text-slate-300 font-semibold border-l-2 border-[#E8621A] pl-4">
            Bangarkonda Projects Pvt. Ltd. ("we", "our", "us") is committed to protecting your privacy. This policy explains how we collect, use and safeguard your information when you visit our website.
          </p>

          <section className="space-y-4">
            <h2 className="text-lg font-black text-white uppercase tracking-wider flex items-center gap-2">
              <Eye className="w-5 h-5 text-[#E8621A]" />
              1. Information We Collect
            </h2>
            <div className="bg-slate-950/40 border border-slate-900/60 p-5 rounded-2xl space-y-3">
              <p className="text-xs text-slate-400 font-semibold">We may collect information through direct interactions and automated tracking:</p>
              <ul className="list-disc list-inside space-y-2 text-xs text-slate-300 pl-2">
                <li><strong className="text-white">Directly Provided Data:</strong> Personal information you voluntarily submit, such as name, email address, phone number, and specific project enquiry details.</li>
                <li><strong className="text-white">Automatically Collected Data:</strong> Network and device data collected via cookies, pixel tags, and tracking systems. This includes IP addresses, browser specifications, and usage patterns.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-black text-white uppercase tracking-wider flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#E8621A]" />
              2. Use of Information
            </h2>
            <p className="text-xs text-slate-300">
              We process personal information to address customer inquiries, deliver project proposals, improve site navigation, and transmit updates regarding our managed farmland, solar energy, and hospitality offerings. We retain data strictly in compliance with applicable statutory terms and delete records when no longer necessary.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-black text-white uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#E8621A]" />
              3. Third Parties & Links
            </h2>
            <p className="text-xs text-slate-300">
              We do not sell your personal data. We may share information with qualified service providers and legal counsel to fulfill compliance requirements or court orders. Our platform contains links to external resources; we are not responsible for the privacy practices of third-party platforms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-black text-white uppercase tracking-wider flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#E8621A]" />
              4. Your Rights & Contacts
            </h2>
            <p className="text-xs text-slate-300">
              You possess legal rights regarding the access, rectification, or deletion of your personal records. For inquiries, concerns, or requests regarding data storage, contact our support division:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-semibold">
              <div className="bg-slate-950/60 border border-slate-900 p-4 rounded-xl text-center">
                <span className="text-[9px] text-[#d4af37] uppercase tracking-wider block">Email Support</span>
                <a href="mailto:bangarkondaprojectspvtltd@gmail.com" className="text-xs text-white hover:text-[#E8621A] transition-colors mt-1 block">
                  bangarkondaprojectspvtltd@gmail.com
                </a>
              </div>
              <div className="bg-slate-950/60 border border-slate-900 p-4 rounded-xl text-center">
                <span className="text-[9px] text-[#d4af37] uppercase tracking-wider block">Helpline Desk</span>
                <a href="tel:+919972437119" className="text-xs text-white hover:text-[#E8621A] transition-colors mt-1 block">
                  +91 9972437119
                </a>
              </div>
            </div>
          </section>

          <div className="border-t border-slate-900 pt-6 text-center text-xs text-slate-400 font-semibold">
            By utilizing our site you agree to the conditions of this policy. We reserve the right to modify this statement, and revisions will be updated on this page.
          </div>
        </div>

        {/* Footer info */}
        <footer className="text-center text-slate-500 text-[10px] uppercase tracking-widest pt-4">
          © 2026 Bangarkonda Projects Pvt. Ltd. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
}
