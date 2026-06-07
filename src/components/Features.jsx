import { motion } from 'framer-motion';

export default function Features() {
  const features = [
    {
      title: "Fresh Ingredients",
      icon: "🍔",
    },
    {
      title: "Fast Delivery",
      icon: "🛵",
    },
    {
      title: "Best Quality Food",
      icon: "🛡️",
    },
    {
      title: "Pocket Friendly Prices",
      icon: "🪙",
    }
  ];

  return (
    <section className="lg:hidden mt-4">
      <div className="flex items-center gap-2 mb-4 px-2">
        <span className="text-accent text-xl">⚡</span>
        <h2 className="text-2xl font-cursive font-bold text-dark leading-none italic">
          Why Choose Us?
        </h2>
        <span className="text-accent text-xl">⚡</span>
      </div>

      <div className="bg-white rounded-2xl p-4 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] flex flex-wrap gap-y-4">
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="w-1/2 flex items-center gap-3 px-2"
          >
            <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-xl shrink-0 shadow-sm border border-orange-100">
              {feature.icon}
            </div>
            <span className="text-[10px] font-bold text-dark leading-tight">
              {feature.title.split(' ').map((word, i) => (
                <span key={i}>{word}<br/></span>
              ))}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
