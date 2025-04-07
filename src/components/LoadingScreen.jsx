import { motion } from 'framer-motion';
import { FaCouch } from 'react-icons/fa';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-[#E8E3DD] flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="mb-4"
        >
          <FaCouch className="text-6xl text-[#492D25]" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-[#492D25]"
        >
          Hudson Furnishings
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, ease: "easeInOut" }}
          className="h-1 bg-[#BD8E4A] mt-4 rounded-full"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;