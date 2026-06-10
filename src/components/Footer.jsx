import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

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

export default function Footer({ scrollToSection }) {
  return (
    <footer className="bg-slate-950 text-slate-400 relative overflow-hidden border-t border-[#E8621A]/10 pt-20 pb-10 text-xs z-10">
      
      {/* Glow Effects inside Footer */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#E8621A]/3 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/2 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E8621A]/35 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* Company Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img 
                src="images/logo.png" 
                alt="Bangarkonda Logo" 
                className="h-20 w-auto object-contain filter drop-shadow-[0_0_8px_rgba(232,98,26,0.25)] transition-transform duration-300 hover:scale-105"
              />
              <div className="flex flex-col justify-center">
                <span className="text-sm sm:text-base font-black tracking-widest text-[#E8621A] uppercase leading-none font-sans flex items-center">
                  B<ChevronA className="h-[0.72em] w-auto mx-[0.02em] self-center" />NG<ChevronA className="h-[0.72em] w-auto mx-[0.02em] self-center" />RKOND<ChevronA className="h-[0.72em] w-auto mx-[0.02em] self-center" />
                </span>
                <span className="text-[7.5px] sm:text-[8.5px] tracking-[0.25em] text-white font-extrabold uppercase mt-1.5 leading-none font-sans">
                  PROJECTS PVT. LTD.
                </span>
                <span className="text-[5.2px] sm:text-[6px] tracking-[0.1em] text-slate-400 font-bold uppercase mt-1 leading-none font-sans">
                  CONSTRUCTION • DEVELOPMENT • TRADING
                </span>
              </div>
            </div>
            <p className="text-slate-350 font-semibold leading-relaxed text-[11px] max-w-sm">
              A premier diversified infrastructure and lifestyle conglomerate. We integrate real estate development, utility solar grids, five-star hospitality, adventure amusement zones, and managed farmland estates into sustainable ecosystems.
            </p>
            
            {/* Social icons */}
            <div className="flex gap-3 pt-2">
              {[
                { 
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  ), 
                  href: 'https://facebook.com', 
                  label: 'Facebook' 
                },
                { 
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  ), 
                  href: 'https://linkedin.com', 
                  label: 'LinkedIn' 
                },
                { 
                  icon: (
                    <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  ), 
                  href: 'https://instagram.com', 
                  label: 'Instagram' 
                },
                { 
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  ), 
                  href: 'https://youtube.com', 
                  label: 'YouTube' 
                }
              ].map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="h-9 w-9 bg-slate-900 border border-slate-800 hover:border-[#E8621A] text-slate-400 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_12px_rgba(232,98,26,0.3)] cursor-pointer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-[11px] font-black text-[#d4af37] uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-3 font-extrabold text-slate-400 uppercase tracking-wider text-[10px]">
              {[
                { name: 'Home', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
                { name: 'About Us', id: 'about' },
                { name: 'Our Sectors', id: 'sectors' },
                { name: 'Projects', id: 'projects' },
                { name: 'Gallery', id: 'gallery' },
                { name: 'Investors', id: 'investors' },
                { name: 'Contact Us', id: 'contact' }
              ].map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={link.action ? link.action : () => scrollToSection(link.id)} 
                    className="hover:text-[#E8621A] transition-all duration-300 flex items-center gap-1.5 hover:translate-x-1 group text-left cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8621A] opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors Links */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-[11px] font-black text-[#d4af37] uppercase tracking-widest">Our Sectors</h4>
            <ul className="space-y-3 font-extrabold text-slate-400 uppercase tracking-wider text-[10px]">
              {[
                { name: 'Real Estate & Townships', id: 'sectors' },
                { name: 'Farmland Development', id: 'sectors' },
                { name: 'Solar Energy Projects', id: 'sectors' },
                { name: '5 Star Hotels & Resorts', id: 'sectors' },
                { name: 'Water Parks Development', id: 'sectors' }
              ].map((sec) => (
                <li key={sec.name}>
                  <button 
                    onClick={() => scrollToSection(sec.id)} 
                    className="hover:text-[#E8621A] transition-all duration-300 flex items-center gap-1.5 hover:translate-x-1 group text-left cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8621A] opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"></span>
                    {sec.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate Desk */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-[11px] font-black text-[#d4af37] uppercase tracking-widest">Contact Us</h4>
            <ul className="space-y-4 font-semibold text-slate-355">
              <li className="flex items-start gap-3.5 group">
                <div className="p-2 w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-[#E8621A] flex items-center justify-center shrink-0 group-hover:bg-[#E8621A]/10 group-hover:border-[#E8621A]/30 transition-all duration-300">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-[9px] text-slate-500 uppercase tracking-widest font-black block">Corporate Office</span>
                  <span className="text-slate-300 text-xs mt-0.5 block leading-relaxed">
                    Prestige Trade Tower, 11th Floor, The Executive Centre, High Grounds, Palace Road, Bengaluru – 560001
                  </span>
                </div>
              </li>
              
              <li className="flex items-start gap-3.5 group">
                <div className="p-2 w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-[#E8621A] flex items-center justify-center shrink-0 group-hover:bg-[#E8621A]/10 group-hover:border-[#E8621A]/30 transition-all duration-300">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-[9px] text-slate-500 uppercase tracking-widest font-black block">Call Helpdesk</span>
                  <a href="tel:+919972437119" className="text-slate-200 text-xs mt-0.5 block font-bold hover:text-[#E8621A] transition-colors">
                    +91 9972437119
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3.5 group">
                <div className="p-2 w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-[#E8621A] flex items-center justify-center shrink-0 group-hover:bg-[#E8621A]/10 group-hover:border-[#E8621A]/30 transition-all duration-300">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-[9px] text-slate-500 uppercase tracking-widest font-black block">Email Queries</span>
                  <a href="mailto:bangarkondaprojectspvtltd@gmail.com" className="text-slate-300 text-xs mt-0.5 block hover:text-[#E8621A] transition-colors">
                    bangarkondaprojectspvtltd@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright bar */}
        <div className="border-t border-slate-900 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-[9px] w-full">
            <span className="font-bold uppercase tracking-wider">© 2026 Bangarkonda Projects Pvt. Ltd. All Rights Reserved.</span>
            <div className="flex items-center gap-3 pr-6 md:pr-12">
              <a
                href="https://www.innomatricstech.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 font-normal normal-case text-[9px] hover:text-white transition-colors whitespace-nowrap ml-0 md:ml-2"
              >
                Developed by Innomatrics Technologies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
