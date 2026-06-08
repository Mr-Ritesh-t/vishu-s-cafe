import { Flame, Phone, MapPin, Clock } from 'lucide-react';
import { FaInstagram, FaWhatsapp, FaRegHeart } from 'react-icons/fa';
import { ChevronRight } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="mt-8">
      {/* Contact Info Row (White Bg) */}
      <div className="bg-white border-t border-gray-100 py-8 px-4 lg:px-8">
        <div className="w-[95%] mx-auto grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 md:gap-6 items-start md:divide-x divide-gray-100">
          
          <div className="flex items-start gap-2 md:gap-3 pl-0">
            <div className="text-accent mt-1"><Phone size={20} className="md:w-6 md:h-6" strokeWidth={1.5} /></div>
            <div className="flex flex-col">
              <span className="font-bold text-[9px] md:text-[10px] text-gray-500 mb-1">CALL US</span>
              <span className="text-xs md:text-sm font-bold text-dark">+91 9082775127</span>
            </div>
          </div>
          
          <div className="flex items-start gap-2 md:gap-3 pl-0 md:pl-6">
            <div className="text-accent mt-1"><MapPin size={20} className="md:w-6 md:h-6" strokeWidth={1.5} /></div>
            <div className="flex flex-col">
              <span className="font-bold text-[9px] md:text-[10px] text-gray-500 mb-1">LOCATION</span>
              <span className="text-[9px] md:text-[10px] text-dark font-medium leading-snug">Sahare Trade Centre, Sillod,<br/>Chhatrapati Sambhajinagar,<br/>Maharashtra 431112</span>
            </div>
          </div>

          <div className="flex items-start gap-2 md:gap-3 pl-0 md:pl-6">
            <div className="text-accent mt-1"><Clock size={20} className="md:w-6 md:h-6" strokeWidth={1.5} /></div>
            <div className="flex flex-col">
              <span className="font-bold text-[9px] md:text-[10px] text-gray-500 mb-1">OPENING HOURS</span>
              <span className="text-[9px] md:text-[10px] text-dark font-medium leading-snug">10:00 AM - 11:00 PM<br/>(All Days Open)</span>
            </div>
          </div>

          <div className="flex items-start gap-2 md:gap-3 pl-0 md:pl-6 justify-between md:justify-start lg:justify-between md:pr-4">
             <div className="hidden lg:flex flex-col mr-4">
               <div className="flex justify-center w-full mb-2">
                 <FaRegHeart className="text-accent" />
               </div>
             </div>
             <div className="flex flex-col items-start md:items-center pl-6">
              <span className="font-bold text-[9px] md:text-[10px] text-dark mb-2">FOLLOW US</span>
              <div className="flex gap-2">
                <a href="https://www.instagram.com/vishus_cafe/" target="_blank" rel="noopener noreferrer" className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-dark flex items-center justify-center text-white hover:bg-primary cursor-pointer transition-colors"><FaInstagram size={10} className="md:w-3 md:h-3" /></a>

                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-dark flex items-center justify-center text-white hover:bg-primary cursor-pointer transition-colors"><FaWhatsapp size={10} className="md:w-3 md:h-3" /></div>
              </div>
             </div>
          </div>
        </div>
      </div>

      {/* Main Footer (Black Bg) */}
      <div className="bg-[#111111] pt-12 pb-24 md:pb-6 px-4 lg:px-8">
        <div className="w-[95%]  mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
            {/* Top row for Mobile (Brand & Map) */}
            <div className="flex flex-row justify-between gap-4 md:gap-10 w-full md:w-[60%]">
              {/* Brand */}
              <div className="w-[45%] md:w-auto flex flex-col justify-center">
                <div className="flex flex-col items-center md:items-start gap-2 mb-2">
                  <img src={logo} alt="Vishu's Cafe" className="h-16 md:h-19 w-auto object-contain drop-shadow-md" />
                  <p className="text-white text-[10px] mt-2 tracking-wider text-center md:text-left">Good Food. Great Mood.</p>
                </div>
                
                <div className="flex justify-center md:justify-start gap-2 mt-4 md:mt-6">
                   <a href="https://www.instagram.com/vishus_cafe/" target="_blank" rel="noopener noreferrer" className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-dark hover:bg-primary hover:text-white cursor-pointer transition-colors"><FaInstagram size={12} /></a>

                   <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-dark hover:bg-primary hover:text-white cursor-pointer transition-colors"><FaWhatsapp size={12} /></div>
                </div>
              </div>

              {/* Map Widget */}
              <div className="w-[55%] md:flex-1 max-w-[300px] bg-[#1a1a1a] rounded-2xl shadow-lg border border-white/5 overflow-hidden flex flex-col">
                <div className="w-full aspect-square md:aspect-auto md:h-32 relative">
                  <iframe 
                    src="https://maps.google.com/maps?q=Vishu's%20Cafe,%20Kannad,%20Maharashtra&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(80%)' }} 
                    allowFullScreen="" 
                    loading="lazy"
                    title="Vishu's Cafe Location"
                  ></iframe>
                </div>
                <div className="p-3 flex-1 flex flex-col justify-between">
                  <div className="flex gap-1.5 mb-2 md:mb-0">
                    <MapPin className="text-[#FFC107] w-3 h-3 md:w-4 md:h-4 flex-shrink-0 mt-0.5" />
                    <div className="flex flex-col">
                      <h4 className="text-white text-[10px] md:text-[11px] font-bold mb-0.5">Vishu's Cafe</h4>
                      <p className="text-gray-400 text-[8px] md:text-[9px] leading-tight line-clamp-2">
                       Sahare Trade Centre, Sillod, Maharashtra 431112
                      </p>
                    </div>
                  </div>
                  <a 
                    href="https://maps.app.goo.gl/y7hPd8DrMTn8nRu86" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#FFC107] text-black text-[9px] font-bold px-2 py-1.5 md:px-3 md:py-2 rounded-md flex items-center justify-center gap-1.5 hover:bg-[#e0a800] transition-colors w-full"
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 20l4-16 4 4" />
                      <path d="M10 20L6 8l4-4" />
                    </svg>
                    Get Directions
                  </a>
                </div>
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
