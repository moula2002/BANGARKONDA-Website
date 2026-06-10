import React, { useState, useEffect } from 'react';
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
    <path d="M30 62 C38 62 42 48 50 48 C58 48 62 62 70 62" />
  </svg>
);

export default function Navbar({ setEnquiryOpen, scrollToSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ─── NAVBAR / HEADER ─────────────────────────────────────────────────── */}
      <header className={`sticky top-0 z-40 w-full transition-all duration-500 ${
        scrolled 
          ? 'bg-brand-navy/95 border-b border-[#E8621A]/30 shadow-[0_10px_30px_rgba(7,15,33,0.8)] h-20' 
          : 'bg-brand-navy/80 border-b border-[#E8621A]/10 shadow-[0_4px_30px_rgba(232,98,26,0.06)] h-28'
      } backdrop-blur-md`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <div className="flex items-center gap-4 cursor-pointer select-none" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img
              src="images/logo.png"
              alt="Bangarkonda Logo Icon"
              className={`w-auto object-contain transition-all duration-500 hover:scale-105 ${
                scrolled ? 'h-14' : 'h-20'
              }`}
            />
            
            {/* Elegant vertical separator */}
            <div className={`w-[1px] bg-gradient-to-b from-transparent via-slate-650/60 to-transparent transition-all duration-500 ${
              scrolled ? 'h-10' : 'h-14'
            }`}></div>

            <div className="flex flex-col justify-center max-w-[170px] sm:max-w-[190px] lg:max-w-[210px] pl-1">
              <span className="text-xs sm:text-[13px] lg:text-[15px] font-black text-[#E8621A] leading-none font-sans flex items-center gap-[0.14em]">
                <span>B</span>
                <ChevronA className="h-[0.72em] w-auto self-center" />
                <span>N</span>
                <span>G</span>
                <ChevronA className="h-[0.72em] w-auto self-center" />
                <span>R</span>
                <span>K</span>
                <span>O</span>
                <span>N</span>
                <span>D</span>
                <ChevronA className="h-[0.72em] w-auto self-center" />
              </span>
              <div className="flex items-center gap-1.5 w-full mt-1.5 leading-none">
                <div className="flex flex-col gap-[1.2px] flex-1">
                  <div className="h-[0.8px] bg-[#ffd700]/50"></div>
                  <div className="h-[0.8px] bg-[#ffd700]/50"></div>
                  <div className="h-[0.8px] bg-[#ffd700]/50"></div>
                </div>
                <span className="text-[7px] sm:text-[8px] lg:text-[8.5px] tracking-[0.2em] text-[#ffd700] font-black uppercase font-sans shrink-0">
                  PROJECTS
                </span>
                <div className="flex flex-col gap-[1.2px] flex-1">
                  <div className="h-[0.8px] bg-[#ffd700]/50"></div>
                  <div className="h-[0.8px] bg-[#ffd700]/50"></div>
                  <div className="h-[0.8px] bg-[#ffd700]/50"></div>
                </div>
              </div>
              <span className="text-[4.8px] sm:text-[5.5px] lg:text-[6px] tracking-[0.05em] text-slate-350 font-bold uppercase mt-1 leading-none font-sans whitespace-nowrap">
                CONSTRUCTION, DEVELOPMENT AND TRADING
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-4 text-xs font-bold uppercase tracking-wider">
            {[
              { label: 'Home', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
              { label: 'About Us', section: 'about' },
              { label: 'Sectors', section: 'sectors' },
              { label: 'Ecosystem', section: 'ecosystem' },
              { label: 'Projects', section: 'projects' },
              { label: 'Gallery', section: 'gallery' },
              { label: 'Investors', section: 'investors' },
              { label: 'Contact Us', section: 'contact' },
            ].map((link, idx) => (
              <button
                key={idx}
                onClick={link.action ? link.action : () => scrollToSection(link.section)}
                className="relative px-3.5 py-2 text-slate-300 hover:text-white hover:bg-white/[0.03] active:bg-white/[0.06] border border-transparent hover:border-[#E8621A]/20 rounded-xl transition-all duration-300 cursor-pointer font-extrabold text-[11px] tracking-widest group"
              >
                {link.label}
                {/* Active/Hover dot indicator */}
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#E8621A] opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setEnquiryOpen(true)}
              className="relative hidden sm:block overflow-hidden rounded-xl bg-gradient-to-r from-[#E8621A] to-[#ff7d31] text-white text-[11px] font-black uppercase tracking-widest px-6 py-3.5 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] hover:shadow-[0_0_20px_rgba(232,98,26,0.45)] group cursor-pointer"
            >
              <span className="relative z-10">Enquire Now</span>
              {/* Shiny streak overlay */}
              <span className="absolute top-0 -left-[100%] h-full w-1/2 transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[125%] transition-all duration-1000 ease-out" />
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
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Dark backdrop blur */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}></div>

          <div className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-brand-navy/98 backdrop-blur-2xl border-l border-[#E8621A]/20 p-6 flex flex-col justify-between shadow-2xl animate-fade-in z-50">
            <div className="space-y-6">
              {/* Drawer Header with Logo and Close button */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-900/60">
                <img
                  src="images/logo.png"
                  alt="Bangarkonda Projects Logo"
                  className="h-14 w-auto object-contain"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 text-slate-450 hover:text-[#E8621A] transition-colors focus:outline-none bg-slate-900/60 border border-slate-800 rounded-xl hover:border-[#E8621A]/30 cursor-pointer"
                  aria-label="Close Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-3 text-sm font-bold uppercase tracking-wider">
                {[
                  { label: 'Home', action: () => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMobileMenuOpen(false); } },
                  { label: 'About Us', section: 'about' },
                  { label: 'Sectors', section: 'sectors' },
                  { label: 'Ecosystem', section: 'ecosystem' },
                  { label: 'Projects', section: 'projects' },
                  { label: 'Gallery', section: 'gallery' },
                  { label: 'Investors', section: 'investors' },
                  { label: 'Contact Us', section: 'contact' },
                ].map((link, idx) => (
                  <button
                    key={idx}
                    onClick={link.action ? link.action : () => { scrollToSection(link.section); setMobileMenuOpen(false); }}
                    className="text-left text-slate-300 hover:text-[#E8621A] hover:bg-white/[0.02] px-4 py-3 border-b border-slate-900/40 rounded-xl transition-all duration-300 font-extrabold text-[12px] tracking-widest cursor-pointer"
                  >
                    {link.label}
                  </button>
                ))}
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
