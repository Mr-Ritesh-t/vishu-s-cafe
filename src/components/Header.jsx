import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { cartCount, setIsCartOpen } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="absolute top-0 w-full z-50 pt-4 px-4 lg:px-8">
      <div className="flex items-center justify-between">
        
        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden flex items-center cursor-pointer p-1" onClick={() => setIsMobileMenuOpen(true)}>
          <Menu className="text-white w-7 h-7 hover:text-accent transition-colors" />
        </div>

        {/* Logo */}
        <div className="flex justify-center items-center">
          <img src={logo} alt="Vishu's Cafe" className="h-[72px] md:h-[100px] w-auto object-contain drop-shadow-lg" />
        </div>

        {/* Mobile Cart Icon */}
        <div 
          className="lg:hidden relative cursor-pointer"
          onClick={() => setIsCartOpen(true)}
        >
          <ShoppingCart className="text-white w-6 h-6" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold border border-dark">
              {cartCount}
            </span>
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 bg-black/20 backdrop-blur-md px-8 py-3 rounded-full border border-white/10 shadow-xl">
          {['Home', 'Menu', 'Offers', 'Reviews'].map((item) => (
            <button 
              key={item} 
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-white hover:text-accent font-medium tracking-wide transition-colors text-sm uppercase"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <div 
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white/10 p-2.5 rounded-full cursor-pointer hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10"
          >
            <Search className="text-white w-5 h-5" />
          </div>
          <div 
            className="bg-primary p-2.5 rounded-full relative cursor-pointer shadow-[0_4px_14px_0_rgba(227,50,37,0.39)] hover:scale-105 transition-transform"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingCart className="text-white w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-white text-primary text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold border border-primary">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Slide-out Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-[100] lg:hidden backdrop-blur-sm"
            />
            
            {/* Slide-out Drawer */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 left-0 bottom-0 w-[75%] max-w-sm bg-[#111111] z-[101] lg:hidden flex flex-col shadow-2xl border-r border-white/10"
            >
              <div className="p-6 flex justify-between items-center border-b border-white/10">
                <img src={logo} alt="Vishu's Cafe" className="h-10 w-auto object-contain" />
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-400 hover:text-white transition-colors bg-white/5 p-1.5 rounded-full">
                  <X size={20} />
                </button>
              </div>
              
              <nav className="flex flex-col p-6 gap-6 flex-1">
                {['Home', 'Menu', 'Offers', 'Reviews'].map((item) => (
                  <button 
                    key={item} 
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      scrollToSection(item.toLowerCase());
                    }}
                    className="text-white text-xl font-bold text-left hover:text-accent transition-colors tracking-wide uppercase"
                  >
                    {item}
                  </button>
                ))}
              </nav>

              <div className="p-6 border-t border-white/10 flex flex-col gap-1">
                <p className="text-gray-400 text-[10px] tracking-wider uppercase font-bold">Call us for orders</p>
                <p className="text-accent font-bold text-lg">+91 93250 12345</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
