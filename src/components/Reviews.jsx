import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { FaRegHeart, FaStar, FaRegStar } from 'react-icons/fa';

const defaultReviews = [
  {
    id: 1,
    name: 'Rahul Patil',
    rating: 5,
    text: 'Amazing food and great service! The burgers are just perfect.',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Sneha Kulkarni',
    rating: 5,
    text: 'Best pizza in town! Must try Cheese Burst Pizza.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Akash More',
    rating: 5,
    text: 'Super tasty food, pocket friendly and staff is very polite.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
  },
];

export default function Reviews() {
  const [reviews, setReviews] = useState(defaultReviews);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({ name: '', rating: 5, text: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.text) return;
    
    const review = {
      id: Date.now(),
      name: newReview.name,
      rating: newReview.rating,
      text: newReview.text,
      image: `https://api.dicebear.com/7.x/avataaars/svg?seed=${newReview.name}`,
    };
    
    setReviews([review, ...reviews]);
    setIsModalOpen(false);
    setNewReview({ name: '', rating: 5, text: '' });
  };

  return (
    <section className="pt-8 border-t border-gray-100 flex flex-col lg:flex-row gap-8 items-center relative" id="reviews">
      {/* Left Title */}
      <div className="lg:w-1/5 flex flex-col items-start w-full md:w-auto">
        <h2 className="text-3xl font-black leading-none mb-2">
          CUSTOMER<br/>
          <span className="text-primary flex items-center gap-2">LOVE <FaRegHeart className="text-primary" size={24} /></span>
        </h2>
        
      
        {/* Navigation arrows */}
        <div className="flex gap-2 mt-6 hidden lg:flex">
          <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-gray-400 transition-colors">
             <ChevronLeft size={16} />
          </button>
          <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-gray-400 transition-colors">
             <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Right Review Cards */}
      <div className="lg:w-4/5 flex overflow-x-auto md:grid md:grid-cols-3 hide-scrollbar gap-4 md:gap-6 w-full pb-4 md:pb-0 px-1">
        {reviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="min-w-[280px] bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  i < review.rating ? 
                    <FaStar key={i} className="text-accent" size={14} /> : 
                    <FaRegStar key={i} className="text-gray-300" size={14} />
                ))}
              </div>
              <p className="text-gray-600 text-xs mb-4 leading-relaxed">
                "{review.text}"
              </p>
            </div>
            <div className="flex items-center gap-3 border-t border-gray-50 pt-4 mt-auto">
              <img src={review.image} alt={review.name} className="w-8 h-8 rounded-full object-cover bg-gray-100" />
              <span className="text-dark font-bold text-[10px]">{review.name}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <button 
          onClick={() => setIsModalOpen(true)}
          className="mt-4 bg-dark text-white px-5 py-2.5 rounded-full text-xs font-bold hover:bg-primary hover:scale-105 transition-all flex items-center gap-2 w-full md:w-auto justify-center shadow-lg"
        >
          Write a Review
        </button>

      {/* Write Review Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/60 z-[100] backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl p-6 w-[90%] max-w-md z-[101]"
            >
              <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
                <h3 className="text-lg font-black text-dark">Write a Review</h3>
                <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-dark transition-colors bg-gray-50 p-1.5 rounded-full">
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 mb-1">YOUR NAME</label>
                  <input 
                    type="text" 
                    required
                    value={newReview.name}
                    onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-primary transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-500 mb-1">RATING</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button 
                        key={star} 
                        type="button"
                        onClick={() => setNewReview({...newReview, rating: star})}
                        className="focus:outline-none"
                      >
                        {star <= newReview.rating ? (
                          <FaStar className="text-accent hover:scale-110 transition-transform" size={28} />
                        ) : (
                          <FaRegStar className="text-gray-300 hover:text-accent hover:scale-110 transition-all" size={28} />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-500 mb-1">YOUR REVIEW</label>
                  <textarea 
                    required
                    rows="3"
                    value={newReview.text}
                    onChange={(e) => setNewReview({...newReview, text: e.target.value})}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your experience..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="mt-4 w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-[#e33225] hover:shadow-lg transition-all"
                >
                  Submit Review
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
