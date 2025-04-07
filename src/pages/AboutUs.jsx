import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#E8E3DD]">
      {/* About Us Section */}
      <motion.section 
        id="about"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#492D25] mb-8 text-center">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-2xl font-semibold text-[#724935] mb-4">Crafting Comfort Since 1970</h3>
              <p className="text-[#492D25] mb-4">
                Hudson Furnishings began as a small family workshop with a big dream: to create furniture that transforms houses into homes. For over 50 years, we've been crafting pieces that combine timeless design with unmatched quality.
              </p>
              <p className="text-[#492D25] mb-4">
                Our commitment to sustainability means we source materials responsibly and create furniture that lasts for generations. Every piece tells a story of craftsmanship, dedication, and the pursuit of excellence.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e"
                alt="Craftsman working"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Us Section */}
      <motion.section 
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-16 bg-[#492D25] text-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <FaPhone className="text-2xl text-[#EABF7C]" />
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <p>(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-2xl text-[#EABF7C]" />
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <p>info@hudsonfurnishings.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-2xl text-[#EABF7C]" />
                <div>
                  <h3 className="font-semibold">Visit Us</h3>
                  <p>123 Furniture Ave, Design District</p>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-[#EABF7C]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-[#EABF7C]"
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full p-3 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-[#EABF7C]"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#EABF7C] text-[#492D25] py-3 rounded font-semibold hover:bg-[#BD8E4A] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        id="faq"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#492D25] mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[#E8E3DD] p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-[#492D25] mb-3">What is your delivery policy?</h3>
              <p className="text-[#724935]">We offer free delivery for orders over $1000 within a 50-mile radius. Standard delivery fees apply for other orders.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-[#E8E3DD] p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-[#492D25] mb-3">Do you offer assembly services?</h3>
              <p className="text-[#724935]">Yes, we provide professional assembly services for all our furniture at a competitive rate.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-[#E8E3DD] p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-[#492D25] mb-3">What is your return policy?</h3>
              <p className="text-[#724935]">We accept returns within 30 days of delivery. Items must be in original condition with all packaging.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-[#E8E3DD] p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-[#492D25] mb-3">Do you offer financing?</h3>
              <p className="text-[#724935]">Yes, we offer flexible financing options through our partners with 0% APR for qualified buyers.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Sitemap Section */}
      <motion.section 
        id="sitemap"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-16 bg-[#E8E3DD]"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#492D25] mb-12 text-center">Site Map</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold text-[#492D25] mb-4">Main Pages</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-[#724935] hover:text-[#BD8E4A]">Home</a></li>
                <li><a href="/about" className="text-[#724935] hover:text-[#BD8E4A]">About Us</a></li>
                <li><a href="#contact" className="text-[#724935] hover:text-[#BD8E4A]">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#492D25] mb-4">Shop</h3>
              <ul className="space-y-2">
                <li><a href="/bedroom" className="text-[#724935] hover:text-[#BD8E4A]">Bedroom</a></li>
                <li><a href="/living-room" className="text-[#724935] hover:text-[#BD8E4A]">Living Room</a></li>
                <li><a href="/dining-room" className="text-[#724935] hover:text-[#BD8E4A]">Dining Room</a></li>
                <li><a href="/office" className="text-[#724935] hover:text-[#BD8E4A]">Home Office</a></li>
                <li><a href="/outdoor" className="text-[#724935] hover:text-[#BD8E4A]">Outdoor</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#492D25] mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li><a href="#faq" className="text-[#724935] hover:text-[#BD8E4A]">FAQ</a></li>
                <li><a href="/shipping" className="text-[#724935] hover:text-[#BD8E4A]">Shipping</a></li>
                <li><a href="/returns" className="text-[#724935] hover:text-[#BD8E4A]">Returns</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#492D25] mb-4">Account</h3>
              <ul className="space-y-2">
                <li><a href="/login" className="text-[#724935] hover:text-[#BD8E4A]">Login</a></li>
                <li><a href="/signup" className="text-[#724935] hover:text-[#BD8E4A]">Sign Up</a></li>
                <li><a href="/cart" className="text-[#724935] hover:text-[#BD8E4A]">Shopping Cart</a></li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUs;