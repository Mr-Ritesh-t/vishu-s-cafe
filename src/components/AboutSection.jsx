import { ChevronRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="pt-8 flex flex-col lg:flex-row gap-6">
      
      {/* Mobile Version - Matches Mockup */}
      <div className="lg:hidden bg-white rounded-[30px] p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] flex flex-col gap-4">
        <div className="flex flex-col items-start w-[60%]">
          <h3 className="font-cursive text-2xl text-accent transform -rotate-2">Our Cafe</h3>
          <h2 className="text-xl font-black mb-2 leading-snug">
            Made With Love,<br />
            Served With Passion.
          </h2>
          <button className="bg-transparent text-gray-400 font-bold text-[10px] flex items-center gap-1">
            Know More <ChevronRight size={12} />
          </button>
        </div>

        <div className="w-full h-40 rounded-2xl overflow-hidden relative shadow-inner">
          <img 
            src="/cafe.png" 
            alt="Cafe Interior" 
            className="w-full h-full object-cover filter brightness-75"
          />
          {/* Glowing Neon Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="flex flex-col items-center transform -rotate-6">
               <h3 className="font-cursive text-4xl text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">Vishu's</h3>
               <span className="text-accent font-cursive text-xl drop-shadow-[0_0_8px_rgba(255,215,0,0.8)] -mt-2">Cafe</span>
             </div>
          </div>
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:flex w-full gap-6">
        {/* Left Text */}
        <div className="lg:w-1/3 flex flex-col justify-center">
          <h3 className="font-cursive text-2xl text-primary transform -rotate-2">Our Story</h3>
          <h2 className="text-2xl lg:text-3xl font-black mb-4 leading-tight">
            MADE WITH LOVE,<br />
            SERVED WITH PASSION.
          </h2>
          <p className="text-gray-600 text-[10px] lg:text-xs mb-6 leading-relaxed">
            At Vishu's Cafe, we serve more than just food. Every dish is made with the freshest ingredients, care and a whole lot of love.<br/><br/>
            From our kitchen to your table – we promise taste, quality and happiness in every bite.
          </p>
          <button className="bg-dark text-white font-bold py-2.5 px-5 rounded-md text-xs flex items-center gap-2 hover:bg-black transition-colors self-start w-fit">
            Know More About Us <ChevronRight size={14} />
          </button>
        </div>

        {/* Middle Image */}
        <div className="lg:w-5/12">
          <img 
            src="/cafe.png" 
            alt="Cafe Interior" 
            className="w-full h-48 lg:h-full min-h-[200px] object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Right QR Code Box */}
        <div className="lg:w-1/4 bg-[#111111] rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-md relative">
          <h3 className="text-accent font-bold text-sm mb-4">SCAN FOR<br/>DIGITAL MENU</h3>
          
          <div className="bg-white p-2 rounded-lg mb-4 w-32 h-32 flex items-center justify-center">
            <img 
              src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://vishuscafe.com/menu" 
              alt="QR Code" 
              className="w-full h-full"
            />
          </div>
          
          <p className="font-cursive text-accent text-xl mt-2 transform -rotate-3">Scan. Order. Enjoy!</p>
          
          {/* Curled arrow pointing to QR */}
          <svg className="absolute right-4 bottom-1/3 w-8 h-8 text-white rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" /></svg>
        </div>
      </div>
    </section>
  );
}
