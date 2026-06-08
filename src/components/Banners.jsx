import { motion } from 'framer-motion';
import { FaMotorcycle } from 'react-icons/fa';
import { ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Banners() {
  const { addToCart } = useCart();

  const specialPizza = {
    id: 101,
    name: 'Margherita Pizza',
    price: '129',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=400&auto=format&fit=crop'
  };

  return (
    <section className="flex flex-col lg:flex-row gap-4 pt-8">
      {/* Today's Special Banner Wrapper */}
      <div className="flex-1 lg:flex-[1.5]">
        
        {/* Mobile Version - Matches Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:hidden w-full h-[120px] bg-[#111111] rounded-2xl relative overflow-hidden flex shadow-lg border border-gray-800"
        >
          {/* Left Black Section */}
          <div className="w-[50%] p-4 flex flex-col justify-center z-10">
            <span className="text-white text-[10px] font-bold tracking-widest uppercase mb-0.5">Today's</span>
            <h3 className="text-accent text-2xl font-black leading-none mb-1 drop-shadow-md">SPECIAL</h3>
            <p className="text-gray-200 text-[11px] mb-1 font-medium">Margherita Pizza</p>
            <div className="flex items-center gap-1.5">
              <span className="text-gray-500 text-[10px] line-through">₹149</span>
              <span className="text-accent font-black text-[13px]">₹129</span>
            </div>
          </div>

          {/* Right Slanted Orange Section */}
          <div className="absolute right-0 top-0 bottom-0 w-[60%] overflow-hidden rounded-r-2xl pointer-events-none">
            {/* The slanted background */}
            <div className="absolute inset-0 bg-accent transform -skew-x-[20deg] translate-x-8 origin-top-left"></div>
            
            {/* Content Container */}
            <div className="relative h-full w-full pointer-events-auto">
              
              {/* Pizza Image over the slant intersection */}
              <img 
                src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=400&auto=format&fit=crop" 
                alt="Pizza" 
                className="w-[100px] h-[100px] object-cover rounded-full absolute -left-10 top-1/2 -translate-y-1/2 drop-shadow-2xl border-2 border-[#111111]"
              />
              
              {/* 13% OFF Badge */}
              <div className="w-11 h-11 bg-black rounded-full text-white flex flex-col items-center justify-center absolute left-8 top-1.5 shadow-xl border border-white/10 rotate-12">
                <span className="text-[13px] font-black leading-none tracking-tighter">13%</span>
                <span className="text-[8px] font-bold text-accent">OFF</span>
              </div>
              
              {/* Order Now Button */}
              <button 
                onClick={() => addToCart(specialPizza)}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5 active:scale-95 transition-transform"
              >
                <span className="text-dark font-bold text-[10px]">Order Now</span>
                <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center text-white">
                  <ChevronRight size={12} strokeWidth={3} />
                </div>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Desktop Version - Original */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="hidden lg:flex w-full h-full bg-[#E33225] rounded-xl p-6 relative overflow-hidden items-center justify-between shadow-sm"
        >
          <div className="z-10 flex flex-col items-start w-2/3">
            <h3 className="text-white font-black text-2xl lg:text-3xl leading-none mb-1 flex items-start gap-2 relative">
              <div className="flex flex-col">
                <span>TODAY'S</span>
                <span>SPECIAL</span>
              </div>
              {/* Simple SVG arrow pointing right */}
              <svg className="w-8 h-8 text-white absolute -right-6 bottom-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </h3>
          </div>
          
          <div className="z-10 flex flex-col items-center justify-center relative w-1/3">
             <img 
                src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=400&auto=format&fit=crop" 
                alt="Pizza" 
                className="w-24 h-24 lg:w-32 lg:h-32 object-cover rounded-full shadow-xl border-4 border-white mb-2 absolute -left-16"
              />
              <div className="ml-16 flex flex-col items-start">
                <p className="text-white text-xs font-bold mb-1">Margherita Pizza</p>
                <div className="flex items-center gap-2 mb-2">
                  <span className="line-through text-white/70 text-xs">₹149</span>
                  <span className="text-lg font-black text-white leading-none">₹129</span>
                </div>
                <button 
                  onClick={() => addToCart(specialPizza)}
                  className="bg-accent text-dark font-bold py-1.5 px-4 rounded-full text-[10px] hover:scale-105 transition-transform shadow-md"
                >
                  Order Now
                </button>
              </div>
          </div>
        </motion.div>
      </div>

      <div className="flex-1 lg:flex-[1.2] flex gap-4 h-36 lg:h-auto">
        {/* Wafers Bhel Promo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 bg-[#111111] rounded-xl p-4 flex flex-col justify-center items-center text-center shadow-sm relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-center gap-4 z-10">
             <div className="flex flex-col items-center md:items-end">
               <h4 className="text-accent text-lg lg:text-xl font-bold leading-none mb-1">NEW</h4>
               <h4 className="text-white text-lg lg:text-xl font-bold leading-none">LAUNCH</h4>
             </div>
             <div className="h-full w-px bg-white/20 hidden md:block"></div>
             <div className="flex flex-col items-start text-left">
               <span className="text-white text-[12px] font-bold tracking-widest uppercase mb-1">Wafers Bhel</span>
               <div className="flex items-center gap-2">
                 <div className="text-3xl lg:text-4xl font-black text-accent leading-none">₹39</div>
                 <button 
                   onClick={() => addToCart({ id: 'sp6', name: 'Wafers Bhel', price: 39, image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=400&auto=format&fit=crop' })}
                   className="bg-accent text-dark font-bold text-[8px] px-2 py-1 rounded-full hover:scale-105 transition-transform"
                 >
                   ADD TO CART
                 </button>
               </div>
             </div>
          </div>
        </motion.div>

        {/* Delivery Banner */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 bg-accent rounded-xl p-4 flex justify-between items-center relative shadow-sm overflow-hidden"
        >
          <div className="flex flex-col items-start z-10 w-2/3">
            <h4 className="text-dark font-black text-[10px] lg:text-xs leading-tight mb-2">FAST & FREE<br/>HOME<br/>DELIVERY</h4>
            <button className="bg-white text-dark text-[8px] font-bold py-1 px-3 rounded-full flex items-center shadow-sm">
              Order on WhatsApp
            </button>
          </div>
          <div className="w-1/3 flex justify-end items-center z-10">
             <FaMotorcycle className="text-primary w-12 h-12 lg:w-16 lg:h-16 drop-shadow-md" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
