import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#492D25] text-[#E8E3DD] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Hudson Furnishings</h3>
            <p className="mb-4">Making your house feel like home since 1970</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#EABF7C] transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#EABF7C] transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#EABF7C] transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#EABF7C] transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#EABF7C] transition-colors">
                <FaPinterest size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-[#EABF7C] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#EABF7C] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/about#contact" className="hover:text-[#EABF7C] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/about#faq" className="hover:text-[#EABF7C] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/about#sitemap" className="hover:text-[#EABF7C] transition-colors">
                  Site Map
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li>Email: info@hudsonfurnishings.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Furniture Ave, Design District</li>
              <li>Hours: Mon-Sat 9AM-6PM</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="mb-4">Subscribe to receive updates and special offers</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded text-gray-800"
              />
              <button
                type="submit"
                className="w-full bg-[#BD8E4A] text-white py-2 px-4 rounded hover:bg-[#8D5E2F] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-[#724935] text-center">
          <p>&copy; {new Date().getFullYear()} Hudson Furnishings. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;