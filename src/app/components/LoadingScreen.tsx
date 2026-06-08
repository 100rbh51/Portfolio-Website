import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B0F19]"
      onAnimationComplete={() => setIsLoading(false)}
    >
      <div className="relative">
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent"
        >
          SP
        </motion.div>

        {/* Glowing Circle */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{ delay: 0.5, duration: 1, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-full blur-2xl"
        />

        {/* Loading Bar */}
        <motion.div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
            className="h-full w-1/2 bg-gradient-to-r from-[#6366F1] to-[#06B6D4]"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
