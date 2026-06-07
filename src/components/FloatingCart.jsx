import React from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingBag, ChevronRight } from 'lucide-react';

export default function FloatingCart() {
  const { cartCount, cartTotal, setIsCartOpen } = useCart();

  if (cartCount === 0) return null;

  return (
    <div className="fixed bottom-24 md:bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-40">
      <div 
        onClick={() => setIsCartOpen(true)}
        className="bg-[#FF4500] text-white rounded-2xl p-4 flex items-center justify-between shadow-xl cursor-pointer hover:bg-orange-600 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-full relative">
            <ShoppingBag size={24} />
            <span className="absolute -top-1 -right-1 bg-white text-[#FF4500] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium text-white/90">{cartCount} Item{cartCount > 1 ? 's' : ''} added</span>
            <span className="font-bold text-lg leading-tight">₹{cartTotal}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-1 font-bold text-sm">
          View Cart
          <ChevronRight size={18} />
        </div>
      </div>
    </div>
  );
}
