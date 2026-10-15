import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';

export default function ProjectCard({ project }) {
  if (!project) return null;

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block bg-slate-950 border border-slate-900 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:border-[#E8621A]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(232,98,26,0.15)] focus:outline-none focus:ring-2 focus:ring-[#E8621A] focus:ring-offset-2 focus:ring-offset-slate-950 cursor-pointer h-full flex flex-col"
      aria-label={`View details for ${project.title}`}
    >
      <div className="aspect-[4/3] w-full overflow-hidden relative bg-slate-900">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-500 ease-out"
        />
        {/* Subtle dark gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

        <div className="absolute top-3 left-3 bg-[#E8621A] text-white text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded shadow-md">
          {project.tag}
        </div>

        {project.projectSize && (
          <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-sm border border-white/10 text-white text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
            {project.projectSize}
          </div>
        )}
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-2">
          <h3 className="text-xs font-black text-white group-hover:text-[#E8621A] transition-colors uppercase tracking-wider line-clamp-1">
            {project.title}
          </h3>
          <p className="text-[11px] text-slate-350 font-medium line-clamp-2 leading-relaxed">
            {project.shortDesc}
          </p>
        </div>

        <div className="pt-2 border-t border-slate-900/80 flex items-center justify-between text-[9px] font-bold uppercase tracking-wider">
          <div className="flex items-center gap-1.5 text-[#d4af37]">
            <MapPin className="w-3.5 h-3.5 text-[#E8621A] shrink-0" />
            <span className="truncate max-w-[140px] sm:max-w-[170px]">{project.location}</span>
          </div>
          <span className="text-[#E8621A] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform shrink-0 font-extrabold">
            Explore
            <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </Link>
  );
}
