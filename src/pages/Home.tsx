import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Award, Clock, Star, MapPin } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';

const FEATURED_CARS = [
  {
    name: 'Rolls Royce Phantom',
    image: '/assets/rolls_royce_phantom.png',
    price: '$2,200',
    specs: { power: '563 HP', speed: '250 km/h', zeroTo100: '5.3s' },
    tag: 'Prestige'
  },
  {
    name: 'Ferrari SF90',
    image: '/assets/ferrari_sf90.png',
    price: '$2,800',
    specs: { power: '986 HP', speed: '340 km/h', zeroTo100: '2.5s' },
    tag: 'Hypercar'
  },
  {
    name: 'Lamborghini Urus',
    image: '/assets/lamborghini_urus.png',
    price: '$1,500',
    specs: { power: '650 HP', speed: '305 km/h', zeroTo100: '3.6s' },
    tag: 'Super SUV'
  }
];

const TESTIMONIALS = [
  {
    name: 'Sir Harrison C.',
    role: 'Venture Capitalist',
    quote: 'The service is truly unparalleled. The Phantom was delivered directly to my private jet at Heathrow. Impeccable condition, bespoke setup.',
    rating: 5
  },
  {
    name: 'Alessandra V.',
    role: 'High Fashion Designer',
    quote: 'Elite Drive provides more than rentals—they provide luxury statements. Driving the SF90 through Milan was a sheer masterpiece of power.',
    rating: 5
  },
  {
    name: 'Marcus K.',
    role: 'Tech Founder',
    quote: 'From booking to concierge drop-off, the experience was seamless. Having a dedicated concierge officer available 24/7 is a game changer.',
    rating: 5
  }
];

