import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  MapPin,
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Home,
  CheckCircle2,
  Calendar,
  Layers,
  Sparkles,
  Phone,
  Mail,
  Send,
  X,
  Compass,
  Building2,
  Sun,
  Zap,
  Building,
  Sprout,
  Droplet,
  Waves,
  Mountain,
  Trees,
  Grid,
  ShieldCheck,
  Shield,
  Activity,
  Leaf,
  Coffee,
  Heart,
  Sliders,
  Smile,
  RefreshCw,
  Truck,
  TreePine,
  Briefcase,
  Users,
  Award,
  Utensils,
  Car
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { getProjectBySlug, getRelatedProjects, projectsData } from '../data/projectsData';

// Map icon string names to Lucide icons
const iconMap = {
  Compass: Compass,
  Road: Layers,
  Trees: Trees,
  ShieldCheck: ShieldCheck,
  Shield: Shield,
  Sun: Sun,
  Zap: Zap,
  Activity: Activity,
  Leaf: Leaf,
  Building: Building,
  Building2: Building2,
  Sparkles: Sparkles,
  Coffee: Coffee,
  Heart: Heart,
  Sprout: Sprout,
  Mountain: Mountain,
  Droplets: Droplet,
  Home: Home,
  MapPin: MapPin,
  Grid: Grid,
  Users: Users,
  Award: Award,
  Utensils: Utensils,
  Car: Car,
  Waves: Waves,
  Sliders: Sliders,
  Smile: Smile,
  RefreshCw: RefreshCw,
  Truck: Truck,
  Layers: Layers,
  CheckCircle: CheckCircle2,
  TreePine: TreePine,
  Briefcase: Briefcase
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug);

  const [lightboxImage, setLightboxImage] = useState(null);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Scroll to top upon project change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (project) {
      document.title = `${project.title} | Bangarkonda Projects`;
      setEnquiryForm(prev => ({
        ...prev,
        project: project.title,
        message: `Hello, I am interested in learning more about ${project.title} (${project.location}). Please share details.`
      }));
    }
  }, [slug, project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-brand-dark text-slate-100 flex flex-col justify-between">
        <Navbar
          setEnquiryOpen={() => setEnquiryOpen(true)}
          scrollToSection={(sec) => navigate(`/#${sec}`)}
        />
        <div className="max-w-2xl mx-auto px-4 py-32 text-center space-y-6">
          <div className="inline-block p-4 rounded-full bg-orange-500/10 border border-orange-500/20 text-[#E8621A]">
            <Compass className="w-12 h-12" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
            Project Not Found
          </h1>
          <p className="text-sm text-slate-400">
            The project you are looking for does not exist or may have been relocated.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <Link
              to="/#projects"
              className="btn-orange px-8 py-3 text-xs font-black uppercase tracking-widest inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Projects</span>
            </Link>
          </div>
        </div>
        <Footer scrollToSection={(sec) => navigate(`/#${sec}`)} />
      </div>
    );
  }

  const related = getRelatedProjects(project.id, 3);

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEnquiryOpen(false);
    }, 2800);
  };

  const handleScrollToEnquiry = () => {
    const el = document.getElementById('project-enquiry-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setEnquiryOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark text-slate-100 flex flex-col justify-between selection:bg-[#E8621A] selection:text-white">
      {/* Navbar with smooth navigation delegation */}
      <Navbar
        setEnquiryOpen={() => setEnquiryOpen(true)}
        scrollToSection={(sec) => navigate(`/#${sec}`)}
      />

      {/* ─── BREADCRUMB & BACK TO PROJECTS ───────────────────────────────────── */}
      <div className="bg-slate-950/80 border-b border-slate-900/90 py-3 sticky top-20 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3 text-xs">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-slate-400 font-semibold text-[11px] overflow-x-auto py-1">
            <Link to="/" className="flex items-center gap-1 hover:text-white transition-colors shrink-0">
              <Home className="w-3.5 h-3.5 text-[#E8621A]" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
            <Link to="/#projects" className="hover:text-white transition-colors shrink-0">
              Projects
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
            <span className="text-[#ffd700] font-bold truncate max-w-[200px] sm:max-w-none">
              {project.title}
            </span>
          </nav>

          <Link
            to="/#projects"
            className="inline-flex items-center gap-1.5 text-[#E8621A] hover:text-[#ff8a47] font-black uppercase text-[10px] tracking-wider transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </Link>
        </div>
      </div>

      <main className="flex-1">
        {/* ─── A. HERO SECTION ─────────────────────────────────────────────────── */}
        <section className="relative min-h-[520px] lg:min-h-[580px] flex items-center overflow-hidden border-b border-slate-900">
          {/* Dynamic Hero Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center filter brightness-90 transform scale-102 transition-transform duration-1000"
            />
            {/* Dark Navy Gradient Overlay to ensure crisp contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070F21] via-[#070F21]/80 to-[#070F21]/60" />
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-black/80" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10 w-full">
            <div className="max-w-3xl space-y-6">
              {/* Category Pill & Project Size Badge */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="bg-[#E8621A] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded shadow-md">
                  {project.categoryLabel}
                </span>
                {project.projectSize && (
                  <span className="bg-[#ffd700]/15 border border-[#ffd700]/30 text-[#ffd700] text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded">
                    {project.projectSize}
                  </span>
                )}
                {project.status && (
                  <span className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/60 text-slate-300 text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                    {project.status}
                  </span>
                )}
              </div>

              {/* Project Title */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.1]">
                {project.title}
              </h1>

              {/* Location Pin */}
              <div className="flex items-center gap-2 text-[#ffd700] font-bold text-xs sm:text-sm uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-[#E8621A] shrink-0" />
                <span>{project.location}</span>
              </div>

              {/* Concise Description */}
              <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed max-w-2xl">
                {project.shortDesc}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <button
                  onClick={handleScrollToEnquiry}
                  className="btn-orange px-7 py-3.5 text-xs font-black uppercase tracking-widest inline-flex items-center gap-2 cursor-pointer shadow-lg hover:shadow-[0_0_25px_rgba(232,98,26,0.4)]"
                >
                  <Send className="w-4 h-4" />
                  <span>Enquire About This Project</span>
                </button>

                <Link
                  to="/#projects"
                  className="btn-outline px-6 py-3.5 text-xs font-black uppercase tracking-widest inline-flex items-center gap-2 group"
                >
                  <span>Explore All Projects</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── B. ABOUT THIS PROJECT (TWO-COLUMN OVERVIEW) ─────────────────────── */}
        <section className="py-20 bg-brand-navy/60 border-b border-slate-900/80 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Detailed Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#d4af37]">
                    PROJECT OVERVIEW
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
                    About This Project
                  </h2>
                  <div className="w-16 h-1 bg-[#E8621A]"></div>
                </div>

                <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                  {project.fullDesc}
                </p>

                {/* Structured Quick Facts Table */}
                <div className="pt-4">
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-200 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E8621A]" />
                    Key Project Specifications
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.details.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-950/70 border border-slate-900 p-3.5 rounded-xl flex flex-col justify-center"
                      >
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          {item.label}
                        </span>
                        <span className="text-xs font-extrabold text-white mt-0.5">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Supporting Imagery */}
              <div className="lg:col-span-5">
                <div className="relative group rounded-2xl overflow-hidden border border-slate-900 shadow-2xl bg-slate-950">
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={project.gallery[1]?.src || project.image}
                      alt={`${project.title} overview`}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-4 bg-slate-950 border-t border-slate-900 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-bold text-[#ffd700] uppercase tracking-wider">
                        {project.tag} CONCEPT
                      </p>
                      <h4 className="text-xs font-black text-white uppercase tracking-wide">
                        {project.title}
                      </h4>
                    </div>
                    <span className="text-[9px] font-bold text-slate-400 uppercase">
                      {project.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── C. PROJECT HIGHLIGHTS ───────────────────────────────────────────── */}
        {project.highlights && project.highlights.length > 0 && (
          <section className="py-20 bg-brand-dark relative border-b border-slate-900/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#d4af37]">
                  PLANNED ADVANTAGES & ATTRIBUTES
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
                  Project Highlights
                </h2>
                <div className="w-16 h-1 bg-[#E8621A] mx-auto"></div>
                <p className="text-xs text-slate-400 font-medium max-w-xl mx-auto leading-relaxed">
                  Carefully engineered features and infrastructure planned for {project.title}.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {project.highlights.map((feat, idx) => {
                  const IconComp = iconMap[feat.icon] || Sparkles;
                  return (
                    <div
                      key={idx}
                      className="glass-panel p-6 rounded-2xl border border-slate-900 hover:border-[#E8621A]/30 transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div className="space-y-4">
                        <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 text-[#E8621A] flex items-center justify-center group-hover:scale-110 transition-transform">
                          <IconComp className="w-6 h-6" />
                        </div>
                        <h3 className="text-xs font-black text-white uppercase tracking-wider">
                          {feat.title}
                        </h3>
                        <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
                          {feat.desc}
                        </p>
                      </div>
                      <div className="h-1 w-full bg-slate-900 rounded-full overflow-hidden mt-6">
                        <div className="h-full w-1/3 bg-[#E8621A] group-hover:w-full transition-all duration-500"></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ─── E. PROJECT GALLERY & LIGHTBOX ───────────────────────────────────── */}
        <section className="py-20 bg-brand-navy/40 relative border-b border-slate-900/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div className="space-y-2">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#d4af37]">
                  VISUAL DOCUMENTATION
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
                  Project Gallery
                </h2>
                <div className="w-16 h-1 bg-[#E8621A]"></div>
              </div>
              <p className="text-xs text-slate-400 font-medium max-w-md">
                Click any asset below to view high-resolution conceptual renders, layouts, and site imagery.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {project.gallery.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setLightboxImage(img)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setLightboxImage(img); }}
                  tabIndex={0}
                  role="button"
                  aria-label={`View full image: ${img.title}`}
                  className="group cursor-pointer bg-slate-950 border border-slate-900 hover:border-[#E8621A]/50 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#E8621A]"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden relative bg-slate-900">
                    <img
                      src={img.src}
                      alt={img.title}
                      loading="lazy"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-[10px] font-black tracking-widest text-[#E8621A] bg-slate-950/90 border border-[#E8621A]/40 px-3 py-1.5 rounded-lg uppercase">
                        View Full
                      </span>
                    </div>
                  </div>
                  <div className="p-3.5 bg-slate-950">
                    <h4 className="text-[10px] font-extrabold text-slate-200 truncate uppercase tracking-wider">
                      {img.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── G. ENQUIRY CTA SECTION ─────────────────────────────────────────── */}
        <section id="project-enquiry-section" className="py-20 bg-brand-dark relative border-b border-slate-900/80 overflow-hidden">
          <div className="absolute -top-24 right-0 w-96 h-96 rounded-full bg-[#E8621A]/5 blur-[120px] pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-900 relative">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left pitch */}
                <div className="lg:col-span-6 space-y-5">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#d4af37] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#E8621A] animate-pulse"></span>
                    DIRECT DEVELOPER INQUIRY
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
                    Interested in {project.title}?
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                    Connect with our project leadership team for master plans, scheduled site visits, development schedules, or joint participation discussions.
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <a
                      href="tel:+919972437119"
                      className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[#E8621A]" />
                      <span>Call +91 99724 37119</span>
                    </a>
                    <a
                      href="https://wa.me/919972437119?text=Hello%20Bangarkonda%20Projects,%20I%20am%20interested%20in%20"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Right Form */}
                <div className="lg:col-span-6">
                  <div className="bg-slate-950/90 border border-slate-900 p-6 sm:p-8 rounded-2xl">
                    {submitted ? (
                      <div className="text-center py-8 space-y-3">
                        <CheckCircle2 className="w-12 h-12 text-[#E8621A] mx-auto animate-bounce" />
                        <h4 className="text-base font-black text-white uppercase">Inquiry Received</h4>
                        <p className="text-xs text-slate-400">
                          Thank you for your interest in {project.title}. Our project relations manager will reach out shortly.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleEnquirySubmit} className="space-y-4">
                        <div>
                          <label className="text-[9px] text-[#d4af37] uppercase tracking-wider block mb-1 font-bold">
                            Selected Project
                          </label>
                          <input
                            type="text"
                            readOnly
                            value={project.title}
                            className="w-full bg-slate-900/60 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white font-bold text-xs"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="text-[9px] text-[#d4af37] uppercase tracking-wider block mb-1 font-bold">
                              Full Name
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="Your Name"
                              value={enquiryForm.name}
                              onChange={(e) => setEnquiryForm(prev => ({ ...prev, name: e.target.value }))}
                              className="w-full bg-slate-900/40 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white text-xs focus:border-[#E8621A] outline-none"
                            />
                          </div>
                          <div>
                            <label className="text-[9px] text-[#d4af37] uppercase tracking-wider block mb-1 font-bold">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              required
                              placeholder="+91 XXXXX XXXXX"
                              value={enquiryForm.phone}
                              onChange={(e) => setEnquiryForm(prev => ({ ...prev, phone: e.target.value }))}
                              className="w-full bg-slate-900/40 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white text-xs focus:border-[#E8621A] outline-none"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="text-[9px] text-[#d4af37] uppercase tracking-wider block mb-1 font-bold">
                            Email Address
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="name@email.com"
                            value={enquiryForm.email}
                            onChange={(e) => setEnquiryForm(prev => ({ ...prev, email: e.target.value }))}
                            className="w-full bg-slate-900/40 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white text-xs focus:border-[#E8621A] outline-none"
                          />
                        </div>

                        <div>
                          <label className="text-[9px] text-[#d4af37] uppercase tracking-wider block mb-1 font-bold">
                            Message
                          </label>
                          <textarea
                            rows="2"
                            value={enquiryForm.message}
                            onChange={(e) => setEnquiryForm(prev => ({ ...prev, message: e.target.value }))}
                            className="w-full bg-slate-900/40 border border-slate-800 rounded-lg p-3 text-white text-xs focus:border-[#E8621A] outline-none"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full btn-orange py-3.5 text-xs font-black uppercase tracking-widest cursor-pointer shadow-lg"
                        >
                          Enquire Now
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── F. RELATED PROJECTS ────────────────────────────────────────────── */}
        <section className="py-20 bg-brand-navy relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
              <div className="space-y-2">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#d4af37]">
                  RECOMMENDED DEVELOPMENTS
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
                  Related Projects
                </h2>
                <div className="w-16 h-1 bg-[#E8621A]"></div>
              </div>

              <Link
                to="/#projects"
                className="btn-outline px-6 py-2.5 text-xs font-black uppercase tracking-widest inline-flex items-center gap-2 group self-start sm:self-auto"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4 backdrop-blur-md animate-fade-in"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 text-slate-400 hover:text-white p-2.5 bg-slate-950/80 border border-slate-800 rounded-full cursor-pointer hover:border-[#E8621A]/50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage.src}
              alt={lightboxImage.title}
              className="max-w-full max-h-[75vh] object-contain rounded-xl border border-slate-900 shadow-2xl"
            />
            <div className="mt-4 text-center">
              <h3 className="text-sm font-black text-white uppercase tracking-wider">
                {lightboxImage.title}
              </h3>
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
            <path d="M20.52 3.48A11.92 11.92 0 0012 0C5.372 0 0 5.373 0 12c0 2.116.555 4.162 1.61 5.958L0 24l6.324-1.64A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12 0-3.18-1.24-6.186-3.48-8.52zM12 21.8c-1.23 0-2.44-.32-3.5-.92l-.25-.13-3.76.98.99-3.66-.16-.28A9.5 9.5 0 012.5 12 9.5 9.5 0 0112 2.5c2.54 0 4.93.99 6.72 2.78A9.47 9.47 0 0121.5 12c0 5.24-4.26 9.5-9.5 9.5z" />
            <path d="M17.15 14.02c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.13-.61.14-.19.28-.73.9-.9 1.09-.17.18-.34.2-.63.07-.3-.14-1.28-.47-2.43-1.5-.9-.8-1.5-1.78-1.67-2.07-.17-.28-.02-.43.12-.57.12-.12.27-.33.4-.5.13-.16.17-.28.26-.47.09-.19.05-.36-.03-.5-.08-.12-.6-1.45-.82-1.98-.22-.53-.45-.46-.62-.46-.16 0-.35-.02-.54-.02-.18 0-.47.07-.72.36-.25.29-.95.92-.95 2.24 0 1.32.98 2.6 1.12 2.78.14.18 1.94 2.96 4.7 4.034 2.76 1.07 3.29 1.04 3.55.98.26-.06.84-.33.96-.66.12-.33.12-.61.08-.67-.04-.07-.15-.11-.33-.2z" />
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

      <Footer scrollToSection={(sec) => navigate(`/#${sec}`)} />
    </div>
  );
}
