import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

// Custom chevron-style A component to match the brand typography
const ChevronA = ({ className }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="16" 
    strokeLinecap="square" 
    strokeLinejoin="miter"
    style={{ display: 'inline-block', verticalAlign: 'middle' }}
  >
    <path d="M12 95 L50 12 L88 95" />
    <path d="M30 60 L50 45 L70 60" />
  </svg>
);

export default function Navbar({ setEnquiryOpen, scrollToSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* ─── NAVBAR / HEADER ─────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 w-full bg-brand-navy/85 backdrop-blur-lg border-b border-[#E8621A]/20 shadow-[0_4px_30px_rgba(232,98,26,0.06)] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-28 flex items-center justify-between">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src="images/logo.png" 
              alt="Bangarkonda Projects Logo" 
              className="h-24 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
            <div className="flex flex-col justify-center">
              <span className="text-sm sm:text-[15px] lg:text-[17px] font-black tracking-widest text-[#E8621A] leading-none font-sans flex items-center">
                B<ChevronA className="h-[0.72em] w-auto mx-[0.02em] self-center" />NG<ChevronA className="h-[0.72em] w-auto mx-[0.02em] self-center" />RKOND<ChevronA className="h-[0.72em] w-auto mx-[0.02em] self-center" />
              </span>
              <span className="text-[7.5px] sm:text-[8.5px] lg:text-[9px] tracking-[0.25em] text-white font-extrabold uppercase mt-1.5 leading-none font-sans">
                PROJECTS PVT. LTD.
              </span>
              <span className="text-[5.2px] sm:text-[6px] lg:text-[6.2px] tracking-[0.1em] text-slate-400 font-bold uppercase mt-1 leading-none font-sans">
                CONSTRUCTION • DEVELOPMENT • TRADING
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-wider">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="nav-link text-slate-300 hover:text-[#E8621A] transition-colors cursor-pointer">Home</button>
            <button onClick={() => scrollToSection('about')} className="nav-link text-slate-300 hover:text-[#E8621A] transition-colors cursor-pointer">About Us</button>
            <button onClick={() => scrollToSection('sectors')} className="nav-link text-slate-300 hover:text-[#E8621A] transition-colors cursor-pointer">Sectors</button>
            <button onClick={() => scrollToSection('ecosystem')} className="nav-link text-slate-300 hover:text-[#E8621A] transition-colors cursor-pointer">Ecosystem</button>
            <button onClick={() => scrollToSection('projects')} className="nav-link text-slate-300 hover:text-[#E8621A] transition-colors cursor-pointer">Projects</button>
            <button onClick={() => scrollToSection('gallery')} className="nav-link text-slate-300 hover:text-[#E8621A] transition-colors cursor-pointer">Gallery</button>
            <button onClick={() => scrollToSection('investors')} className="nav-link text-slate-300 hover:text-[#E8621A] transition-colors cursor-pointer">Investors</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link text-slate-355 hover:text-[#E8621A] transition-colors font-extrabold cursor-pointer">Contact Us</button>
          </nav>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setEnquiryOpen(true)}
              className="hidden sm:block btn-orange text-xs px-6 py-3 uppercase tracking-widest font-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(232,98,26,0.4)]"
            >
              Enquire Now
            </button>
            
            {/* Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 text-slate-350 hover:text-[#E8621A] transition-colors focus:outline-none bg-slate-900/60 border border-slate-800 rounded-xl hover:border-[#E8621A]/30 cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden">
          {/* Dark backdrop blur */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}></div>

          <div className="fixed top-28 right-0 bottom-0 w-full max-w-sm bg-brand-navy/95 backdrop-blur-xl border-l border-[#E8621A]/10 p-6 flex flex-col justify-between shadow-2xl animate-fade-in">
            <div className="space-y-6">
              <nav className="flex flex-col gap-5 text-sm font-bold uppercase tracking-wider pt-4">
                <button 
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setMobileMenuOpen(false);
                  }} 
                  className="text-left text-slate-355 hover:text-[#E8621A] transition-colors py-2 border-b border-slate-900/60 font-black cursor-pointer"
                >
                  Home
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('about');
                    setMobileMenuOpen(false);
                  }} 
                  className="text-left text-slate-355 hover:text-[#E8621A] transition-colors py-2 border-b border-slate-900/60 font-black cursor-pointer"
                >
                  About Us
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('sectors');
                    setMobileMenuOpen(false);
                  }} 
                  className="text-left text-slate-355 hover:text-[#E8621A] transition-colors py-2 border-b border-slate-900/60 font-black cursor-pointer"
                >
                  Sectors
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('ecosystem');
                    setMobileMenuOpen(false);
                  }} 
                  className="text-left text-slate-355 hover:text-[#E8621A] transition-colors py-2 border-b border-slate-900/60 font-black cursor-pointer"
                >
                  Ecosystem
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('projects');
                    setMobileMenuOpen(false);
                  }} 
                  className="text-left text-slate-355 hover:text-[#E8621A] transition-colors py-2 border-b border-slate-900/60 font-black cursor-pointer"
                >
                  Projects
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('gallery');
                    setMobileMenuOpen(false);
                  }} 
                  className="text-left text-slate-355 hover:text-[#E8621A] transition-colors py-2 border-b border-slate-900/60 font-black cursor-pointer"
                >
                  Gallery
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('investors');
                    setMobileMenuOpen(false);
                  }} 
                  className="text-left text-slate-355 hover:text-[#E8621A] transition-colors py-2 border-b border-slate-900/60 font-black cursor-pointer"
                >
                  Investors
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('contact');
                    setMobileMenuOpen(false);
                  }} 
                  className="text-left text-slate-355 hover:text-[#E8621A] transition-colors py-2 font-black cursor-pointer"
                >
                  Contact Us
                </button>
              </nav>
            </div>

            <div className="pt-6 border-t border-slate-900 mt-auto">
              <button 
                onClick={() => {
                  setEnquiryOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full btn-orange text-xs py-4 uppercase tracking-widest font-black"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
