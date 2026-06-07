import { Flame, Phone, MapPin, Clock } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaRegHeart } from 'react-icons/fa';
import { ChevronRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-8">
      {/* Contact Info Row (White Bg) */}
      <div className="bg-white border-t border-gray-100 py-8 px-4 lg:px-8">
        <div className="w-[95%] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 items-start divide-x divide-gray-100">
          
          <div className="flex items-start gap-3 pl-0">
            <div className="text-accent mt-1"><Phone size={24} strokeWidth={1.5} /></div>
            <div className="flex flex-col">
              <span className="font-bold text-[10px] text-gray-500 mb-1">CALL US</span>
              <span className="text-sm font-bold text-dark">+91 93250 12345</span>
            </div>
          </div>
          
          <div className="flex items-start gap-3 pl-6">
            <div className="text-accent mt-1"><MapPin size={24} strokeWidth={1.5} /></div>
            <div className="flex flex-col">
              <span className="font-bold text-[10px] text-gray-500 mb-1">LOCATION</span>
              <span className="text-[10px] text-dark font-medium leading-snug">Vishu's Cafe, Kannad,<br/>Chhatrapati Sambhajinagar,<br/>Maharashtra 431103</span>
            </div>
          </div>

          <div className="flex items-start gap-3 pl-6">
            <div className="text-accent mt-1"><Clock size={24} strokeWidth={1.5} /></div>
            <div className="flex flex-col">
              <span className="font-bold text-[10px] text-gray-500 mb-1">OPENING HOURS</span>
              <span className="text-[10px] text-dark font-medium leading-snug">10:00 AM - 11:00 PM<br/>(All Days Open)</span>
            </div>
          </div>

          <div className="flex items-start gap-3 pl-6 justify-between pr-4">
             <div className="flex flex-col">
               <div className="flex justify-center w-full mb-2">
                 <FaRegHeart className="text-accent" />
               </div>
             </div>
             <div className="flex flex-col items-center">
              <span className="font-bold text-[10px] text-dark mb-2">FOLLOW US</span>
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-dark flex items-center justify-center text-white hover:bg-primary cursor-pointer transition-colors"><FaInstagram size={12} /></div>
                <div className="w-6 h-6 rounded-full bg-dark flex items-center justify-center text-white hover:bg-primary cursor-pointer transition-colors"><FaFacebookF size={12} /></div>
                <div className="w-6 h-6 rounded-full bg-dark flex items-center justify-center text-white hover:bg-primary cursor-pointer transition-colors"><FaWhatsapp size={12} /></div>
              </div>
             </div>
          </div>
        </div>
      </div>

      {/* Main Footer (Black Bg) */}
      <div className="bg-[#111111] pt-12 pb-24 md:pb-6 px-4 lg:px-8">
        <div className="w-[95%] mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
            {/* Brand */}
            <div className="md:w-1/4">
              <div className="flex items-center gap-1 mb-2">
                <Flame className="text-primary w-10 h-10 fill-primary" />
                <div className="flex flex-col -gap-1">
                  <h1 className="font-cursive text-3xl leading-none text-white tracking-wide">Vishu's</h1>
                  <span className="text-xs text-white font-medium tracking-widest text-center">Cafe</span>
                </div>
              </div>
              <p className="text-white text-[10px] mt-2 tracking-wider">Good Food. Great Mood.</p>
              
              <div className="flex gap-2 mt-6">
                 <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-dark hover:bg-primary hover:text-white cursor-pointer transition-colors"><FaInstagram size={12} /></div>
                 <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-dark hover:bg-primary hover:text-white cursor-pointer transition-colors"><FaFacebookF size={12} /></div>
                 <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-dark hover:bg-primary hover:text-white cursor-pointer transition-colors"><FaWhatsapp size={12} /></div>
              </div>
            </div>

            {/* Links */}
            <div className="md:w-1/4">
              <h4 className="text-accent font-bold text-[10px] tracking-wider mb-4">QUICK LINKS</h4>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                <a href="#" className="text-gray-400 text-[10px] hover:text-white transition-colors">Home</a>
                <a href="#" className="text-gray-400 text-[10px] hover:text-white transition-colors">Reviews</a>
                <a href="#" className="text-gray-400 text-[10px] hover:text-white transition-colors">Menu</a>
                <a href="#" className="text-gray-400 text-[10px] hover:text-white transition-colors">Contact</a>
                <a href="#" className="text-gray-400 text-[10px] hover:text-white transition-colors">About Us</a>
                <a href="#" className="text-gray-400 text-[10px] hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 text-[10px] hover:text-white transition-colors">Gallery</a>
                <a href="#" className="text-gray-400 text-[10px] hover:text-white transition-colors">Terms & Conditions</a>
              </div>
            </div>

            <div className="md:w-1/4">
              <h4 className="text-accent font-bold text-[10px] tracking-wider mb-4">POPULAR ITEMS</h4>
              <ul className="text-gray-400 text-[10px] space-y-2">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full"></span> Margherita Pizza</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full"></span> Vishu's Special Burger</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full"></span> Peri Peri Fries</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full"></span> Cold Coffee</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full"></span> Oreo Shake</li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="md:w-1/4">
              <h4 className="text-accent font-bold text-[10px] tracking-wider mb-4">NEWSLETTER</h4>
              <p className="text-gray-400 text-[10px] mb-4">Get updates on offers and new arrivals</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-transparent border border-gray-600 text-white text-[10px] px-3 py-2 w-full outline-none focus:border-accent"
                />
                <button className="bg-accent text-dark font-bold text-[10px] px-4 py-2 hover:bg-yellow-500 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="text-center text-[8px] text-gray-500 pt-6 border-t border-white/10 relative">
            © 2026 Vishu's Cafe. All Rights Reserved.
            <div className="absolute right-0 top-4 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-red-700">
               <ChevronRight className="-rotate-90" size={12} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
