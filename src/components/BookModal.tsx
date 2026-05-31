import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Car, User, Mail, Phone, MessageSquare, CheckCircle } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const CARS = [
  'Rolls Royce Phantom',
  'Lamborghini Urus',
  'Ferrari SF90',
  'Mercedes G Wagon',
  'Bentley Bentayga'
];

export const BookModal: React.FC = () => {
  const { isOpen, selectedCar, closeModal } = useModal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    car: '',
    startDate: '',
    endDate: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync selected car from context
  useEffect(() => {
    if (selectedCar) {
      setFormData(prev => ({ ...prev, car: selectedCar }));
    } else {
      setFormData(prev => ({ ...prev, car: '' }));
    }
  }, [selectedCar, isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate luxury API call
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      closeModal();
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        car: '',
        startDate: '',
        endDate: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-black/85 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl glassmorphism p-8 md:p-10 shadow-2xl"
          >
            {/* Gold highlight line at top */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold-300 via-gold-500 to-gold-800" />

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-gold-300 hover:text-gold-100 transition-colors p-1.5 rounded-full hover:bg-white/5"
            >
              <X size={20} />
            </button>

            {/* Content Switch */}
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="booking-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 className="text-3xl font-serif text-gold-gradient mb-2 text-center">
                    Reserve Privilege
                  </h3>
                  <p className="text-sm text-gray-400 text-center mb-8 font-light">
                    Submit details and our concierge will contact you within 15 minutes.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div className="relative">
                      <label className="text-xs uppercase tracking-widest text-gold-500 font-medium block mb-1">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gold-500/60" size={16} />
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Lord/Lady Alexander"
                          className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-gold-500 text-white placeholder-gray-500 transition-all font-light"
                        />
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs uppercase tracking-widest text-gold-500 font-medium block mb-1">Email</label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gold-500/60" size={16} />
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="alexander@lux.com"
                            className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-gold-500 text-white placeholder-gray-500 transition-all font-light"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-xs uppercase tracking-widest text-gold-500 font-medium block mb-1">Phone</label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gold-500/60" size={16} />
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 0199"
                            className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-gold-500 text-white placeholder-gray-500 transition-all font-light"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Car Selection */}
                    <div>
                      <label className="text-xs uppercase tracking-widest text-gold-500 font-medium block mb-1">Select Vehicle</label>
                      <div className="relative">
                        <Car className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gold-500/60" size={16} />
                        <select
                          name="car"
                          required
                          value={formData.car}
                          onChange={handleChange}
                          className="w-full bg-[#121212] border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-gold-500 text-white transition-all font-light appearance-none"
                        >
                          <option value="" disabled className="text-gray-500">Choose your drive...</option>
                          {CARS.map(car => (
                            <option key={car} value={car} className="text-white bg-luxury-gray">
                              {car}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Dates */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs uppercase tracking-widest text-gold-500 font-medium block mb-1">Start Date</label>
                        <div className="relative">
                          <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gold-500/60" size={16} />
                          <input
                            type="date"
                            name="startDate"
                            required
                            value={formData.startDate}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-gold-500 text-white transition-all font-light"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-xs uppercase tracking-widest text-gold-500 font-medium block mb-1">End Date</label>
                        <div className="relative">
                          <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gold-500/60" size={16} />
                          <input
                            type="date"
                            name="endDate"
                            required
                            value={formData.endDate}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-gold-500 text-white transition-all font-light"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="text-xs uppercase tracking-widest text-gold-500 font-medium block mb-1">Special Requirements</label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3.5 top-3 text-gold-500/60" size={16} />
                        <textarea
                          name="message"
                          rows={3}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Any preferences (e.g. personal chauffeur, champagne on arrival)..."
                          className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-gold-500 text-white placeholder-gray-500 transition-all font-light resize-none"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full mt-6 bg-gold-btn-gradient hover:bg-gold-btn-gradient-hover text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg text-sm uppercase tracking-widest hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                    >
                      Request Reservation
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="booking-success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: 360 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 10, delay: 0.1 }}
                  >
                    <CheckCircle className="text-gold-500 w-20 h-20 mb-6" />
                  </motion.div>
                  <h3 className="text-3xl font-serif text-gold-gradient mb-4">
                    Privilege Confirmed
                  </h3>
                  <p className="text-gray-300 max-w-sm font-light">
                    Thank you, <span className="font-semibold text-white">{formData.name}</span>. Your reservation request for the <span className="font-semibold text-white">{formData.car}</span> has been logged. Our elite concierge team will call you shortly.
                  </p>
                  <div className="mt-8 text-xs text-gold-500/60 uppercase tracking-widest animate-pulse">
                    Securing your fleet...
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
