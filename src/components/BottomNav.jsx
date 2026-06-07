import React, { useState } from 'react';
import { Home, Menu as MenuIcon, Tag, Star, Phone } from 'lucide-react';

export default function BottomNav() {
  const [activeTab, setActiveTab] = useState('home');

  const scrollToSection = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 w-full bg-white rounded-t-[30px] shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.1)] px-6 pt-3 pb-4 flex justify-between items-end z-50">
        <NavItem 
          icon={<Home size={22} strokeWidth={2.5} />} 
          label="Home" 
          active={activeTab === 'home'} 
          onClick={() => scrollToSection('home')} 
        />
        <NavItem 
          icon={<MenuIcon size={22} strokeWidth={2.5} />} 
          label="Menu" 
          active={activeTab === 'menu'} 
          onClick={() => scrollToSection('menu')} 
        />
        <NavItem 
          icon={<Tag size={22} strokeWidth={2.5} />} 
          label="Offers" 
          active={activeTab === 'offers'} 
          onClick={() => scrollToSection('offers')} 
        />
        <NavItem 
          icon={<Star size={22} strokeWidth={2.5} />} 
          label="Reviews" 
          active={activeTab === 'reviews'} 
          onClick={() => scrollToSection('reviews')} 
        />
        <NavItem 
          icon={<Phone size={22} strokeWidth={2.5} />} 
          label="Contact" 
          active={activeTab === 'contact'} 
          onClick={() => scrollToSection('contact')} 
        />
      </div>
    </>
  );
}

function NavItem({ icon, label, active, onClick }) {
  return (
    <div onClick={onClick} className={`flex flex-col items-center gap-1 cursor-pointer transition-colors relative ${active ? 'text-[#FF4500]' : 'text-gray-500 hover:text-dark'}`}>
      {icon}
      <span className="text-[10px] font-bold">{label}</span>
      {active && <div className="absolute -bottom-4 w-6 h-1 bg-[#FF4500] rounded-t-md"></div>}
    </div>
  );
}
