import { Link } from 'react-router-dom';

const Sitemap = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-[#492D25] mb-6">Site Map</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-[#492D25] mb-4">Main Pages</h2>
          <ul className="space-y-2">
            <li><Link to="/" className="text-[#8D5E2F] hover:text-[#BD8E4A]">Home</Link></li>
            <li><Link to="/#about" className="text-[#8D5E2F] hover:text-[#BD8E4A]">About Us</Link></li>
            <li><Link to="/#contact" className="text-[#8D5E2F] hover:text-[#BD8E4A]">Contact</Link></li>
            <li><Link to="/#faq" className="text-[#8D5E2F] hover:text-[#BD8E4A]">FAQ</Link></li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold text-[#492D25] mb-4">Categories</h2>
          <ul className="space-y-2">
            <li><Link to="/bedroom" className="text-[#8D5E2F] hover:text-[#BD8E4A]">Bedroom</Link></li>
            <li><Link to="/living-room" className="text-[#8D5E2F] hover:text-[#BD8E4A]">Living Room</Link></li>
            <li><Link to="/dining-room" className="text-[#8D5E2F] hover:text-[#BD8E4A]">Dining Room</Link></li>
            <li><Link to="/office" className="text-[#8D5E2F] hover:text-[#BD8E4A]">Home Office</Link></li>
            <li><Link to="/outdoor" className="text-[#8D5E2F] hover:text-[#BD8E4A]">Outdoor</Link></li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold text-[#492D25] mb-4">Customer</h2>
          <ul className="space-y-2">
            <li><Link to="/login" className="text-[#8D5E2F] hover:text-[#BD8E4A]">Login</Link></li>
            <li><Link to="/signup" className="text-[#8D5E2F] hover:text-[#BD8E4A]">Sign Up</Link></li>
            <li><Link to="/cart" className="text-[#8D5E2F] hover:text-[#BD8E4A]">Shopping Cart</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;