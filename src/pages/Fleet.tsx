import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import { PageTransition } from '../components/PageTransition';

interface CarSpec {
  power: string;
  engine: string;
  acceleration: string;
  topSpeed: string;
}

interface Car {
  id: string;
  name: string;
  category: 'hyper' | 'prestige' | 'suv';
  categoryLabel: string;
  price: string;
  specs: CarSpec;
  description: string;
  image: string;
}

const FLEET_DATA: Car[] = [
  {
    id: 'rolls-royce-phantom',
    name: 'Rolls Royce Phantom',
    category: 'prestige',
    categoryLabel: 'Prestige Class',
    price: '$2,200',
    specs: {
      power: '563 HP',
      engine: '6.75L V12',
      acceleration: '5.3 seconds',
      topSpeed: '250 km/h'
    },
    description: 'The ultimate signature of success. Absolute cabin tranquility, majestic road presence, and hand-finished premium luxury.',
    image: '/assets/rolls_royce_phantom.png'
  },
  {
    id: 'lamborghini-urus',
    name: 'Lamborghini Urus',
    category: 'suv',
    categoryLabel: 'Super SUV',
    price: '$1,500',
    specs: {
      power: '650 HP',
      engine: '4.0L Twin-Turbo V8',
      acceleration: '3.6 seconds',
      topSpeed: '305 km/h'
    },
    description: 'A super sports car soul combined with the absolute versatility of an SUV. Incredible sound, exhaust notes, and performance.',
    image: '/assets/lamborghini_urus.png'
  },
  {
    id: 'ferrari-sf90',
    name: 'Ferrari SF90 Stradale',
    category: 'hyper',
    categoryLabel: 'Hypercar',
    price: '$2,800',
    specs: {
      power: '986 HP',
      engine: '4.0L V8 Hybrid',
      acceleration: '2.5 seconds',
      topSpeed: '340 km/h'
    },
    description: 'A hybrid masterpiece born of Scuderia Ferrari racing heritage. Phenomenal speed, hyper-intelligence traction control, and stunning curves.',
    image: '/assets/ferrari_sf90.png'
  },
  {
    id: 'mercedes-g-wagon',
    name: 'Mercedes G Wagon G63',
    category: 'suv',
    categoryLabel: 'Luxury SUV',
    price: '$1,200',
    specs: {
      power: '577 HP',
      engine: '4.0L Twin-Turbo V8',
      acceleration: '4.5 seconds',
      topSpeed: '220 km/h'
    },
    description: 'The legendary military-grade SUV configured for ultimate high luxury. Commanding road view, bold metallic black angles, and raw exhaust sound.',
    image: '/assets/mercedes_g_wagon.png'
  },
  {
    id: 'bentley-bentayga',
    name: 'Bentley Bentayga',
    category: 'suv',
    categoryLabel: 'Luxury SUV',
    price: '$1,600',
    specs: {
      power: '542 HP',
      engine: '4.0L Twin-Turbo V8',
      acceleration: '4.4 seconds',
      topSpeed: '290 km/h'
    },
    description: 'Elegance redefined. Impeccably tailored leather upholstery, walnut wood finishings, and an effortlessly smooth ride quality.',
    image: '/assets/bentley_bentayga.png'
  }
];

