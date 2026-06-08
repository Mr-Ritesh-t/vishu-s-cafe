import { motion } from 'framer-motion';
import { ChevronRight, Plus } from 'lucide-react';
import { FaRegHeart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const items = [
  {
    id: 1,
    name: 'Cheese Burst Pizza',
    price: '189',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop',
    tag: 'Bestseller',
    tagColor: 'bg-accent text-dark'
  },
  {
    id: 2,
    name: "Vishu's Special Burger",
    price: '149',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop',
    tag: 'Popular',
    tagColor: 'bg-primary text-white'
  },
  {
    id: 3,
    name: 'Peri Peri Fries',
    price: '99',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Cold Coffee',
    price: '99',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Oreo Shake',
    price: '109',
    image: 'https://images.unsplash.com/photo-1572656306390-40a9fc3899f7?q=80&w=600&auto=format&fit=crop',
  },
];

export default function PopularItems() {
  const { addToCart } = useCart();

  return (
    <section className="pt-8 md:pt-16 flex flex-col lg:flex-row gap-4 md:gap-8">
      {/* Mobile Title Row */}
      <div className="lg:hidden flex justify-between items-center mb-4">
        <h2 className="text-3xl font-cursive font-bold flex items-center gap-1.5 text-dark leading-none">
          Most <span className="text-primary italic">Loved</span>
          <FaRegHeart className="ml-3 text-primary" size={20} />
        </h2>
        <button 
          onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-accent text-dark font-bold text-[10px] py-1.5 px-3 rounded-full flex items-center gap-1"
        >
          View All <ChevronRight size={12} />
        </button>
      </div>

      {/* Desktop Left Text Box */}
      <div className="hidden lg:flex lg:w-1/5 flex-col items-start justify-center">
        <h3 className="font-cursive text-3xl text-primary transform -rotate-2">Most Loved</h3>
        <h2 className="text-3xl font-black flex items-center gap-2 mb-2 leading-none">
          POPULAR<br/>ITEMS
          <FaRegHeart className="text-primary mt-6" />
        </h2>
        <p className="text-gray-500 text-xs mb-6 max-w-[200px]">
          Handpicked favorites that our customers just can't stop loving.
        </p>
        <button 
          onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
          className="border border-gray-300 text-gray-800 font-bold text-xs py-2 px-4 rounded-full flex items-center gap-2 hover:bg-gray-50 transition-colors"
        >
          View Full Menu <ChevronRight size={14} />
        </button>
      </div>

      {/* Right Cards */}
      <div className="lg:w-4/5 relative">
        <div className="flex overflow-x-auto md:grid md:grid-cols-3 lg:grid-cols-5 hide-scrollbar gap-4 md:gap-6 pb-4 pr-6">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="min-w-[170px] md:min-w-0 bg-white rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border-none p-2 flex flex-col group cursor-pointer hover:shadow-md transition-all"
            >
              <div className="w-full h-36 rounded-xl overflow-hidden mb-3 relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {item.tag && (
                  <div className={`absolute top-2 left-2 px-2 py-0.5 rounded-md text-[9px] font-bold ${item.tagColor}`}>
                    {item.tag}
                  </div>
                )}
              </div>
              <h4 className="font-bold text-[13px] mb-1 px-1 leading-tight line-clamp-2">{item.name}</h4>
              <div className="flex items-center justify-between mt-auto pt-2 px-1">
                <span className="text-lg font-bold text-primary">₹{item.price}</span>
                <button 
                  onClick={(e) => { e.stopPropagation(); addToCart(item); }}
                  className="w-7 h-7 rounded-full bg-[#FF4500] text-white flex items-center justify-center hover:bg-red-600 shadow-md transition-colors"
                >
                  <Plus size={16} className="font-bold" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile Scroll Indicator */}
        <div className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white via-white/80 to-transparent w-16 h-32 pointer-events-none flex items-center justify-end pr-1 z-10 -mt-2">
          <ChevronRight className="text-gray-400 animate-pulse" size={24} />
        </div>
      </div>
    </section>
  );
}
