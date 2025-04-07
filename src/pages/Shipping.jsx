import { motion } from 'framer-motion';
import { FaTruck, FaBox, FaGlobe, FaCalendarAlt } from 'react-icons/fa';

const Shipping = () => {
  return (
    <div className="min-h-screen bg-[#E8E3DD] py-16">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-[#492D25] mb-12 text-center"
        >
          Shipping Information
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center gap-4 mb-4">
              <FaTruck className="text-3xl text-[#BD8E4A]" />
              <h2 className="text-2xl font-semibold text-[#492D25]">Delivery Options</h2>
            </div>
            <ul className="space-y-4 text-[#724935]">
              <li>• Standard Delivery (5-7 business days)</li>
              <li>• Express Delivery (2-3 business days)</li>
              <li>• Same Day Delivery (select areas only)</li>
              <li>• Free delivery on orders over $1,000</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center gap-4 mb-4">
              <FaGlobe className="text-3xl text-[#BD8E4A]" />
              <h2 className="text-2xl font-semibold text-[#492D25]">Delivery Areas</h2>
            </div>
            <ul className="space-y-4 text-[#724935]">
              <li>• Free delivery within 50-mile radius</li>
              <li>• Nationwide shipping available</li>
              <li>• International shipping (select countries)</li>
              <li>• Remote area delivery surcharge may apply</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center gap-4 mb-4">
              <FaBox className="text-3xl text-[#BD8E4A]" />
              <h2 className="text-2xl font-semibold text-[#492D25]">Assembly Services</h2>
            </div>
            <ul className="space-y-4 text-[#724935]">
              <li>• Professional assembly available</li>
              <li>• White glove delivery service</li>
              <li>• Old furniture removal</li>
              <li>• Room of choice placement</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center gap-4 mb-4">
              <FaCalendarAlt className="text-3xl text-[#BD8E4A]" />
              <h2 className="text-2xl font-semibold text-[#492D25]">Scheduling</h2>
            </div>
            <ul className="space-y-4 text-[#724935]">
              <li>• Choose your preferred delivery date</li>
              <li>• Real-time delivery tracking</li>
              <li>• SMS notifications</li>
              <li>• Flexible rescheduling options</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;