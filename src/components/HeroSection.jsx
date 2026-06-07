import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaSearch } from 'react-icons/fa';
import { Plus } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useCart } from '../context/CartContext';
import { menuData } from '../data/menuData';
import heroBg from '../assets/hero-bg.png';

export default function HeroSection() {
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const desktopSearchRef = useRef(null);
  const mobileSearchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (desktopSearchRef.current && !desktopSearchRef.current.contains(event.target) &&
          mobileSearchRef.current && !mobileSearchRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setSearchResults([]);
      setShowDropdown(false);
      return;
    }

    const allItems = menuData.flatMap(category => category.items);
    const results = allItems.filter(item => 
      item.name.toLowerCase().includes(query.toLowerCase()) || 
      (item.description && item.description.toLowerCase().includes(query.toLowerCase()))
    );
    
    setSearchResults(results.slice(0, 5));
    setShowDropdown(true);
  };

  const handleAddToCart = (item) => {
    if (item.prices) {
      const size = item.prices['Medium'] ? 'Medium' : Object.keys(item.prices)[0];
      addToCart({ id: item.id, name: item.name, price: item.prices[size], size: size });
    } else {
      addToCart({ id: item.id, name: item.name, price: item.price });
    }
    setSearchQuery('');
    setShowDropdown(false);
  };

  const SearchDropdown = () => (
    <AnimatePresence>
      {showDropdown && searchResults.length > 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
        >
          {searchResults.map((item) => (
            <div key={item.id} className="flex items-center gap-3 p-3 hover:bg-orange-50 border-b border-gray-50 cursor-pointer transition-colors" onClick={() => handleAddToCart(item)}>
              <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-gray-800 text-[13px] font-bold truncate">{item.name}</h4>
                <p className="text-primary text-xs font-bold">₹{item.price || item.prices?.Medium || Object.values(item.prices || {})[0]}</p>
              </div>
              <button className="bg-orange-100 text-primary w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors">
                <Plus size={14} />
              </button>
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <section className="relative pt-28 pb-16 md:pt-32 md:pb-24 px-4 lg:px-8 min-h-[600px] flex items-center text-white overflow-visible">
      {/* Exact Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-bottom z-0"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>

      {/* Text readability gradient - Dark at top/left, transparent at bottom so brush strokes stay bright */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-transparent z-0"></div>

      <div className="w-[95%] mx-auto flex flex-col lg:flex-row items-center justify-between z-30 relative">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 flex flex-col items-center lg:items-start pt-1 w-full"
        >
          <div className="flex items-baseline gap-2 mb-2 hidden lg:flex">
            <span className="font-cursive text-4xl text-accent transform -rotate-6 origin-bottom-left inline-block">Welcome to</span>
          </div>
          <h2 className="hidden lg:block text-5xl sm:text-6xl md:text-8xl font-black mb-4 leading-none text-accent tracking-tighter" style={{ textShadow: '2px 2px 0px #000, -2px -2px 0px #000, 2px -2px 0px #000, -2px 2px 0px #000' }}>
            VISHU'S<br/>CAFE
          </h2>
          
          <h3 className="text-[18vw] sm:text-7xl font-cursive font-bold mb-4 flex flex-col items-center lg:items-start gap-0 lg:hidden text-white leading-[0.75] mt-2 tracking-tighter whitespace-nowrap">
            <span className="drop-shadow-2xl" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.9), 0px 0px 20px rgba(0,0,0,0.6)' }}>Good Food.</span>
            <span className="text-accent drop-shadow-2xl transform -rotate-3 origin-bottom-left" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.9), 0px 0px 20px rgba(0,0,0,0.6)' }}>Great Mood.</span>
          </h3>

          <h3 className="hidden lg:flex text-2xl font-bold mb-4 items-center gap-2">
            Good Food. <span className="text-primary">Great Mood.</span>
          </h3>
          
          <div className="text-white lg:text-gray-300 mb-8 font-semibold text-sm lg:text-sm flex flex-col lg:flex-row lg:items-center items-center lg:items-start gap-1 lg:gap-2 tracking-wide drop-shadow-md">
             <div className="flex gap-2">Pizza <span className="text-accent">•</span> Burgers <span className="text-accent">•</span> Momos</div>
             <div className="flex gap-2">Shakes <span className="text-accent">•</span> Coffee & More</div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto mt-2">
            {/* Desktop buttons */}
            <button 
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              className="hidden lg:flex bg-accent text-dark font-bold text-sm py-3 px-6 rounded-full hover:scale-105 transition-transform justify-center items-center gap-2"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
              Explore Menu
            </button>
            <div ref={desktopSearchRef} className="hidden lg:flex bg-white rounded-full items-center pl-5 pr-1.5 py-1.5 shadow-[0_4px_14px_0_rgba(227,50,37,0.39)] flex-1 max-w-sm relative">
              <input 
                type="text" 
                placeholder="Search your favorite food..." 
                className="bg-transparent border-none outline-none text-gray-800 text-sm w-full"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                onFocus={() => { if (searchQuery.trim()) setShowDropdown(true); }}
              />
              <button 
                onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary text-white p-2.5 rounded-full hover:scale-105 transition-transform ml-2"
              >
                <FaSearch size={16} />
              </button>
              <SearchDropdown />
            </div>
            
            {/* Mobile buttons */}
            <div className="lg:hidden absolute bottom-28 left-1/2 -translate-x-1/2 flex items-center justify-between gap-3 w-[90%] max-w-[340px] z-50">
               <div ref={mobileSearchRef} className="bg-white rounded-full flex items-center pl-4 pr-1 py-1 shadow-lg flex-1 relative">
                 <input 
                   type="text" 
                   placeholder="Search food..." 
                   className="bg-transparent border-none outline-none text-gray-800 text-[13px] w-full"
                   value={searchQuery}
                   onChange={(e) => handleSearch(e.target.value)}
                   onFocus={() => { if (searchQuery.trim()) setShowDropdown(true); }}
                 />
                 <button 
                   onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                   className="bg-primary text-white p-2 rounded-full hover:scale-105 transition-transform ml-2"
                 >
                   <FaSearch size={14} />
                 </button>
                 <SearchDropdown />
               </div>
            </div>
          </div>
        </motion.div>

        {/* Right Content - Empty, just holding the stamp */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="lg:w-1/2 relative mt-12 lg:mt-0 flex justify-center lg:justify-end h-64 lg:h-[400px]"
        >
          {/* Stamp placed over the background food image */}
          <div className="absolute top-10 right-0 lg:-right-4 w-24 h-24 rounded-full border border-dashed border-white flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm rotate-12 shadow-2xl hidden lg:flex">
             <span className="text-[10px] uppercase tracking-widest text-white mt-1">Real Taste</span>
             <span className="text-primary text-lg">♥</span>
             <span className="text-[10px] uppercase tracking-widest text-white mb-1">Real Food</span>
          </div>

          
        </motion.div>
      </div>

      {/* Floating WhatsApp bottom right */}
      <div className="absolute bottom-6 right-6 lg:right-12 bg-white rounded-full py-2 px-4 lg:flex items-center gap-2 shadow-lg cursor-pointer hover:bg-gray-50 transition-colors z-20 hidden">
        <div className="bg-green-500 rounded-full p-1">
          <FaWhatsapp className="text-white" size={14} />
        </div>
        <span className="text-green-600 font-bold text-xs">Order on WhatsApp</span>
      </div>

    </section>
  );
}
