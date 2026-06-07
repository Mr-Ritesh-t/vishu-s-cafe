import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Categories from './components/Categories';
import PopularItems from './components/PopularItems';
import Banners from './components/Banners';
import AboutSection from './components/AboutSection';
import Features from './components/Features';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/CartDrawer';
import FloatingCart from './components/FloatingCart';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen relative bg-white overflow-x-hidden">
        <Header />
        <CartDrawer />
        
        <main>
          <div id="home">
            <HeroSection />
          </div>
          <div id="menu">
            <Categories />
          </div>
          <div className="w-[95%] mx-auto flex flex-col gap-12 pb-12">
            <div id="popular">
              <PopularItems />
            </div>
            <div id="offers">
              <Banners />
            </div>
            <Features />
            <AboutSection />
            <div id="reviews">
              <Reviews />
            </div>
          </div>
          <div id="contact">
            <Footer />
          </div>
        </main>

        <FloatingCart />

        <div className="md:hidden">
          <BottomNav />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
