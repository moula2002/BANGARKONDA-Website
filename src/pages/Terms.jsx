import React from 'react';
import { ArrowLeft, FileText, Scale, Landmark, ShieldAlert } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-height-screen bg-[#070F21] text-slate-200 antialiased selection:bg-[#E8621A] selection:text-white relative overflow-hidden flex flex-col justify-between py-12 px-4 sm:px-6 lg:px-8">
      {/* Background Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#E8621A]/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-500/3 rounded-full blur-[120px] pointer-events-none z-0"></div>

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
            <FileText className="w-4 h-4 text-[#E8621A]" />
            LEGAL & AGREEMENTS DESK
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Terms & Conditions
          </h1>
          <div className="w-16 h-1 bg-[#E8621A]"></div>
          <p className="text-xs text-slate-400 font-mono">
            Effective Date: 10 June 2026
          </p>
        </div>

        {/* Content */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl space-y-8 leading-relaxed text-sm">
          <p className="text-slate-300 font-semibold border-l-2 border-[#E8621A] pl-4">
            These Terms govern your use of the Bangarkonda Projects website. By accessing or using the site, you accept these Terms in full.
          </p>

          <section className="space-y-4">
            <h2 className="text-lg font-black text-white uppercase tracking-wider flex items-center gap-2">
              <Scale className="w-5 h-5 text-[#E8621A]" />
              1. Use of Site
            </h2>
            <p className="text-xs text-slate-300">
              You agree to use this site lawfully and refrain from transmitting content that is infringing, abusive, or harmful. We retain the right to suspend or restrict access to users who violate these guidelines or act in any way that harms other visitors or our corporate infrastructure.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-black text-white uppercase tracking-wider flex items-center gap-2">
              <Landmark className="w-5 h-5 text-[#E8621A]" />
              2. Intellectual Property
            </h2>
            <p className="text-xs text-slate-300">
              All branding marks, imagery, site layouts, architectural renders, project copy, and trademarks published on this site are owned by Bangarkonda Projects Pvt. Ltd. or utilized with consent from copyright holders. Reproduction, copying, distribution, or publishing of any material without written approval from our board is strictly prohibited.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-black text-white uppercase tracking-wider flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-[#E8621A]" />
              3. Disclaimer & Limitation of Liability
            </h2>
            <p className="text-xs text-slate-300">
              The website is provided on an "as is" and "as available" basis without any express or implied warranties. Bangarkonda Projects Pvt. Ltd. does not guarantee uninterrupted operation or zero errors. To the maximum extent permitted by law, we are not liable for direct, indirect, special, or consequential damages arising from the use or inability to use the website or its materials.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-black text-white uppercase tracking-wider flex items-center gap-2">
              <Scale className="w-5 h-5 text-[#E8621A]" />
              4. Governing Law
            </h2>
            <p className="text-xs text-slate-300">
              These Terms & Conditions are governed by the laws of India. Any legal disputes or differences arising from your interactions with our website will be subject to the exclusive jurisdiction of the competent courts in Bengaluru, Karnataka.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-black text-white uppercase tracking-wider flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#E8621A]" />
              5. Contact Information
            </h2>
            <p className="text-xs text-slate-300">
              If you have any questions or require clarification regarding these terms, please contact our legal desk directly:
            </p>
            <div className="pt-2 font-semibold">
              <div className="bg-slate-950/60 border border-slate-900 p-4 rounded-xl text-center max-w-sm mx-auto">
                <span className="text-[9px] text-[#d4af37] uppercase tracking-wider block">Legal Desk Email</span>
                <a href="mailto:bangarkondaprojectspvtltd@gmail.com" className="text-xs text-white hover:text-[#E8621A] transition-colors mt-1 block">
                  bangarkondaprojectspvtltd@gmail.com
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Footer info */}
        <footer className="text-center text-slate-500 text-[10px] uppercase tracking-widest pt-4">
          © 2026 Bangarkonda Projects Pvt. Ltd. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
}