export const Fleet: React.FC = () => {
  const { openModal } = useModal();
  const [filter, setFilter] = useState<'all' | 'hyper' | 'prestige' | 'suv'>('all');

  const filteredCars = FLEET_DATA.filter((car) => {
    if (filter === 'all') return true;
    return car.category === filter;
  });

  return (
    <PageTransition>
      <div className="bg-luxury-black pt-36 pb-28 text-white min-h-screen relative overflow-hidden">
        {/* Background Ambient Spotlights */}
        <div className="absolute top-10 left-10 w-[600px] h-[600px] radial-glow opacity-30 pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] radial-glow opacity-25 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          {/* Banner Section */}
          <div className="text-center mb-20 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center gap-2 text-gold-400 text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em]"
            >
              <Sparkles size={12} /> Exquisite Fleet Collection
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-4xl sm:text-5xl md:text-7xl font-serif font-extrabold tracking-wide"
            >
              The <span className="text-gold-gradient font-light">Sovereign Fleet</span>
            </motion.h1>
            <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-3" />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="text-gray-400 font-light text-xs sm:text-sm max-w-lg mx-auto leading-relaxed px-4 sm:px-0"
            >
              Explore our world-class inventory of high-performance luxury motorcars, serviced and detailed to absolute showroom standards.
            </motion.p>
          </div>

          {/* Filter Navigation */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-20 border-b border-white/5 pb-8">
            {[
              { id: 'all', label: 'All Fleet' },
              { id: 'hyper', label: 'Hypercars' },
              { id: 'prestige', label: 'Prestige' },
              { id: 'suv', label: 'Luxury SUVs' }
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id as any)}
                className={`px-6 py-2.5 rounded text-[10px] sm:text-xs uppercase tracking-widest transition-all duration-400 font-medium cursor-pointer border ${
                  filter === btn.id
                    ? 'bg-gold-500 text-black shadow-lg font-bold border-gold-500 scale-102 shadow-gold-500/20'
                    : 'bg-white/3 hover:bg-white/8 text-gray-400 hover:text-white border-white/5 hover:border-white/10'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Cars Grid */}
          <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <AnimatePresence mode="popLayout">
              {filteredCars.map((car) => (
                <motion.div
                  layout
                  key={car.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-2xl overflow-hidden glassmorphism flex flex-col md:flex-row shadow-2xl border border-white/5 group glassmorphism-gold-hover"
                >
                  {/* Image side */}
                  <div className="md:w-1/2 relative overflow-hidden bg-luxury-gray aspect-[16/11] md:aspect-auto">
                    <span className="absolute top-4 left-4 z-10 text-[9px] uppercase tracking-[0.2em] font-bold text-black bg-gold-500 px-3.5 py-1.5 rounded-sm shadow-md">
                      {car.categoryLabel}
                    </span>
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-1000 ease-out md:absolute md:inset-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-luxury-black via-transparent to-transparent opacity-85" />
                  </div>

                  {/* Info side */}
                  <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div>
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-serif text-2xl text-white tracking-wide group-hover:text-gold-400 transition-colors duration-300">
                          {car.name}
                        </h3>
                      </div>
                      
                      <div className="flex items-center gap-1.5 mb-5">
                        <span className="text-[10px] text-gray-400 font-light block uppercase tracking-wider">Starting Rate</span>
                        <span className="text-xl font-extrabold text-gold-500 tracking-wide">{car.price}</span>
                        <span className="text-[10px] text-gray-400 font-light">/ day</span>
                      </div>

                      <p className="text-xs text-gray-400 font-light leading-relaxed mb-6">
                        {car.description}
                      </p>

                      {/* Specs Details */}
                      <div className="grid grid-cols-2 gap-3 text-[10px] font-light">
                        <div className="bg-white/3 border border-white/5 rounded p-3 flex flex-col transition-colors group-hover:bg-white/5">
                          <span className="text-gold-500/80 uppercase tracking-widest font-medium mb-1">Engine</span>
                          <span className="font-semibold text-white">{car.specs.engine}</span>
                        </div>
                        <div className="bg-white/3 border border-white/5 rounded p-3 flex flex-col transition-colors group-hover:bg-white/5">
                          <span className="text-gold-500/80 uppercase tracking-widest font-medium mb-1">Power Output</span>
                          <span className="font-semibold text-white">{car.specs.power}</span>
                        </div>
                        <div className="bg-white/3 border border-white/5 rounded p-3 flex flex-col transition-colors group-hover:bg-white/5">
                          <span className="text-gold-500/80 uppercase tracking-widest font-medium mb-1">0-100 km/h</span>
                          <span className="font-semibold text-white">{car.specs.acceleration}</span>
                        </div>
                        <div className="bg-white/3 border border-white/5 rounded p-3 flex flex-col transition-colors group-hover:bg-white/5">
                          <span className="text-gold-500/80 uppercase tracking-widest font-medium mb-1">Max Speed</span>
                          <span className="font-semibold text-white">{car.specs.topSpeed}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <button
                        onClick={() => openModal(car.name)}
                        className="w-full bg-gold-btn-gradient text-black font-bold text-xs uppercase tracking-widest py-3.5 px-4 rounded text-center transition-all duration-300 shadow hover:scale-[1.02] cursor-pointer glow-gold-btn"
                      >
                        Request Booking
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};
