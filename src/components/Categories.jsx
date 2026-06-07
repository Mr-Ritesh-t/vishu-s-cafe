import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { menuData } from '../data/menuData';
import { Plus } from 'lucide-react';

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);
  const { addToCart } = useCart();

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(prev => prev === categoryId ? null : categoryId);
  };

  const activeCategoryData = menuData.find(c => c.id === activeCategory);

  return (
    <section className="relative z-20 w-full md:w-[95%] mx-auto px-0 md:px-4 lg:px-8 -mt-6 md:mt-6 mb-8">
      <div className="bg-white rounded-[40px] md:rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] py-8 md:py-6 px-4 md:px-8 transition-all duration-300">
        
        {/* Horizontal Category Icons */}
        <div className="flex overflow-x-auto hide-scrollbar gap-6 pt-4 pb-4 px-2 md:justify-center">
          {menuData.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => handleCategoryClick(category.id)}
              className="flex flex-col items-center gap-3 cursor-pointer group min-w-[70px]"
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all shadow-sm group-hover:shadow-md group-hover:scale-110 text-3xl
                ${activeCategory === category.id ? 'bg-primary text-white scale-110 shadow-md' : 'bg-gray-50'}`}
              >
                {category.icon}
              </div>
              <span className={`text-[11px] md:text-sm font-bold whitespace-nowrap transition-colors
                ${activeCategory === category.id ? 'text-primary' : 'text-gray-700 group-hover:text-primary'}`}
              >
                {category.category}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Expanding Menu Drawer */}
        <AnimatePresence>
          {activeCategory && activeCategoryData && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mt-8 border-t border-gray-100"
            >
              <div className="pt-8 flex flex-col gap-4">
                <h3 className="text-2xl font-black text-dark mb-4 flex items-center gap-3">
                  <span className="text-3xl">{activeCategoryData.icon}</span> 
                  {activeCategoryData.category} Menu
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeCategoryData.items.map(item => (
                    <MenuItem 
                      key={item.id} 
                      item={item} 
                      hasSizes={activeCategoryData.hasSizes} 
                      addToCart={addToCart} 
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
      </div>
    </section>
  );
}

function MenuItem({ item, hasSizes, addToCart }) {
  const [selectedSize, setSelectedSize] = useState('Medium');

  const handleAdd = () => {
    if (hasSizes) {
      addToCart({
        id: item.id,
        name: item.name,
        price: item.prices[selectedSize],
        size: selectedSize
      });
    } else {
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price
      });
    }
  };

  return (
    <div className="flex bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      {/* Left Image */}
      {item.image && (
        <div className="w-[120px] sm:w-[140px] flex-shrink-0 p-2">
          <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-xl" />
        </div>
      )}

      {/* Right Content */}
      <div className="flex-1 p-3 sm:p-4 flex flex-col justify-center">
        {/* Header: Name and Bestseller */}
        <div className="flex justify-between items-start mb-1 gap-2">
          <h4 className="font-bold text-dark text-base sm:text-lg leading-tight">{item.name}</h4>
          {item.isBestSeller && (
            <div className="bg-[#FF4500] text-white text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 flex-shrink-0">
              ★ BEST SELLER
            </div>
          )}
        </div>

        {/* Description */}
        {item.description && (
          <p className="text-[11px] sm:text-xs text-gray-500 mb-3 leading-tight line-clamp-2">{item.description}</p>
        )}

        {/* Sizes */}
        {hasSizes && (
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {['Small', 'Medium', 'Large'].map((size) => {
              const sizeInitial = size.charAt(0);
              const price = item.prices[size];
              const isSelected = selectedSize === size;
              return (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`text-[10px] sm:text-xs font-bold py-1 px-2 sm:px-3 rounded-full transition-colors border flex items-center gap-1 ${isSelected ? 'bg-[#FF4500] text-white border-[#FF4500]' : 'bg-white text-gray-700 border-gray-200'}`}
                >
                  <span>{sizeInitial}</span>
                  <span>₹{price}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* Footer: Price and Add */}
        <div className="flex items-center justify-between mt-auto pt-1">
          <div className="text-lg sm:text-xl font-black text-[#FF4500]">
            ₹{hasSizes ? item.prices[selectedSize] : item.price}
          </div>
          <button 
            onClick={handleAdd}
            className="bg-white text-[#FF4500] border border-[#FF4500] font-bold py-1 px-4 sm:px-5 rounded-full flex items-center gap-1 hover:bg-[#FF4500] hover:text-white transition-colors"
          >
            <Plus size={16} strokeWidth={3} />
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
