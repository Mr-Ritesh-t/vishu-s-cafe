import { ShoppingCart, Search, Menu } from 'lucide-react';
import logo from '../assets/logo.png';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { cartCount, setIsCartOpen } = useCart();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="absolute top-0 w-full z-50 pt-4 px-4 lg:px-8">
      <div className="flex items-center justify-between">
        
        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden flex items-center">
          <Menu className="text-white w-6 h-6" />
        </div>

        {/* Logo */}
        <div className="flex justify-center items-center">
          <img src={logo} alt="Vishu's Cafe" className="h-[72px] md:h-[100px] w-auto object-contain drop-shadow-lg" />
        </div>

        {/* Mobile Cart Icon */}
        <div 
          className="lg:hidden relative cursor-pointer"
          onClick={() => setIsCartOpen(true)}
        >
          <ShoppingCart className="text-white w-6 h-6" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold border border-dark">
              {cartCount}
            </span>
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 bg-black/20 backdrop-blur-md px-8 py-3 rounded-full border border-white/10 shadow-xl">
          {['Home', 'Menu', 'Offers', 'Reviews'].map((item) => (
            <button 
              key={item} 
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-white hover:text-accent font-medium tracking-wide transition-colors text-sm uppercase"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="bg-white/10 p-2.5 rounded-full cursor-pointer hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10">
            <Search className="text-white w-5 h-5" />
          </div>
          <div 
            className="bg-primary p-2.5 rounded-full relative cursor-pointer shadow-[0_4px_14px_0_rgba(227,50,37,0.39)] hover:scale-105 transition-transform"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingCart className="text-white w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-white text-primary text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold border border-primary">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
