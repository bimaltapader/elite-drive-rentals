import { useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ModalProvider } from './context/ModalContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { BookModal } from './components/BookModal';
import { Loader } from './components/Loader';
import { ParticlesBackground } from './components/ParticlesBackground';
import { Home } from './pages/Home';
import { Fleet } from './pages/Fleet';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { ScrollToTop } from './components/ScrollToTop';

// Subcomponent to allow access to useLocation() hook inside Router context
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/fleet" element={<Fleet />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ModalProvider>
      {isLoading ? (
        <Loader onComplete={() => setIsLoading(false)} />
      ) : (
        <Router>
          <ScrollToTop />
          {/* Floating Gold Particles Background */}
          <ParticlesBackground />
          
          <div className="flex flex-col min-h-screen bg-luxury-black text-slate-100 selection:bg-gold-500 selection:text-black relative z-10">
            <Navbar />
            <main className="flex-grow">
              <AnimatedRoutes />
            </main>
            <Footer />
            <WhatsAppButton />
            <BookModal />
          </div>
        </Router>
      )}
    </ModalProvider>
  );
}

export default App;
