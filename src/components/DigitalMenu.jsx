import { motion } from 'framer-motion';

export default function DigitalMenu() {
  return (
    <section className="px-4 py-8 w-[95%] mx-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-[#111] rounded-3xl p-8 flex flex-col items-center justify-center text-center border border-white/5 relative overflow-hidden"
      >
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent/10 rounded-full blur-[60px]"></div>
        
        <h3 className="text-xl font-bold mb-6 text-accent">SCAN FOR DIGITAL MENU</h3>
        
        <div className="bg-white p-4 rounded-2xl mb-6 relative z-10 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          {/* Simulated QR Code using a generic QR code image or a patterned div */}
          <img 
            src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://vishuscafe.com/menu" 
            alt="QR Code" 
            className="w-32 h-32"
          />
        </div>
        
        <p className="text-xl font-black italic text-white/90">Scan. Order. Enjoy!</p>
      </motion.div>
    </section>
  );
}
