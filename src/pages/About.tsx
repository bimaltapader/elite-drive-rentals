import React from 'react';
import { motion } from 'framer-motion';
import { Award, Compass, ShieldCheck, MapPin } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

const VALUES = [
  {
    icon: <Award className="text-gold-500" size={24} />,
    title: 'Bespoke Curation',
    description: 'We do not simply buy cars. We curate configurations, opting for the finest leather hides, unique stitch paths, and performance upgrades.'
  },
  {
    icon: <ShieldCheck className="text-gold-500" size={24} />,
    title: 'Absolute Discretion',
    description: 'Serving diplomats, business magnates, and celebrities. We maintain absolute confidentiality, secure storage logistics, and hidden profiles.'
  },
  {
    icon: <Compass className="text-gold-500" size={24} />,
    title: 'Global Delivery',
    description: 'From yacht slips in Monaco to airbases in Beverly Hills. Your vehicle is delivered exactly where and when you require, detailed to perfection.'
  }
];

export const About: React.FC = () => {
  return (
    <PageTransition>
      <div className="bg-luxury-black pt-36 pb-28 text-white min-h-screen relative overflow-hidden">
        {/* Spotlights */}
        <div className="absolute top-10 right-10 w-[600px] h-[600px] radial-glow opacity-30 pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-[500px] h-[500px] radial-glow opacity-25 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          {/* Banner Section */}
          <div className="text-center mb-24 space-y-4">
            <span className="text-gold-500 text-xs font-semibold uppercase tracking-[0.25em] bg-gold-500/5 px-3 py-1 rounded-sm border border-gold-500/10">
              Elite Heritage
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-extrabold tracking-wide">
              Our <span className="text-gold-gradient font-light">Heritage & Values</span>
            </h1>
            <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-3" />
            <p className="text-gray-400 font-light text-xs sm:text-sm max-w-lg mx-auto leading-relaxed px-4 sm:px-0">
              Discover the philosophy behind Elite Drive—the standard of premium, high-luxury automotive privilege.
            </p>
          </div>

          {/* Brand Narrative Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-36">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl sm:text-4xl text-white leading-tight">
                Curators of the World's Finest Driving Privilege
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                Founded in Mayfair, London, in 2018, Elite Drive was born out of a simple realization: high-end automobile rental should not feel transactional. It should feel like an extension of one's own fleet.
              </p>
              <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                We cater strictly to individuals who demand excellence without compromise. Every vehicle we own is configured to custom sovereign packages—from custom matte paint systems to bespoke executive interior trims. We do not operate a normal depot; our concierge managers operate directly out of premium airport hangars and five-star hotel lounges, delivering unmatched convenience.
              </p>
              <div className="pt-5 border-l-2 border-gold-500 pl-6 space-y-2">
                <p className="font-serif text-base sm:text-lg italic text-gold-200 leading-relaxed">
                  "We do not rent cars. We deliver the absolute liberty of the highway, enclosed in absolute luxury."
                </p>
                <span className="text-[10px] uppercase tracking-widest text-gold-500 font-bold block mt-2">
                  — Arthur Pendelton, Founder & MD
                </span>
              </div>
            </div>

            <div className="relative group">
              {/* Background elements */}
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-gold-500/5 blur-[70px] pointer-events-none" />
              <div className="rounded-2xl overflow-hidden glassmorphism p-2 border border-white/10 shadow-2xl relative">
                <div className="absolute inset-0 border border-gold-500/10 group-hover:border-gold-500/30 transition-colors duration-750 rounded-2xl pointer-events-none" />
                <img
                  src="/assets/rolls_royce_phantom.png"
                  alt="Rolls Royce Phantom luxury silhouette"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Brand Pillars / Core Values Grid */}
          <div className="mb-36">
            <div className="text-center mb-20">
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold mb-2 bg-white/5 border border-white/5 px-3 py-1 rounded-sm inline-block">
                THE SOVEREIGN CODE
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-wide">Our Core Pillars</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {VALUES.map((val, idx) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className="p-8 rounded-xl glassmorphism border border-white/5 flex flex-col items-center text-center space-y-5 shadow-2xl glassmorphism-gold-hover group"
                >
                  <div className="w-14 h-14 rounded-full bg-gold-500/5 border border-gold-500/15 group-hover:border-gold-500/40 flex items-center justify-center transition-all duration-300">
                    {val.icon}
                  </div>
                  <h3 className="font-serif text-xl text-white font-medium group-hover:text-gold-400 transition-colors duration-300">{val.title}</h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    {val.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Global Concierge Map / Info */}
          <div className="rounded-2xl glassmorphism p-6 sm:p-10 md:p-12 border border-white/5 shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-gold-500/5 blur-[90px] pointer-events-none" />
            
            <div className="space-y-6">
              <h3 className="font-serif text-2xl sm:text-3xl text-gold-gradient tracking-wide">
                Worldwide Logistics Networks
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                We own and operate regional distribution hubs across the globe. By working closely with private air carriers and international ports, we can coordinate car delivery to almost any location worldwide.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-light pt-2">
                <div className="flex items-center gap-3 bg-white/3 border border-white/5 p-3 rounded hover:bg-white/5 transition-colors">
                  <MapPin size={15} className="text-gold-500" />
                  <span>London Office (Mayfair)</span>
                </div>
                <div className="flex items-center gap-3 bg-white/3 border border-white/5 p-3 rounded hover:bg-white/5 transition-colors">
                  <MapPin size={15} className="text-gold-500" />
                  <span>Monaco Hub (Port Hercule)</span>
                </div>
                <div className="flex items-center gap-3 bg-white/3 border border-white/5 p-3 rounded hover:bg-white/5 transition-colors">
                  <MapPin size={15} className="text-gold-500" />
                  <span>Dubai Office (DIFC)</span>
                </div>
                <div className="flex items-center gap-3 bg-white/3 border border-white/5 p-3 rounded hover:bg-white/5 transition-colors">
                  <MapPin size={15} className="text-gold-500" />
                  <span>Los Angeles Hub (Beverly Hills)</span>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden aspect-video border border-white/10 relative group shadow-2xl">
              <img
                src="/assets/bentley_bentayga.png"
                alt="Elite Drive luxury fleet vehicle"
                className="w-full h-full object-cover filter brightness-[0.7] group-hover:scale-103 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-black/25" />
              <div className="absolute bottom-6 left-6 font-serif text-sm sm:text-base tracking-[0.2em] text-gold-500 font-semibold uppercase">
                ELITE DRIVE WORLDWIDE
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
