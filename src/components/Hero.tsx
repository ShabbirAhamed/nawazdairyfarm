import { motion } from 'framer-motion';
import { FaLeaf, FaTruck } from 'react-icons/fa';
import { GiCow, GiMilkCarton } from 'react-icons/gi';
import { FssaiBadge } from './FssaiBadge';

const badgeData = [
  { icon: <GiMilkCarton className="h-5 w-5 text-green-300" />, label: 'Pure Milk' },
  { icon: <GiCow className="h-5 w-5 text-green-300" />, label: 'Healthy Cows' },
  { icon: <FaTruck className="h-5 w-5 text-green-300" />, label: 'Daily Delivery' },
  { icon: <FaLeaf className="h-5 w-5 text-green-300" />, label: 'No Chemicals' },
];

// Reusable animation variants
const fadeSlideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: 'easeOut' as const },
  }),
};

const badgeContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.7,
    },
  },
};

const badgeItemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay, ease: 'easeOut' as const },
  }),
};

const Hero = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative bg-[url('/farm.jpg')] bg-cover bg-center min-h-[80vh] sm:min-h-screen text-white overflow-hidden">
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-green-900/50 to-green-900/90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' as const }}
      />
      <motion.div
        className="absolute inset-0 bg-black/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' as const }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="flex items-center justify-center">
          {/* Text Content */}
          <div className="space-y-6 text-center max-w-3xl mx-auto">
            {/* Heading - fades in and slides up first */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
              variants={fadeSlideUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
            >
              Fresh Farm Milk Delivered Daily
            </motion.h1>

            {/* FSSAI Badge */}
            <motion.div
              className="flex justify-center"
              variants={fadeSlideUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
            >
              <FssaiBadge className="mt-2" size="sm" />
            </motion.div>

            {/* Subheading - appears with delay */}
            <motion.div
              className="space-y-2"
              variants={fadeSlideUp}
              initial="hidden"
              animate="visible"
              custom={0.4}
            >
              <p className="text-base sm:text-lg md:text-xl text-green-100">
                Pure Buffalo & Cow Milk, Ghee, Paneer & Curd
              </p>
              <p className="text-sm sm:text-base text-green-200">
                Direct from our farm in Kanekal
              </p>
            </motion.div>

            {/* Badges - stagger animation one by one */}
            <motion.div
              className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-2 place-items-center mx-auto"
              variants={badgeContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {badgeData.map((badge) => (
                <motion.div
                  key={badge.label}
                  variants={badgeItemVariants}
                  className="flex items-center gap-2 bg-white/20 border border-white/25 hover:bg-green-100/20 hover:border-green-300/60 hover:shadow-lg rounded-full px-4 py-2 text-sm font-semibold transition-transform duration-300"
                  whileHover={{ scale: 1.03 }}
                >
                  <span className="text-lg text-green-300">
                    {badge.icon}
                  </span>
                  <span>{badge.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons - fade in last with scale effect */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center items-center gap-3 w-full sm:w-auto"
              initial="hidden"
              animate="visible"
            >
              <motion.button
                onClick={scrollToProducts}
                variants={buttonVariants}
                custom={1.1}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#25D366] hover:bg-[#20b85c] text-white px-6 py-3 rounded-full font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition duration-300 min-h-[44px] w-full sm:w-auto"
              >
                Order Now on WhatsApp
              </motion.button>
              <motion.button
                onClick={() => window.location.href = 'https://wa.me/919182879423?text=' + encodeURIComponent('Hello Nawaz Dairy Farm, I would like to order milk.')}
                variants={buttonVariants}
                custom={1.3}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition duration-300 min-h-[44px] w-full sm:w-auto"
              >
                Contact via WhatsApp
              </motion.button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
