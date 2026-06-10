import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Sprout, 
  Sun, 
  Building, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  CheckCircle2, 
  Send,
  Droplet,
  Globe,
  Award,
  ChevronDown,
  Menu
} from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    sector: 'real-estate',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [projectFilter, setProjectFilter] = useState('all');
  const [activeEcosystemNode, setActiveEcosystemNode] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  // Hero background slider data
  const heroSlides = [
    {
      title: "BUILDING SUSTAINABLE DESTINATIONS",
      subtitle: "for the Future",
      tags: ["Real Estate", "Farmland", "Solar Energy", "5 Star Hospitality", "Water Parks"],
      bg: "images/hero-bg.jpg"
    }
  ];

  // Business Pillars
  const sectors = [
    {
      id: 'land-development',
      icon: <Building2 className="w-6 h-6 text-brand-orange" />,
      title: 'LAND DEVELOPMENT',
      desc: 'Acquires and rezones large land parcels. Prepares the foundation for future city-scale expansion.',
      image: 'images/project-gated-community.png'
    },
    {
      id: 'solar',
      icon: <Sun className="w-6 h-6 text-brand-orange" />,
      title: 'SOLAR PROJECTS',
      desc: 'Converts unutilized tracts into utility-scale solar farms generating clean electricity for grids.',
      image: 'images/project-solar-rapeseed.png'
    },
    {
      id: 'hotels',
      icon: <Building className="w-6 h-6 text-brand-orange" />,
      title: 'FIVE-STAR HOTELS',
      desc: 'Designs luxury accommodations, convention centers, and resorts for tourists and businesses.',
      image: 'images/project-hotel-lobby.png'
    },
    {
      id: 'amusement-parks',
      icon: <Droplet className="w-6 h-6 text-brand-orange" />,
      title: 'WATER & AMUSEMENT PARKS',
      desc: 'Builds high-traffic entertainment zones utilizing advanced water recycling and filtration systems.',
      image: 'images/project-waterpark-slide1.jpg'
    },
    {
      id: 'farmland',
      icon: <Sprout className="w-6 h-6 text-brand-orange" />,
      title: 'FARMLAND DEVELOPMENT',
      desc: 'Establishes managed organic farms and gated eco-communities with sustainable agricultural plots.',
      image: 'images/project-farmland-mango1.jpg'
    }
  ];


  // Featured Projects
  const projects = [
    {
      id: 'p1',
      title: 'BANGARKONDA TOWNSHIP',
      category: 'land-development',
      tag: 'TOWNSHIP',
      desc: 'Premium Integrated Township',
      location: 'Bangalore',
      image: 'images/project-gated-community.png'
    },
    {
      id: 'p2',
      title: 'BANGARKONDA SOLAR PARK',
      category: 'solar',
      tag: 'SOLAR PROJECT',
      desc: '200 MW Solar Power Project',
      location: 'Karnataka',
      image: 'images/project-solar-bluesky.jpg'
    },
    {
      id: 'p3',
      title: 'BANGARKONDA GRAND RESORT',
      category: 'hospitality',
      tag: 'HOSPITALITY',
      desc: '5 Star Luxury Resort & Convention',
      location: 'Bangalore',
      image: 'images/project-resort-aerial.jpg'
    },
    {
      id: 'p4',
      title: 'GREEN ACRES FARMLANDS',
      category: 'farmland',
      tag: 'FARMLAND',
      desc: 'Organic Farmland Community',
      location: 'Karnataka',
      image: 'images/project-farmland-mango2.png'
    },
    {
      id: 'p5',
      title: 'BANGARKONDA GATED PLOTS',
      category: 'land-development',
      tag: 'PLOT DEVELOPMENT',
      desc: 'Actual Gated Site Progress Layout',
      location: 'Bangalore',
      image: 'images/project-land-actual.png'
    },
    {
      id: 'p6',
      title: 'BANGARKONDA CONVENTION CENTRE',
      category: 'hospitality',
      tag: 'CONVENTION CENTRE',
      desc: 'Premium Business Convention Hallway',
      location: 'Bangalore',
      image: 'images/project-hotel-hallway.png'
    },
    {
      id: 'p7',
      title: 'BANGARKONDA AQUA LAND',
      category: 'amusement-parks',
      tag: 'WATER PARK',
      desc: 'Multi-Lane High Speed Water Slides',
      location: 'Bangalore',
      image: 'images/project-waterpark-slide2.jpg'
    },
    {
      id: 'p8',
      title: 'BANGARKONDA THRILL RIDE',
      category: 'amusement-parks',
      tag: 'AMUSEMENT PARK',
      desc: 'Extreme Spiral Water Slide Adventure',
      location: 'Bangalore',
      image: 'images/project-waterpark-slide3.jpg'
    },
    {
      id: 'p9',
      title: 'BANGARKONDA RIVER RAPIDS',
      category: 'amusement-parks',
      tag: 'WATER PARK',
      desc: 'Circular Raft High Velocity Slides',
      location: 'Bangalore',
      image: 'images/project-waterpark-slide4.jpg'
    },
    {
      id: 'p10',
      title: 'BANGARKONDA MANGO GROVES',
      category: 'farmland',
      tag: 'MANGO ORCHARD',
      desc: 'Mature Organic Mango Plantation & Shaded Grove',
      location: 'Karnataka',
      image: 'images/project-farmland-mango3.png'
    },
    {
      id: 'p11',
      title: 'GOLDEN ACRES ESTATE',
      category: 'farmland',
      tag: 'FARMLAND ESTATE',
      desc: 'Lush Mango Plantation plots with Mountain View',
      location: 'Karnataka',
      image: 'images/project-farmland-mango4.png'
    },
    {
      id: 'p12',
      title: 'TOWNSHIP MASTER MAP',
      category: 'land-development',
      tag: 'MASTER PLAN',
      desc: 'Gated Community Master Plan Layout Map',
      location: 'Bangalore',
      image: 'images/project-gated-map.jpg'
    }
  ];

  // All images array to ensure every single image in the data source is displayed
  const galleryImages = [
    { src: 'images/project-gated-community.png', title: 'Integrated Township Layout' },
    { src: 'images/project-gated-map.jpg', title: 'Gated Community Master Map' },
    { src: 'images/project-hotel-hallway.png', title: 'Convention Corridor Interior' },
    { src: 'images/project-hotel-lobby.png', title: 'Luxury Hotel Lobby Chandelier' },
    { src: 'images/project-land-actual.png', title: 'Gated Plots Actual Site Layout' },
    { src: 'images/project-resort-aerial.jpg', title: 'Luxury Pool Resort 3D Layout' },
    { src: 'images/project-resort.jpg', title: 'Bangarkonda Grand Resort render' },
    { src: 'images/project-solar-bluesky.jpg', title: 'Solar Panels Series' },
    { src: 'images/project-solar-closeup.png', title: 'Utility Scale Solar Panels' },
    { src: 'images/project-solar-fields.png', title: 'Solar Array Field Layout' },
    { src: 'images/project-solar-rapeseed.png', title: 'Solar Array over Rapeseed Fields' },
    { src: 'images/project-township.jpg', title: 'Conceptual Gated Township render' },
    { src: 'images/sector-farmland.jpg', title: 'Farmland Concept Landscape' },
    { src: 'images/sector-hotels.jpg', title: 'Resort & Waterpark Concept' },
    { src: 'images/sector-realestate.jpg', title: 'Integrated Gated Township Concept' },
    { src: 'images/sector-solar.jpg', title: 'Solar Infrastructure Concept' },
    { src: 'images/project-waterpark-slide1.jpg', title: 'Multi-color Water Slide Complex' },
    { src: 'images/project-waterpark-slide2.jpg', title: 'Water Slide Park Pool View' },
    { src: 'images/project-waterpark-slide3.jpg', title: 'High-speed Striped Water Slide' },
    { src: 'images/project-waterpark-slide4.jpg', title: 'River Rapids Slide Adventure' },
    { src: 'images/project-farmland-mango1.jpg', title: 'Lush Green Mango Orchard Path' },
    { src: 'images/project-farmland-mango2.png', title: 'Organized Rows Mango Orchard' },
    { src: 'images/project-farmland-mango3.png', title: 'Shaded Mature Mango Grove' },
    { src: 'images/project-farmland-mango4.png', title: 'Young Mango Trees Mountain View' }
  ];

  // Stats Counters
  const stats = [
    { value: '500+', label: 'Acres', desc: 'Land Under Development' },
    { value: '1000+', label: 'Acres', desc: 'Farmland Development' },
    { value: '200+ MW', label: 'Solar Power', desc: 'Capacity In Pipeline' },
    { value: '5★', label: 'Hospitality', desc: 'Resort Projects' }
  ];

  // Ecosystem nodes data
  const ecosystemNodes = [
    { id: 're', title: 'REAL ESTATE', desc: 'Thoughtfully planned developments that create long term value.', icon: <Building2 className="w-5 h-5 text-[#FF8C00]" /> },
    { id: 'fe', title: 'FARMLAND', desc: 'Organic farming and green communities for healthy living.', icon: <Sprout className="w-5 h-5 text-[#FF8C00]" /> },
    { id: 'se', title: 'SOLAR ENERGY', desc: 'Clean renewable energy powering our projects and the community.', icon: <Sun className="w-5 h-5 text-[#FF8C00]" /> },
    { id: 'sh', title: '5 STAR HOTELS', desc: 'Luxury hospitality and world class experiences for our guests.', icon: <Building className="w-5 h-5 text-[#FF8C00]" /> },
    { id: 'wp', title: 'WATER PARKS', desc: 'Entertainment and leisure destinations for all ages.', icon: <Droplet className="w-5 h-5 text-[#FF8C00]" /> },
    { id: 'sf', title: 'SUSTAINABLE FUTURE', desc: 'A harmonious ecosystem that nurtures people and the planet.', icon: <Globe className="w-5 h-5 text-[#FF8C00]" /> }
  ];

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEnquiryOpen(false);
      setEnquiryForm({ name: '', email: '', phone: '', sector: 'real-estate', message: '' });
    }, 2000);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubmitted(true);
    setTimeout(() => {
      setNewsletterSubmitted(false);
      setNewsletterEmail('');
    }, 3000);
  };

  const filteredProjects = projectFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === projectFilter);

  // Smooth scroll helper
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark text-slate-100 flex flex-col relative selection:bg-[#E8621A] selection:text-white">
      
      {/* ─── NAVBAR / HEADER ─────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 w-full bg-brand-navy/85 backdrop-blur-lg border-b border-[#E8621A]/20 shadow-[0_4px_30px_rgba(232,98,26,0.06)] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src="images/logo.png" 
              alt="Bangarkonda Projects Logo" 
              className="h-16 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-black tracking-widest text-[#E8621A] leading-none font-sans">
                BANGARKONDA
              </span>
              <span className="text-[8px] sm:text-[10px] tracking-[0.25em] text-[#d4af37] font-black uppercase mt-1">
                PROJECTS PVT LTD
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-wider">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="nav-link text-slate-300 hover:text-[#E8621A] transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="nav-link text-slate-300 hover:text-[#E8621A] transition-colors">About Us</button>
            <button onClick={() => scrollToSection('sectors')} className="nav-link text-slate-300 hover:text-[#E8621A] transition-colors">Sectors</button>
            <button onClick={() => scrollToSection('ecosystem')} className="nav-link text-slate-300 hover:text-[#E8621A] transition-colors">Ecosystem</button>
            <button onClick={() => scrollToSection('projects')} className="nav-link text-slate-300 hover:text-[#E8621A] transition-colors">Projects</button>
            <button onClick={() => scrollToSection('gallery')} className="nav-link text-slate-300 hover:text-[#E8621A] transition-colors">Gallery</button>
            <button onClick={() => scrollToSection('investors')} className="nav-link text-slate-300 hover:text-[#E8621A] transition-colors">Investors</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link text-slate-350 hover:text-[#E8621A] transition-colors font-extrabold">Contact Us</button>
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

      

      <div className="fixed top-24 right-0 bottom-0 w-full max-w-sm bg-brand-navy/95 backdrop-blur-xl border-l border-[#E8621A]/10 p-6 flex flex-col justify-between shadow-2xl animate-fade-in">
            <div className="space-y-6">
              <nav className="flex flex-col gap-5 text-sm font-bold uppercase tracking-wider pt-4">
                <button 
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setMobileMenuOpen(false);
                  }} 
                  className="text-left text-slate-350 hover:text-[#E8621A] transition-colors py-2 border-b border-slate-900/60 font-black cursor-pointer"
                >
                  Home
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('about');
                    setMobileMenuOpen(false);
                  }} 
                  className="text-left text-slate-350 hover:text-[#E8621A] transition-colors py-2 border-b border-slate-900/60 font-black cursor-pointer"
                >
                  About Us
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('sectors');
                    setMobileMenuOpen(false);
                  }} 
                  className="text-left text-slate-350 hover:text-[#E8621A] transition-colors py-2 border-b border-slate-900/60 font-black cursor-pointer"
                >
                  Sectors
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('ecosystem');
                    setMobileMenuOpen(false);
                  }} 
                  className="text-left text-slate-350 hover:text-[#E8621A] transition-colors py-2 border-b border-slate-900/60 font-black cursor-pointer"
                >
                  Ecosystem
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('projects');
                    setMobileMenuOpen(false);
                  }} 
                  className="text-left text-slate-350 hover:text-[#E8621A] transition-colors py-2 border-b border-slate-900/60 font-black cursor-pointer"
                >
                  Projects
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('gallery');
                    setMobileMenuOpen(false);
                  }} 
                  className="text-left text-slate-350 hover:text-[#E8621A] transition-colors py-2 border-b border-slate-900/60 font-black cursor-pointer"
                >
                  Gallery
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('investors');
                    setMobileMenuOpen(false);
                  }} 
                  className="text-left text-slate-350 hover:text-[#E8621A] transition-colors py-2 border-b border-slate-900/60 font-black cursor-pointer"
                >
                  Investors
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('contact');
                    setMobileMenuOpen(false);
                  }} 
                  className="text-left text-slate-350 hover:text-[#E8621A] transition-colors py-2 font-black cursor-pointer"
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

      

      {/* ─── HERO SECTION ────────────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image with Dark Gradient Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src="images/hero-bg.jpg" 
            alt="Bangarkonda Projects Aerial View" 
            className="w-full h-full object-cover opacity-70 transform scale-105 transition-transform duration-[10000ms] ease-out animate-pulse-subtle"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/80 via-transparent to-[#030712]/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
          <span className="text-[11px] font-black tracking-[0.3em] text-[#d4af37] uppercase mb-4 animate-fade-in">
            CONSTRUCTION, DEVELOPMENT AND TRADING
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight max-w-4xl leading-[1.05] animate-fade-in">
            BUILDING <span className="text-gradient-orange">SUSTAINABLE</span> DESTINATIONS
          </h1>
          <p className="text-2xl sm:text-4xl font-serif text-[#ffd700] italic mt-3 animate-fade-in" style={{ animationDelay: '200ms' }}>
            for the Future
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-8 max-w-3xl text-[10px] sm:text-xs font-black uppercase tracking-wider text-slate-300">
            <span className="flex items-center gap-1.5"><Building2 className="w-4 h-4 text-[#E8621A]" /> Real Estate</span>
            <span className="h-1.5 w-1.5 rounded-full bg-slate-600"></span>
            <span className="flex items-center gap-1.5"><Sprout className="w-4 h-4 text-[#E8621A]" /> Farmland</span>
            <span className="h-1.5 w-1.5 rounded-full bg-slate-600"></span>
            <span className="flex items-center gap-1.5"><Sun className="w-4 h-4 text-[#E8621A]" /> Solar Energy</span>
            <span className="h-1.5 w-1.5 rounded-full bg-slate-600"></span>
            <span className="flex items-center gap-1.5"><Building className="w-4 h-4 text-[#E8621A]" /> 5 Star Hospitality</span>
            <span className="h-1.5 w-1.5 rounded-full bg-slate-600"></span>
            <span className="flex items-center gap-1.5"><Droplet className="w-4 h-4 text-[#E8621A]" /> Water Parks</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-12 w-full sm:w-auto">
            <button 
              onClick={() => scrollToSection('projects')}
              className="btn-orange w-full sm:w-auto px-8 py-4 text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 group"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="btn-outline w-full sm:w-auto px-8 py-4 text-xs font-black uppercase tracking-widest bg-black/45 backdrop-blur flex items-center justify-center gap-2"
            >
              <span>About Us</span>
            </button>
          </div>
        </div>

        {/* Vertical page navigation dots */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-3 z-20">
          <span className="h-1.5 w-1.5 rounded-full bg-[#E8621A]"></span>
          <span className="h-1.5 w-1.5 rounded-full bg-slate-600 hover:bg-slate-400 cursor-pointer" onClick={() => scrollToSection('about')}></span>
          <span className="h-1.5 w-1.5 rounded-full bg-slate-600 hover:bg-slate-400 cursor-pointer" onClick={() => scrollToSection('sectors')}></span>
          <span className="h-1.5 w-1.5 rounded-full bg-slate-600 hover:bg-slate-400 cursor-pointer" onClick={() => scrollToSection('ecosystem')}></span>
          <span className="h-1.5 w-1.5 rounded-full bg-slate-600 hover:bg-slate-400 cursor-pointer" onClick={() => scrollToSection('projects')}></span>
        </div>
      </section>

      {/* ─── STATS BAR ──────────────────────────────────────────────────────── */}
      <section className="relative z-25 bg-brand-navy border-y border-[#E8621A]/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 md:gap-4 text-center divide-x-0 md:divide-x divide-slate-800/40">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center p-2">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#E8621A] leading-none mb-2">
                  {stat.value}
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider">
                  {stat.label}
                </span>
                <span className="text-[9px] text-slate-400 uppercase tracking-widest mt-1">
                  {stat.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT / CORE VALUES ────────────────────────────────────────────── */}
      <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-b from-brand-dark to-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#d4af37]">
                COMPANY PROFILE
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight leading-tight">
                diversified infrastructure & lifestyle conglomerate
              </h2>
              <div className="w-16 h-1 bg-[#E8621A]"></div>
              
              <p className="text-sm text-slate-200 leading-relaxed font-semibold">
                Bangarkonda Projects transforms large, barren or agricultural tracts into dynamic, multi-asset destinations. 
                Our business model integrates commercial real estate, utility-scale renewable energy, five-star luxury hospitality, recreational tourism, and managed sustainable agriculture into a single, interconnected ecosystem.
              </p>

              <div className="border-t border-slate-800/80 pt-6 mt-6">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#E8621A] block mb-4">
                  STRATEGIC BENEFITS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex gap-3">
                    <div className="p-2 h-10 w-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-white uppercase">Sustainability Focus</h4>
                      <p className="text-[10px] text-slate-450 mt-1.5 leading-relaxed font-medium">
                        Renewable energy powers our hospitality and amusement properties, significantly lowering operating costs and zeroing carbon footprints.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="p-2 h-10 w-10 rounded-lg bg-orange-500/10 border border-orange-500/20 text-[#E8621A] flex items-center justify-center shrink-0">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-white uppercase">Balanced Diversification</h4>
                      <p className="text-[10px] text-slate-450 mt-1.5 leading-relaxed font-medium">
                        Balancing commercial entertainment with eco-friendly agriculture and clean energy provides resilient defense against single-sector market downturns.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#E8621A] to-[#ffd700] rounded-2xl blur opacity-25"></div>
              <div className="relative glass-panel p-2 rounded-2xl overflow-hidden aspect-video">
                <img 
                  src="images/project-resort.jpg" 
                  alt="Bangarkonda Grand Resort Project" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BUSINESS SECTORS ────────────────────────────────────────────────── */}
      <section id="sectors" className="py-24 bg-brand-navy relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#d4af37]">
              OUR BUSINESS SECTORS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Diverse Businesses. One Vision.
            </h2>
            <div className="w-20 h-1 bg-[#E8621A] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {sectors.map((sec) => (
              <div 
                key={sec.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-slate-950 border border-slate-900 hover:border-[#E8621A]/40 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                {/* Sector Image */}
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10"></div>
                  <img 
                    src={sec.image} 
                    alt={sec.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out opacity-90"
                  />
                  <div className="absolute top-4 left-4 z-20 p-2.5 bg-brand-navy/80 border border-[#E8621A]/20 rounded-xl backdrop-blur-sm">
                    {sec.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-sm font-black text-white group-hover:text-[#E8621A] transition-colors uppercase tracking-wider">
                      {sec.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-semibold">
                      {sec.desc}
                    </p>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-slate-900 flex items-center justify-between">
                    <button 
                      onClick={() => {
                        setEnquiryForm(prev => ({ ...prev, sector: sec.id }));
                        setEnquiryOpen(true);
                      }}
                      className="text-[10px] font-black text-[#d4af37] hover:text-[#E8621A] flex items-center gap-1.5 uppercase tracking-wider transition-colors"
                    >
                      <span>Explore More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS (SYNERGY) ─────────────────────────────────────────── */}
      <section className="py-24 bg-brand-dark border-t border-slate-900/60 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#E8621A]/5 blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#d4af37]">
              HOW IT WORKS (THE SYNERGY)
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              The Master Puzzle Builder Model
            </h2>
            <div className="w-20 h-1 bg-[#E8621A] mx-auto"></div>
            <p className="text-xs text-slate-400 font-semibold max-w-xl mx-auto leading-relaxed mt-4">
              We leverage synergistic integration across our core businesses. Each asset fuels and feeds the next, forming a highly optimized self-sustaining ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
            
            <div className="glass-panel p-6 rounded-2xl border border-slate-900 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 text-[#E8621A] flex items-center justify-center font-black text-sm">
                  01
                </div>
                <h3 className="text-xs font-black text-white uppercase tracking-wider">Acquire & Phase</h3>
                <p className="text-[10px] text-slate-400 leading-relaxed font-semibold">
                  We use Land Development to secure large tracts of strategic properties, planning the master layout for integrated growth.
                </p>
              </div>
              <div className="h-1.5 w-full bg-[#E8621A]/20 rounded-full overflow-hidden mt-6">
                <div className="h-full w-1/4 bg-[#E8621A]"></div>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-slate-900 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-[#ffd700] flex items-center justify-center font-black text-sm">
                  02
                </div>
                <h3 className="text-xs font-black text-white uppercase tracking-wider">Power Assets</h3>
                <p className="text-[10px] text-slate-400 leading-relaxed font-semibold">
                  We place a Solar Project on the sunniest parts of the land, generating low-cost clean energy to power all our properties.
                </p>
              </div>
              <div className="h-1.5 w-full bg-[#ffd700]/20 rounded-full overflow-hidden mt-6">
                <div className="h-full w-2/4 bg-[#ffd700]"></div>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-slate-900 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-black text-sm">
                  03
                </div>
                <h3 className="text-xs font-black text-white uppercase tracking-wider">Hospitality Hub</h3>
                <p className="text-[10px] text-slate-400 leading-relaxed font-semibold">
                  We establish Five-Star Hotels and Water Parks nearby. These destination hubs utilize the cheap solar power directly from our arrays.
                </p>
              </div>
              <div className="h-1.5 w-full bg-blue-400/20 rounded-full overflow-hidden mt-6">
                <div className="h-full w-3/4 bg-blue-400"></div>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-slate-900 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-sm">
                  04
                </div>
                <h3 className="text-xs font-black text-white uppercase tracking-wider">Circular Agriculture</h3>
                <p className="text-[10px] text-slate-400 leading-relaxed font-semibold">
                  We develop managed Farmland on the edges. This organic cultivation supplies food for the hotels and peaceful retreats for guests.
                </p>
              </div>
              <div className="h-1.5 w-full bg-emerald-400/20 rounded-full overflow-hidden mt-6">
                <div className="h-full w-full bg-emerald-450"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── INTEGRATED ECOSYSTEM ────────────────────────────────────────────── */}
      <section id="ecosystem" className="py-24 bg-brand-dark relative overflow-hidden">
        {/* Subtle orange accent glow behind ecosystem diagram */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#E8621A]/5 blur-[100px] z-0 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#d4af37]">
              OUR INTEGRATED ECOSYSTEM
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Creating Self-Sustaining Destinations
            </h2>
            <div className="w-20 h-1 bg-[#E8621A] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left nodes list */}
            <div className="lg:col-span-4 space-y-6">
              {ecosystemNodes.slice(0, 3).map((node) => (
                <div 
                  key={node.id}
                  onMouseEnter={() => setActiveEcosystemNode(node.id)}
                  onMouseLeave={() => setActiveEcosystemNode(null)}
                  onClick={() => setActiveEcosystemNode(activeEcosystemNode === node.id ? null : node.id)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    activeEcosystemNode === node.id 
                      ? 'bg-brand-navy border-[#E8621A] shadow-[0_4px_16px_rgba(232,98,26,0.08)]' 
                      : 'bg-brand-navy/40 border-slate-900 hover:border-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#E8621A]/10 border border-[#E8621A]/20">
                      {node.icon}
                    </div>
                    <h3 className="text-xs font-black text-white uppercase tracking-wider">{node.title}</h3>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-2 leading-relaxed font-semibold">{node.desc}</p>
                </div>
              ))}
            </div>

            {/* Middle Logo Ring visualization */}
            <div className="lg:col-span-4 flex items-center justify-center py-6 overflow-hidden">
              <div className="relative w-72 h-72 scale-[0.8] xs:scale-[0.85] sm:scale-100 rounded-full border border-dashed border-[#E8621A]/20 flex items-center justify-center animate-pulse-subtle transition-transform duration-300">
                <div className="absolute inset-4 rounded-full border border-[#E8621A]/10 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-slate-950 border-2 border-[#E8621A] flex flex-col items-center justify-center p-6 text-center shadow-[0_0_30px_rgba(232,98,26,0.15)] relative">
                    <img 
                      src="images/logo.png" 
                      alt="Center Logo" 
                      className="w-16 h-16 object-contain mb-2"
                    />
                    <span className="text-[12px] font-black text-white tracking-widest uppercase">BANGARKONDA</span>
                    <span className="text-[8px] font-bold text-[#d4af37] tracking-[0.2em] uppercase mt-0.5">PROJECTS</span>
                  </div>
                </div>

                {/* Node point orbits */}
                {ecosystemNodes.map((node, idx) => {
                  const angle = (idx * 360) / ecosystemNodes.length;
                  const radius = 136; // half of orbit size
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;
                  
                  return (
                    <div 
                      key={node.id}
                      className={`absolute w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300 cursor-pointer ${
                        activeEcosystemNode === node.id 
                          ? 'bg-[#E8621A] border-[#E8621A] scale-125 shadow-[0_0_15px_#E8621A]' 
                          : 'bg-brand-navy border-slate-800'
                      }`}
                      style={{
                        transform: `translate(${x}px, ${y}px)`
                      }}
                      onMouseEnter={() => setActiveEcosystemNode(node.id)}
                      onMouseLeave={() => setActiveEcosystemNode(null)}
                      onClick={() => setActiveEcosystemNode(activeEcosystemNode === node.id ? null : node.id)}
                      title={node.title}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right nodes list */}
            <div className="lg:col-span-4 space-y-6">
              {ecosystemNodes.slice(3, 6).map((node) => (
                <div 
                  key={node.id}
                  onMouseEnter={() => setActiveEcosystemNode(node.id)}
                  onMouseLeave={() => setActiveEcosystemNode(null)}
                  onClick={() => setActiveEcosystemNode(activeEcosystemNode === node.id ? null : node.id)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    activeEcosystemNode === node.id 
                      ? 'bg-brand-navy border-[#E8621A] shadow-[0_4px_16px_rgba(232,98,26,0.08)]' 
                      : 'bg-brand-navy/40 border-slate-900 hover:border-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#E8621A]/10 border border-[#E8621A]/20">
                      {node.icon}
                    </div>
                    <h3 className="text-xs font-black text-white uppercase tracking-wider">{node.title}</h3>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-2 leading-relaxed font-semibold">{node.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ─── FEATURED PROJECTS ────────────────────────────────────────────── */}
      <section id="projects" className="py-24 bg-brand-navy relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div className="space-y-3">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#d4af37]">
                FEATURED PROJECTS
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
                Building Landmarks. Creating Legacies.
              </h2>
              <div className="w-16 h-1 bg-[#E8621A]"></div>
            </div>

            {/* Category Filter buttons */}
            <div className="flex flex-nowrap overflow-x-auto pb-2 sm:pb-0 scrollbar-none gap-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap text-[10px] font-black uppercase tracking-wider">
              {['all', 'land-development', 'farmland', 'solar', 'hospitality', 'amusement-parks'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setProjectFilter(cat)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer shrink-0 ${
                    projectFilter === cat 
                      ? 'bg-[#E8621A] text-white' 
                      : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-900'
                  }`}
                >
                  {cat.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProjects.map((p) => (
              <div 
                key={p.id}
                className="group bg-slate-950 border border-slate-900 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:border-[#E8621A]/20"
              >
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <img 
                    src={p.image} 
                    alt={p.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#E8621A] text-white text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded">
                    {p.tag}
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="text-xs font-black text-white group-hover:text-[#E8621A] transition-colors uppercase tracking-wider">
                    {p.title}
                  </h3>
                  <p className="text-[11px] text-slate-300 font-semibold">{p.desc}</p>
                  <div className="flex items-center gap-1 text-[9px] text-[#d4af37] font-bold uppercase tracking-widest pt-2">
                    <MapPin className="w-3.5 h-3.5 text-[#E8621A]" />
                    <span>{p.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => setEnquiryOpen(true)}
              className="btn-outline px-8 py-3.5 text-xs font-black uppercase tracking-widest inline-flex items-center gap-2 group"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* ─── GALLERY SECTION ────────────────────────────────────────────────── */}
      <section id="gallery" className="py-24 bg-brand-dark relative border-t border-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#d4af37]">
              VISUAL MEDIA ARCHIVE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Project Showcase Gallery
            </h2>
            <div className="w-20 h-1 bg-[#E8621A] mx-auto"></div>
            <p className="text-xs text-slate-400 font-semibold max-w-xl mx-auto leading-relaxed mt-4">
              Explore every visual asset, photograph, site plan, and design blueprint from the Bangarkonda Projects ecosystem, with no filters or omissions.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {galleryImages.map((img, idx) => (
              <div 
                key={idx}
                onClick={() => setSelectedImage(img)}
                className="group cursor-pointer bg-slate-950 border border-slate-900 hover:border-[#E8621A]/40 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 relative"
              >
                <div className="aspect-square w-full overflow-hidden relative bg-slate-900 flex items-center justify-center">
                  <img 
                    src={img.src} 
                    alt={img.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-550"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-[10px] font-black tracking-widest text-[#E8621A] bg-brand-navy/90 border border-[#E8621A]/30 px-3 py-1.5 rounded-lg uppercase">
                      View Full
                    </span>
                  </div>
                </div>
                <div className="p-3 bg-brand-navy/30">
                  <h4 className="text-[9px] font-black text-slate-300 truncate uppercase tracking-wider">
                    {img.title}
                  </h4>
                  <p className="text-[8px] text-slate-500 font-semibold truncate mt-0.5 font-mono">
                    {img.src.split('/').pop()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INVESTORS ──────────────────────────────────────────────────────── */}
      <section id="investors" className="py-24 bg-brand-dark relative border-t border-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-8 sm:p-12 rounded-3xl relative overflow-hidden">
            {/* Accent gradient shape inside panel */}
            <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-[#E8621A]/10 blur-3xl z-0 pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#d4af37] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8621A] animate-pulse"></span>
                  INVESTOR RELATION DESK
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
                  Invest in a Sustainable Future
                </h2>
                <p className="text-sm text-slate-350 max-w-2xl font-semibold leading-relaxed">
                  Partner with us and be a part of India's next infrastructure and green energy growth story. Request detailed resources below or join our general subscriber database.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <button 
                    onClick={() => {
                      setEnquiryForm({
                        name: '',
                        email: '',
                        phone: '',
                        sector: 'solar',
                        message: 'I am interested in requesting the financial breakdown and return-on-investment (ROI) models for Bangarkonda Projects.'
                      });
                      setEnquiryOpen(true);
                    }}
                    className="btn-outline px-5 py-3 text-[10px] font-black uppercase tracking-wider bg-slate-950/80 hover:bg-slate-950/40 flex items-center gap-2"
                  >
                    <span>Request ROI & Financial Models</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#E8621A]" />
                  </button>

                  <button 
                    onClick={() => {
                      setEnquiryForm({
                        name: '',
                        email: '',
                        phone: '',
                        sector: 'solar',
                        message: 'I would like to request detailed metrics and data reports regarding the sustainability and carbon footprint operations of Bangarkonda Projects.'
                      });
                      setEnquiryOpen(true);
                    }}
                    className="btn-outline px-5 py-3 text-[10px] font-black uppercase tracking-wider bg-slate-950/80 hover:bg-slate-950/40 flex items-center gap-2"
                  >
                    <span>Request Sustainability Metrics</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#E8621A]" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 w-full lg:pt-6">
                {newsletterSubmitted ? (
                  <div className="flex flex-col items-center justify-center p-6 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl text-center">
                    <CheckCircle2 className="w-8 h-8 mb-2" />
                    <span className="text-xs font-black uppercase tracking-wider">Subscription Saved!</span>
                    <span className="text-[10px] mt-1 text-slate-450 font-semibold">Our investor relations team will reach out soon.</span>
                  </div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                    <input 
                      type="email" 
                      required
                      placeholder="Enter investor email" 
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="flex-1 bg-slate-950/80 border border-slate-900 text-xs font-semibold rounded-xl px-4 py-3.5 focus:border-[#E8621A] outline-none text-white transition-colors w-full"
                    />
                    <button 
                      type="submit"
                      className="btn-orange px-6 py-3.5 text-xs font-black uppercase tracking-widest w-full sm:w-auto shrink-0"
                    >
                      Subscribe
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT SECTION ────────────────────────────────────────────────── */}
      <section id="contact" className="py-24 bg-brand-navy relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#d4af37]">
                  CONTACT US
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
                  Let's Connect
                </h2>
                <div className="w-16 h-1 bg-[#E8621A]"></div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-semibold">
                Have questions about our farmland projects, commercial townships, or clean energy assets? Reach out to our customer experience or corporate desk.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-[#E8621A]/10 border border-[#E8621A]/20 text-[#E8621A] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-[#d4af37] uppercase tracking-wider">Corporate Address</h4>
                    <p className="text-xs text-slate-200 mt-1 font-semibold leading-relaxed">
                      Prestige Trade Tower,<br />11th Floor, The Executive Centre,<br />High Grounds, Palace Road,<br />Bengaluru – 560001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-[#E8621A]/10 border border-[#E8621A]/20 text-[#E8621A] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-[#d4af37] uppercase tracking-wider">Call Helpdesk</h4>
                    <p className="text-xs text-slate-200 mt-1 font-bold">
                      +91 9972437119
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-[#E8621A]/10 border border-[#E8621A]/20 text-[#E8621A] shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-[#d4af37] uppercase tracking-wider">Email Queries</h4>
                    <p className="text-xs text-slate-200 mt-1 font-semibold">
                      bangarkondaprojectspvtltd@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-outline px-6 py-3 text-xs font-black uppercase tracking-widest inline-flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-[#E8621A]" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Quick Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="glass-panel p-6 sm:p-8 rounded-2xl">
                <h3 className="text-sm font-black text-white uppercase tracking-wider border-b border-slate-800/80 pb-4 mb-6">
                  Quick Enquiry Registry
                </h3>

                <form onSubmit={handleEnquirySubmit} className="space-y-4 text-xs font-semibold">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[9px] text-[#d4af37] uppercase tracking-wider block mb-1.5 font-bold">Your Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="John Doe" 
                        value={enquiryForm.name}
                        onChange={(e) => setEnquiryForm(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full bg-slate-950/80 border border-slate-900 rounded-lg px-3.5 py-3 text-white focus:border-[#E8621A] outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[9px] text-[#d4af37] uppercase tracking-wider block mb-1.5 font-bold">Phone Number</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="+91 XXXXX XXXXX" 
                        value={enquiryForm.phone}
                        onChange={(e) => setEnquiryForm(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full bg-slate-950/80 border border-slate-900 rounded-lg px-3.5 py-3 text-white focus:border-[#E8621A] outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[9px] text-[#d4af37] uppercase tracking-wider block mb-1.5 font-bold">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="name@company.com" 
                      value={enquiryForm.email}
                      onChange={(e) => setEnquiryForm(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full bg-slate-950/80 border border-slate-900 rounded-lg px-3.5 py-3 text-white focus:border-[#E8621A] outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[9px] text-[#d4af37] uppercase tracking-wider block mb-1.5 font-bold">Interest Sector</label>
                    <select
                      value={enquiryForm.sector}
                      onChange={(e) => setEnquiryForm(prev => ({ ...prev, sector: e.target.value }))}
                      className="w-full bg-slate-950/80 border border-slate-900 rounded-lg px-3.5 py-3 text-slate-200 focus:border-[#E8621A] outline-none transition-colors cursor-pointer font-bold uppercase tracking-wider text-[10px]"
                    >
                      <option value="real-estate">Real Estate & Townships</option>
                      <option value="farmland">Managed Farmlands</option>
                      <option value="solar">Solar Energy Investment</option>
                      <option value="hospitality">Resort & Water Park Hospitality</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[9px] text-[#d4af37] uppercase tracking-wider block mb-1.5 font-bold">Enquiry Message</label>
                    <textarea 
                      rows="3" 
                      placeholder="Briefly state your requirements..." 
                      value={enquiryForm.message}
                      onChange={(e) => setEnquiryForm(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full bg-slate-950/80 border border-slate-900 rounded-lg p-3.5 text-white focus:border-[#E8621A] outline-none transition-colors"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitted}
                      className="w-full btn-orange py-3.5 text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2"
                    >
                      {submitted ? (
                        <>
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Submitted Successfully</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Interest Inquiry</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>

          {/* Embedded Google Map */}
          <div className="mt-12 rounded-2xl overflow-hidden border border-[#E8621A]/20 h-80 relative shadow-[0_4px_30px_rgba(232,98,26,0.06)]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62208.184748299325!2d77.5425762216797!3d12.971112800000009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae168240bfe1ed%3A0x51d2c7595fa89b6c!2sPrestige%20Group!5e0!3m2!1sen!2sin!4v1781082205715!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Bangarkonda Office Location – Prestige Trade Tower"
              className="w-full h-full"
            ></iframe>
              <div className="absolute top-4 left-4 bg-brand-navy/95 border border-[#E8621A]/30 px-4 py-2.5 rounded-xl backdrop-blur-md pointer-events-none">
              <span className="text-[10px] font-black text-[#d4af37] uppercase tracking-widest block">Corporate Office</span>
              <span className="text-[11px] text-white font-bold uppercase mt-0.5">Prestige Trade Tower, Palace Road, Bengaluru</span>
            </div>
          </div>

        </div>
      </section>

      {/* ─── FOOTER ─────────────────────────────────────────────────────────── */}
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
                  className="h-14 w-auto object-contain filter drop-shadow-[0_0_8px_rgba(232,98,26,0.25)] transition-transform duration-300 hover:scale-105"
                />
                <div className="flex flex-col">
                  <span className="text-lg font-black tracking-widest text-[#E8621A] uppercase leading-none font-sans">
                    BANGARKONDA
                  </span>
                  <span className="text-[10px] tracking-[0.25em] text-[#d4af37] font-black uppercase mt-1">
                    PROJECTS PVT LTD
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
              <ul className="space-y-4 font-semibold text-slate-350">
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
                <nav className="flex gap-3 items-center uppercase tracking-wider text-[10px]">
                  <a href="/privacy.html" className="hover:text-white transition-colors">Privacy Policy</a>
                  <span className="opacity-50">|</span>
                  <a href="/terms.html" className="hover:text-white transition-colors">Terms & Conditions</a>
                </nav>
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

      {/* ─── ENQUIRY OVERLAY MODAL ───────────────────────────────────────────── */}
      {enquiryOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in">
          <div className="bg-brand-navy border-2 border-[#E8621A]/20 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl relative">
            
            {/* Close button */}
            <button 
              onClick={() => setEnquiryOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <h3 className="text-base font-black text-white uppercase tracking-wider">Interest Enquiry Desk</h3>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1 font-bold">Register your investment or plot request interest details</p>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-10 bg-emerald-500/5 border border-emerald-500/20 text-emerald-400 rounded-xl text-center">
                  <CheckCircle2 className="w-12 h-12 mb-3" />
                  <span className="text-sm font-black uppercase tracking-wider">Enquiry Submitted!</span>
                  <span className="text-[11px] mt-1 text-slate-400 font-semibold max-w-[280px]">Our corporate sales advisor will reach out to you within 24 hours.</span>
                </div>
              ) : (
                <form onSubmit={handleEnquirySubmit} className="space-y-4 text-xs font-semibold">
                  <div>
                    <label className="text-[9px] text-[#d4af37] uppercase tracking-wider block mb-1.5 font-bold">Your Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Enter full name" 
                      value={enquiryForm.name}
                      onChange={(e) => setEnquiryForm(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full bg-slate-950/80 border border-slate-900 rounded-lg px-3.5 py-3 text-white focus:border-[#E8621A] outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[9px] text-[#d4af37] uppercase tracking-wider block mb-1.5 font-bold">Email Address</label>
                      <input 
                        type="email" 
                        required
                        placeholder="name@email.com" 
                        value={enquiryForm.email}
                        onChange={(e) => setEnquiryForm(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full bg-slate-950/80 border border-slate-900 rounded-lg px-3.5 py-3 text-white focus:border-[#E8621A] outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[9px] text-[#d4af37] uppercase tracking-wider block mb-1.5 font-bold">Phone Number</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="+91 XXXXX XXXXX" 
                        value={enquiryForm.phone}
                        onChange={(e) => setEnquiryForm(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full bg-slate-950/80 border border-slate-900 rounded-lg px-3.5 py-3 text-white focus:border-[#E8621A] outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[9px] text-[#d4af37] uppercase tracking-wider block mb-1.5 font-bold">Sector Interest Option</label>
                    <select
                      value={enquiryForm.sector}
                      onChange={(e) => setEnquiryForm(prev => ({ ...prev, sector: e.target.value }))}
                      className="w-full bg-slate-950/80 border border-slate-900 rounded-lg px-3.5 py-3 text-slate-200 focus:border-[#E8621A] outline-none transition-colors cursor-pointer font-bold uppercase tracking-wider text-[10px]"
                    >
                      <option value="real-estate">Real Estate & Townships</option>
                      <option value="farmland">Managed Farmlands</option>
                      <option value="solar">Solar Energy Investment</option>
                      <option value="hospitality">Resort & Water Park Hospitality</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[9px] text-[#d4af37] uppercase tracking-wider block mb-1.5 font-bold">Inquiry Message</label>
                    <textarea 
                      rows="3" 
                      placeholder="Describe what plots, flats or energy partnerships you are interested in..." 
                      value={enquiryForm.message}
                      onChange={(e) => setEnquiryForm(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full bg-slate-950/80 border border-slate-900 rounded-lg p-3.5 text-white focus:border-[#E8621A] outline-none transition-colors"
                    ></textarea>
                  </div>

                  <div className="pt-4 flex gap-3">
                    <button
                      type="button"
                      onClick={() => setEnquiryOpen(false)}
                      className="flex-1 py-3.5 bg-slate-950 hover:bg-slate-900 text-slate-300 font-bold rounded-xl text-center border border-slate-900"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 btn-orange py-3.5 text-xs font-black uppercase tracking-widest"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      )}

      {/* ─── LIGHTBOX MODAL ─────────────────────────────────────────────────── */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close button */}
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors p-2 bg-slate-950/60 border border-slate-900 rounded-full cursor-pointer hover:border-[#E8621A]/40"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Lightbox content */}
          <div 
            className="max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title} 
              className="max-w-full max-h-[75vh] object-contain rounded-lg border border-slate-900 shadow-2xl"
            />
            
            <div className="mt-4 text-center space-y-1">
              <h3 className="text-sm font-black text-white uppercase tracking-wider">
                {selectedImage.title}
              </h3>
              <p className="text-[10px] text-slate-455 font-semibold font-mono">
                Source Path: {selectedImage.src}
              </p>
            </div>
          </div>
        </div>
      )}


      {/* Floating contact buttons: WhatsApp + Call */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        <a
          href="https://wa.me/919972437119?text=Hello%20Bangarkonda%20Projects"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
          className="bg-[#25D366] hover:bg-[#1DA85B] text-white p-3 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-105 ring-2 ring-white/10 border border-white/10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
            <path d="M20.52 3.48A11.92 11.92 0 0012 0C5.372 0 0 5.373 0 12c0 2.116.555 4.162 1.61 5.958L0 24l6.324-1.64A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12 0-3.18-1.24-6.186-3.48-8.52zM12 21.8c-1.23 0-2.44-.32-3.5-.92l-.25-.13-3.76.98.99-3.66-.16-.28A9.5 9.5 0 012.5 12 9.5 9.5 0 0112 2.5c2.54 0 4.93.99 6.72 2.78A9.47 9.47 0 0121.5 12c0 5.24-4.26 9.5-9.5 9.5z"/>
            <path d="M17.15 14.02c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.13-.61.14-.19.28-.73.9-.9 1.09-.17.18-.34.2-.63.07-.3-.14-1.28-.47-2.43-1.5-.9-.8-1.5-1.78-1.67-2.07-.17-.28-.02-.43.12-.57.12-.12.27-.33.4-.5.13-.16.17-.28.26-.47.09-.19.05-.36-.03-.5-.08-.12-.6-1.45-.82-1.98-.22-.53-.45-.46-.62-.46-.16 0-.35-.02-.54-.02-.18 0-.47.07-.72.36-.25.29-.95.92-.95 2.24 0 1.32.98 2.6 1.12 2.78.14.18 1.94 2.96 4.7 4.034 2.76 1.07 3.29 1.04 3.55.98.26-.06.84-.33.96-.66.12-.33.12-.61.08-.67-.04-.07-.15-.11-.33-.2z"/>
          </svg>
        </a>

        <a
          href="tel:+919972437119"
          aria-label="Call us"
          title="Call"
          className="bg-[#E8621A] hover:bg-[#d96b21] text-white p-3 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-105 ring-2 ring-white/10 border border-white/10"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>

    </div>
  );
}
