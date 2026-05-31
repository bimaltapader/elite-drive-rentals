import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Shield } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

const CARS = [
  'Rolls Royce Phantom',
  'Lamborghini Urus',
  'Ferrari SF90',
  'Mercedes G Wagon',
  'Bentley Bentayga'
];

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    car: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        car: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <PageTransition>
      <div className="bg-luxury-black pt-36 pb-28 text-white min-h-screen relative overflow-hidden">
        {/* Background Ambient Spotlights */}
        <div className="absolute top-10 left-10 w-[600px] h-[600px] radial-glow opacity-30 pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] radial-glow opacity-25 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          {/* Banner Section */}
          <div className="text-center mb-20 space-y-4">
            <span className="text-gold-500 text-xs font-semibold uppercase tracking-[0.25em] bg-gold-500/5 px-3.5 py-1 rounded-sm border border-gold-500/10">
              Concierge Relations
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-extrabold tracking-wide">
              Contact <span className="text-gold-gradient font-light">Concierge Desk</span>
            </h1>
            <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-3" />
            <p className="text-gray-400 font-light text-xs sm:text-sm max-w-lg mx-auto leading-relaxed px-4 sm:px-0">
              Reach out to coordinate custom logistics, long-term leasing, or events.
            </p>
          </div>

          {/* Contact Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            {/* Contact Details Card */}
            <div className="lg:col-span-1 space-y-8">
              <div className="p-8 rounded-xl glassmorphism border border-white/5 space-y-8 shadow-2xl">
                <h3 className="font-serif text-2xl text-white tracking-wide border-b border-white/5 pb-4">
                  Headquarters
                </h3>

                <ul className="space-y-6">
                  <li className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-gold-500/5 border border-gold-500/15 group-hover:border-gold-500/40 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                      <MapPin className="text-gold-500" size={18} />
                    </div>
                    <div>
                      <h5 className="font-serif text-sm font-semibold text-white group-hover:text-gold-400 transition-colors">Mayfair Office</h5>
                      <p className="text-xs text-gray-400 font-light mt-1.5 leading-relaxed">
                        71 Mayfair St, London, W1J 8DJ, United Kingdom
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-gold-500/5 border border-gold-500/15 group-hover:border-gold-500/40 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                      <Phone className="text-gold-500" size={18} />
                    </div>
                    <div>
                      <h5 className="font-serif text-sm font-semibold text-white group-hover:text-gold-400 transition-colors">Direct Line</h5>
                      <p className="text-xs text-gray-400 font-light mt-1.5">+1 (555) 0199</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-gold-500/5 border border-gold-500/15 group-hover:border-gold-500/40 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                      <Mail className="text-gold-500" size={18} />
                    </div>
                    <div>
                      <h5 className="font-serif text-sm font-semibold text-white group-hover:text-gold-400 transition-colors">Electronic Mail</h5>
                      <p className="text-xs text-gray-400 font-light mt-1.5">concierge@elitedrive.luxury</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-gold-500/5 border border-gold-500/15 group-hover:border-gold-500/40 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                      <Clock className="text-gold-500" size={18} />
                    </div>
                    <div>
                      <h5 className="font-serif text-sm font-semibold text-white group-hover:text-gold-400 transition-colors">Concierge Hours</h5>
                      <p className="text-xs text-gray-400 font-light mt-1.5">24 Hours / 7 Days a week</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Privilege Note */}
              <div className="p-6 rounded-xl glassmorphism border border-gold-500/15 shadow-lg flex gap-4">
                <Shield className="text-gold-500 flex-shrink-0 mt-0.5" size={24} />
                <div>
                  <h4 className="font-serif text-sm text-gold-500 font-bold mb-1.5">Elite Privacy Guaranteed</h4>
                  <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                    We assign a secure, private key protocol to sensitive client transactions. NDA agreements are verified on first signature.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 rounded-xl glassmorphism border border-white/5 p-8 md:p-10 shadow-2xl relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form-fields"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className="font-serif text-2xl md:text-3xl text-gold-gradient mb-8">
                      Concierge Inquiry Form
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="text-xs uppercase tracking-widest text-gold-500 font-semibold block mb-2.5">Name</label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Lord Alexander"
                            className="w-full bg-white/5 border border-white/10 rounded-lg py-3.5 px-4 text-sm focus:outline-none focus:border-gold-500/80 focus:ring-1 focus:ring-gold-500/20 focus:shadow-[0_0_15px_rgba(212,175,55,0.15)] text-white placeholder-gray-500 transition-all font-light"
                          />
                        </div>
                        <div>
                          <label className="text-xs uppercase tracking-widest text-gold-500 font-semibold block mb-2.5">Email</label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="alexander@lux.com"
                            className="w-full bg-white/5 border border-white/10 rounded-lg py-3.5 px-4 text-sm focus:outline-none focus:border-gold-500/80 focus:ring-1 focus:ring-gold-500/20 focus:shadow-[0_0_15px_rgba(212,175,55,0.15)] text-white placeholder-gray-500 transition-all font-light"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="text-xs uppercase tracking-widest text-gold-500 font-semibold block mb-2.5">Phone</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 0199"
                            className="w-full bg-white/5 border border-white/10 rounded-lg py-3.5 px-4 text-sm focus:outline-none focus:border-gold-500/80 focus:ring-1 focus:ring-gold-500/20 focus:shadow-[0_0_15px_rgba(212,175,55,0.15)] text-white placeholder-gray-500 transition-all font-light"
                          />
                        </div>
                        <div>
                          <label className="text-xs uppercase tracking-widest text-gold-500 font-semibold block mb-2.5">Preferred Vehicle</label>
                          <select
                            name="car"
                            value={formData.car}
                            onChange={handleChange}
                            className="w-full bg-[#121212] border border-white/10 rounded-lg py-3.5 px-4 text-sm focus:outline-none focus:border-gold-500/80 focus:ring-1 focus:ring-gold-500/20 focus:shadow-[0_0_15px_rgba(212,175,55,0.15)] text-white transition-all font-light appearance-none"
                          >
                            <option value="">General Inquiry / None</option>
                            {CARS.map(car => (
                              <option key={car} value={car} className="text-white bg-luxury-gray">
                                {car}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="text-xs uppercase tracking-widest text-gold-500 font-semibold block mb-2.5">Subject</label>
                        <input
                          type="text"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Logistics coordination request..."
                          className="w-full bg-white/5 border border-white/10 rounded-lg py-3.5 px-4 text-sm focus:outline-none focus:border-gold-500/80 focus:ring-1 focus:ring-gold-500/20 focus:shadow-[0_0_15px_rgba(212,175,55,0.15)] text-white placeholder-gray-500 transition-all font-light"
                        />
                      </div>

                      <div>
                        <label className="text-xs uppercase tracking-widest text-gold-500 font-semibold block mb-2.5">Detailed Message</label>
                        <textarea
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Please describe your requirements in detail..."
                          className="w-full bg-white/5 border border-white/10 rounded-lg py-3.5 px-4 text-sm focus:outline-none focus:border-gold-500/80 focus:ring-1 focus:ring-gold-500/20 focus:shadow-[0_0_15px_rgba(212,175,55,0.15)] text-white placeholder-gray-500 transition-all font-light resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="bg-gold-btn-gradient text-black font-bold py-4 px-9 rounded shadow-lg text-xs uppercase tracking-widest transition-transform hover:scale-[1.01] active:scale-[0.99] flex items-center gap-2.5 cursor-pointer glow-gold-btn"
                      >
                        Send Message <Send size={12} />
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="submit-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-20 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, rotate: 360 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                    >
                      <CheckCircle className="text-gold-500 w-16 h-16 mb-6" />
                    </motion.div>
                    <h3 className="font-serif text-3xl text-gold-gradient mb-4">
                      Inquiry Handed Over
                    </h3>
                    <p className="text-gray-300 max-w-md font-light">
                      Thank you. Your message has been routed to our senior concierge desk. An officer will reply shortly to <span className="font-semibold text-white">{formData.email}</span>.
                    </p>
                    <div className="mt-8 text-xs text-gold-500/60 uppercase tracking-widest animate-pulse">
                      Connecting networks...
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="rounded-xl overflow-hidden border border-white/5 shadow-2xl relative aspect-video md:aspect-[21/9] group">
            {/* Custom Styled Premium Map Graphic */}
            <div className="absolute inset-0 bg-[#060606] flex items-center justify-center p-6 text-center">
              {/* Minimal line grid background */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.015)_1px,transparent_1px)] bg-[size:50px_50px]" />
              
              {/* Futuristic target reticle */}
              <div className="relative border border-gold-500/15 rounded-full w-60 h-60 flex items-center justify-center transition-all duration-700 group-hover:border-gold-500/25">
                <div className="border border-gold-500/10 rounded-full w-40 h-40 flex items-center justify-center">
                  {/* Active Gold Dot */}
                  <div className="relative">
                    <span className="absolute -inset-3 bg-gold-500/30 rounded-full animate-ping" />
                    <div className="w-4.5 h-4.5 rounded-full bg-gold-500 shadow-lg border border-white shadow-gold-500/40" />
                  </div>
                </div>
                <span className="absolute top-2 right-2 text-[9px] font-mono text-gold-500/35">51.5074° N, 0.1278° W</span>
                <span className="absolute bottom-2 left-2 text-[9px] font-mono text-gold-500/35">LONDON, MAYFAIR HQ</span>
              </div>

              <div className="absolute z-10 bottom-6 right-6 glassmorphism p-5 rounded border border-gold-500/20 text-left max-w-xs shadow-xl hidden md:block">
                <h5 className="font-serif text-xs text-white font-bold mb-1.5">Global HQ Coordinates</h5>
                <p className="text-[10px] text-gray-400 font-light leading-relaxed">
                  Elite Drive Limited,<br />71 Mayfair St, London, W1J 8DJ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
