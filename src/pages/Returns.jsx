import { motion } from 'framer-motion';
import { FaUndo, FaShieldAlt, FaHandshake, FaQuestionCircle } from 'react-icons/fa';

const Returns = () => {
  return (
    <div className="min-h-screen bg-[#E8E3DD] py-16">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-[#492D25] mb-12 text-center"
        >
          Returns & Refunds
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center gap-4 mb-4">
              <FaUndo className="text-3xl text-[#BD8E4A]" />
              <h2 className="text-2xl font-semibold text-[#492D25]">Return Policy</h2>
            </div>
            <ul className="space-y-4 text-[#724935]">
              <li>• 30-day return window</li>
              <li>• Original packaging required</li>
              <li>• Free returns on defective items</li>
              <li>• Store credit or full refund options</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center gap-4 mb-4">
              <FaShieldAlt className="text-3xl text-[#BD8E4A]" />
              <h2 className="text-2xl font-semibold text-[#492D25]">Warranty</h2>
            </div>
            <ul className="space-y-4 text-[#724935]">
              <li>• 1-year manufacturer warranty</li>
              <li>• Extended warranty available</li>
              <li>• Coverage for defects and damages</li>
              <li>• Easy claim process</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center gap-4 mb-4">
              <FaHandshake className="text-3xl text-[#BD8E4A]" />
              <h2 className="text-2xl font-semibold text-[#492D25]">Our Promise</h2>
            </div>
            <ul className="space-y-4 text-[#724935]">
              <li>• Satisfaction guaranteed</li>
              <li>• Quality assurance</li>
              <li>• Price match guarantee</li>
              <li>• Hassle-free returns</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center gap-4 mb-4">
              <FaQuestionCircle className="text-3xl text-[#BD8E4A]" />
              <h2 className="text-2xl font-semibold text-[#492D25]">Return Process</h2>
            </div>
            <ul className="space-y-4 text-[#724935]">
              <li>• Initiate return online</li>
              <li>• Schedule pickup service</li>
              <li>• Print return label</li>
              <li>• Track return status</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Returns;