export const Home: React.FC = () => {
  const { openModal } = useModal();

  return (
    <PageTransition>
      <div className="bg-luxury-black text-white overflow-hidden relative">
        
        {/* Fullscreen Hero Section */}
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
          {/* Cinematic Background Video with Zoom/Scale Animation */}
          <motion.div
            initial={{ scale: 1.15 }}
            animate={{ scale: 1.03 }}
            transition={{ duration: 10, ease: 'easeOut' }}
            className="absolute inset-0 z-0"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/assets/hero_bg.png"
              className="w-full h-full object-cover"
            >
              <source
                src="/assets/hero-video.mp4"
                type="video/mp4"
              />
              <source
                src="/assets/hero_video.mp4"
                type="video/mp4"
              />
              <source
                src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054ba208d1c6833fe619965b7501a35&profile_id=139&oauth2_token_id=57447761"
                type="video/mp4"
              />
              <source
                src="https://assets.mixkit.co/videos/preview/mixkit-sports-car-driving-in-the-night-40243-large.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            {/* Dark read overlays for text readability */}
            <div className="absolute inset-0 bg-black/75 backdrop-blur-[1px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-black/80" />
            <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/90 via-transparent to-luxury-black/50" />
          </motion.div>

          {/* Ambient Background Lights */}
          <div className="absolute bottom-10 left-10 w-96 h-96 radial-glow pointer-events-none opacity-40" />
          <div className="absolute top-10 right-10 w-[500px] h-[500px] radial-glow pointer-events-none opacity-20" />

          {/* Hero Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 text-center flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <span className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-gold-400 font-semibold inline-block bg-white/5 px-4 py-1.5 rounded-full border border-white/5">
                THE PRIVILEGE OF THE SOVEREIGN
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif font-extrabold tracking-wider leading-[1.1] text-white text-shadow-luxury">
                Drive <span className="text-gold-gradient font-light block sm:inline">Extraordinary</span>
              </h1>
              
              {/* Premium Subtitle */}
              <span className="text-xs sm:text-sm md:text-base font-sans tracking-[0.25em] text-gold-200 uppercase font-semibold block pt-2">
                Luxury & Exotic Car Rentals
              </span>

              <p className="text-xs sm:text-sm md:text-base max-w-xl mx-auto text-gray-300 font-light leading-relaxed mb-10 px-4 sm:px-0 pt-2">
                Indulge in the luxury of renting the world's most coveted automobiles. Unmatched heritage, peak performance, and bespoke concierge delivery.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full sm:w-auto px-6 sm:px-0 pt-8"
            >
              <Link
                to="/fleet"
                className="w-full sm:w-auto px-10 py-4.5 font-sans text-xs uppercase tracking-widest font-bold border border-gold-500/30 hover:border-gold-500 text-gold-500 hover:text-black hover:bg-gold-btn-gradient rounded bg-white/3 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.03] active:scale-[0.97]"
              >
                Explore Fleet <ArrowRight size={13} />
              </Link>
              <button
                onClick={() => openModal('')}
                className="w-full sm:w-auto bg-gold-btn-gradient text-black px-12 py-4.5 font-sans text-xs uppercase tracking-widest font-bold rounded shadow-2xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] cursor-pointer glow-gold-btn"
              >
                Book Now
              </button>
            </motion.div>
          </div>

          {/* Scroll down indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-55">
            <span className="text-[9px] uppercase tracking-[0.25em] font-medium text-gold-500 mb-2.5">Scroll to discover</span>
            <div className="w-[1px] h-10 bg-gradient-to-b from-gold-500 to-transparent" />
          </div>
        </section>

        {/* Featured Vehicles Section */}
        <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative">
          {/* Backlight */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] radial-glow pointer-events-none opacity-30 z-0" />

          <div className="text-center mb-24 space-y-4 relative z-10">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold bg-gold-500/5 border border-gold-500/10 px-3.5 py-1 rounded-sm">
              CURATED COLLECTION
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-wide">
              Featured Sovereign Fleet
            </h2>
            <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-2" />
            <p className="text-xs sm:text-sm text-gray-400 font-light max-w-md mx-auto leading-relaxed">
              A small taste of our exceptional models meticulously configured for the discerning driver.
            </p>
          </div>

          {/* Vehicles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {FEATURED_CARS.map((car, index) => (
              <motion.div
                key={car.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.9, delay: index * 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-xl overflow-hidden glassmorphism flex flex-col justify-between glassmorphism-gold-hover group"
              >
                {/* Image Container with Tag */}
                <div className="relative overflow-hidden aspect-[16/10] bg-luxury-gray">
                  <span className="absolute top-4 left-4 z-10 text-[9px] uppercase tracking-[0.2em] font-semibold text-black bg-gold-500 px-3 py-1 rounded-sm shadow-md">
                    {car.tag}
                  </span>
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent opacity-85" />
                </div>

                {/* Details */}
                <div className="p-6 sm:p-8 space-y-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <h3 className="font-serif text-xl sm:text-2xl text-white group-hover:text-gold-400 transition-colors">
                        {car.name}
                      </h3>
                      <div className="text-right">
                        <span className="text-[10px] text-gray-400 font-light block uppercase tracking-wider">Rate</span>
                        <span className="text-lg font-bold text-gold-500">{car.price}</span>
                      </div>
                    </div>
                    <div className="h-[1.5px] bg-gradient-to-r from-gold-500/20 via-transparent to-transparent my-4" />

                    {/* Specs Grid */}
                    <div className="grid grid-cols-3 gap-2.5 text-center">
                      <div className="bg-white/3 border border-white/5 rounded p-3 transition-colors group-hover:bg-white/5">
                        <span className="text-[9px] text-gray-400 uppercase tracking-widest block font-light mb-1">Power</span>
                        <span className="text-xs font-semibold text-white">{car.specs.power}</span>
                      </div>
                      <div className="bg-white/3 border border-white/5 rounded p-3 transition-colors group-hover:bg-white/5">
                        <span className="text-[9px] text-gray-400 uppercase tracking-widest block font-light mb-1">0-100</span>
                        <span className="text-xs font-semibold text-white">{car.specs.zeroTo100}</span>
                      </div>
                      <div className="bg-white/3 border border-white/5 rounded p-3 transition-colors group-hover:bg-white/5">
                        <span className="text-[9px] text-gray-400 uppercase tracking-widest block font-light mb-1">Speed</span>
                        <span className="text-xs font-semibold text-white">{car.specs.speed}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3">
                    <button
                      onClick={() => openModal(car.name)}
                      className="w-full bg-transparent hover:bg-gold-btn-gradient text-gold-500 hover:text-black font-sans text-xs uppercase tracking-widest font-semibold py-3.5 border border-gold-500/20 hover:border-gold-500 rounded transition-all duration-300 cursor-pointer hover:shadow-lg"
                    >
                      Request Booking
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All CTA */}
          <div className="text-center mt-16 relative z-10">
            <Link
              to="/fleet"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold-500 hover:text-gold-300 font-bold transition-colors group"
            >
              View Complete Luxury Fleet{' '}
              <ArrowRight size={13} className="group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-32 bg-luxury-dark border-t border-b border-white/5 relative">
          <div className="absolute right-0 top-1/4 w-[500px] h-[500px] radial-glow pointer-events-none opacity-20" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Info */}
            <div className="space-y-10">
              <div className="space-y-4">
                <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold bg-white/5 px-3 py-1 rounded-sm border border-white/5 inline-block">
                  ELITE STANDARDS
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
                  Uncompromising Luxury. Extraordinary Service.
                </h2>
                <div className="w-12 h-[1px] bg-gold-500" />
              </div>
              <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                We cater exclusively to individuals who demand excellence. Our commitment to client service is matched only by the perfection of our vehicles.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: <Award className="text-gold-500" size={24} />,
                    title: 'Private Runway Delivery',
                    desc: 'We synchronize directly with your flight coordinates, delivering your vehicle straight to the hangar.'
                  },
                  {
                    icon: <ShieldCheck className="text-gold-500" size={24} />,
                    title: 'Concierge Conciliation',
                    desc: 'Every booking features a dedicated client concierge officer who accommodates custom requests and preferences.'
                  },
                  {
                    icon: <Clock className="text-gold-500" size={24} />,
                    title: 'Immaculate Fleet Presentation',
                    desc: 'Our models undergo rigorous multipoint inspections and full detailing before handover, ensuring perfection.'
                  }
                ].map((value) => (
                  <div key={value.title} className="flex gap-5 group">
                    <div className="w-14 h-14 rounded-lg bg-gold-500/5 border border-gold-500/15 group-hover:border-gold-500/40 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-serif text-lg text-white font-medium mb-1.5 group-hover:text-gold-400 transition-colors">
                        {value.title}
                      </h4>
                      <p className="text-xs text-gray-400 font-light leading-relaxed">
                        {value.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Showcase (Glassmorphic Mockup) */}
            <div className="relative group">
              <div className="absolute -top-12 -left-12 w-60 h-60 bg-gold-500/5 blur-[90px] pointer-events-none" />
              <div className="absolute -bottom-12 -right-12 w-60 h-60 bg-gold-500/5 blur-[90px] pointer-events-none" />

              <div className="rounded-xl overflow-hidden glassmorphism p-2.5 border border-white/10 shadow-2xl relative">
                {/* Gold glowing frame highlight */}
                <div className="absolute inset-0 border border-gold-500/10 group-hover:border-gold-500/30 transition-colors duration-700 rounded-xl pointer-events-none" />
                <img
                  src="/assets/mercedes_g_wagon.png"
                  alt="Luxury Mercedes G-Wagon"
                  className="w-full h-full object-cover rounded-lg shadow-2xl filter brightness-[0.85] group-hover:scale-101 transition-transform duration-700"
                />
              </div>

              {/* Overlapping Info Card */}
              <div className="absolute bottom-8 -left-8 max-w-[250px] glassmorphism p-6 rounded-lg border border-gold-500/25 shadow-2xl hidden sm:block animate-float">
                <MapPin className="text-gold-500 mb-2.5" size={22} />
                <h5 className="font-serif text-sm text-white font-bold mb-1.5">Global Coverage</h5>
                <p className="text-[10px] text-gray-400 font-light leading-relaxed">
                  Operating out of London, Monaco, Geneva, Beverly Hills, and Dubai.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative">
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] radial-glow pointer-events-none opacity-20" />

          <div className="text-center mb-24 space-y-4 relative z-10">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold bg-gold-500/5 border border-gold-500/10 px-3.5 py-1 rounded-sm">
              TESTIMONIALS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-wide">
              Client Appraisals
            </h2>
            <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-2" />
            <p className="text-xs sm:text-sm text-gray-400 font-light max-w-sm mx-auto leading-relaxed">
              Read comments from our elite client base about their driving experiences.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {TESTIMONIALS.map((t, index) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="p-8 rounded-xl glassmorphism border border-white/5 flex flex-col justify-between glassmorphism-gold-hover group"
              >
                <div className="space-y-5">
                  {/* Rating */}
                  <div className="flex space-x-1.5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={13} className="fill-gold-500 text-gold-500" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 italic font-light leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-10 pt-5 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-base text-white group-hover:text-gold-400 transition-colors">{t.name}</h4>
                    <span className="text-[9px] text-gold-500 uppercase tracking-widest block font-light mt-0.5">
                      {t.role}
                    </span>
                  </div>
                  <span className="text-[10px] text-gold-500/25 font-serif font-bold tracking-widest">VERIFIED</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="relative py-36 border-t border-white/5 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center scale-102"
            style={{ backgroundImage: `url('/assets/hero_bg.png')`, filter: 'brightness(0.12)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-luxury-black opacity-90" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-gold-400 font-semibold bg-white/5 border border-white/5 px-4 py-1.5 rounded-full">
              BEGIN THE JOURNEY
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-white max-w-3xl mx-auto leading-tight text-shadow-luxury">
              Are You Ready To Drive <span className="text-gold-gradient font-light block sm:inline">Extraordinary?</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-300 font-light max-w-xl mx-auto leading-relaxed">
              Reserve your luxury vehicle today. Allow our concierge officers to coordinate all logistics. Your pristine vehicle awaits your commands.
            </p>
            <div className="pt-5">
              <button
                onClick={() => openModal('')}
                className="bg-gold-btn-gradient text-black px-12 py-5 font-sans text-xs uppercase tracking-widest font-bold rounded shadow-2xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] cursor-pointer glow-gold-btn"
              >
                Contact Luxury Concierge
              </button>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};
