import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FaRegHeart, FaStar } from 'react-icons/fa';

const reviews = [
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
  return (
    <section className="pt-8 border-t border-gray-100 flex flex-col lg:flex-row gap-8 items-center">
      {/* Left Title */}
      <div className="lg:w-1/5 flex flex-col items-start">
        <h2 className="text-3xl font-black leading-none mb-2">
          CUSTOMER<br/>
          <span className="text-primary flex items-center gap-2">LOVE <FaRegHeart className="text-primary" size={24} /></span>
        </h2>
        
        {/* Navigation arrows */}
        <div className="flex gap-2 mt-4 hidden lg:flex">
          <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-gray-400">
             <ChevronLeft size={16} />
          </button>
          <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-gray-400">
             <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Right Review Cards */}
      <div className="lg:w-4/5 flex overflow-x-auto md:grid md:grid-cols-3 hide-scrollbar gap-4 md:gap-6 w-full">
        {reviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="min-w-[280px] bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="text-accent" size={14} />
                ))}
              </div>
              <p className="text-gray-600 text-xs mb-4">
                {review.text}
              </p>
            </div>
            <div className="flex items-center gap-3 border-t border-gray-50 pt-4 mt-auto">
              <img src={review.image} alt={review.name} className="w-8 h-8 rounded-full object-cover" />
              <span className="text-dark font-bold text-[10px]">{review.name}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
