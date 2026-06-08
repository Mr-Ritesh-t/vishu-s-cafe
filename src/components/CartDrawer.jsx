import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { FaWhatsapp } from 'react-icons/fa';

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

  const [customerName, setCustomerName] = useState('');

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    if (!customerName.trim()) {
      alert("Please enter your name to proceed with the order.");
      return;
    }

    // Build the message
    let message = `Hello Vishu's Cafe! I'd like to place an order.%0A%0A*Name:* ${customerName.trim()}%0A%0A*Order Details:*%0A`;
    cartItems.forEach((item, index) => {
      const sizeText = item.size ? ` (${item.size})` : '';
      message += `${index + 1}. ${item.quantity}x ${item.name}${sizeText} - ₹${item.price * item.quantity}%0A`;
    });
    message += `%0A*Total: ₹${cartTotal}*`;

    // WhatsApp API URL (placeholder phone number, user needs to update this)
    const phoneNumber = "919325012345";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-2xl z-[70] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="text-xl font-black flex items-center gap-2">
                <ShoppingBag className="text-primary" /> 
                Your Order
              </h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-400 gap-4">
                  <ShoppingBag size={48} strokeWidth={1} />
                  <p>Your cart is empty</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="text-primary font-bold hover:underline"
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                cartItems.map((item) => {
                  const uniqueId = item.size ? `${item.id}-${item.size}` : `${item.id}`;
                  return (
                    <div key={uniqueId} className="flex items-center gap-4 bg-gray-50 p-3 rounded-2xl">
                      <img 
                        src={item.image || 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=200&auto=format&fit=crop'} 
                        alt={item.name} 
                        className="w-16 h-16 rounded-xl object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-bold text-sm leading-tight mb-1">{item.name}</h4>
                        {item.size && (
                          <div className="text-[10px] text-gray-500 font-bold uppercase mb-1">{item.size}</div>
                        )}
                        <div className="text-primary font-black text-sm">₹{item.price * item.quantity}</div>
                      </div>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center bg-white rounded-full border border-gray-200 shadow-sm overflow-hidden">
                        <button 
                          onClick={() => item.quantity > 1 ? updateQuantity(uniqueId, -1) : removeFromCart(uniqueId)}
                          className="w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-6 text-center text-xs font-bold">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(uniqueId, 1)}
                          className="w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer / Checkout */}
            {cartItems.length > 0 && (
              <div className="p-6 bg-white border-t border-gray-100 shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.1)] flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Enter your name" 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ff6b6b] focus:border-transparent transition-all"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 font-medium">Subtotal</span>
                  <span className="text-xl font-black">₹{cartTotal}</span>
                </div>
                
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-[#25D366] text-white font-bold py-4 rounded-xl flex justify-center items-center gap-2 hover:bg-[#20bd5a] transition-colors shadow-lg shadow-green-500/30"
                >
                  <FaWhatsapp size={20} />
                  Checkout via WhatsApp
                  <ArrowRight size={18} />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
