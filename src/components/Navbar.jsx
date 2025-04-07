import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import useCartStore from '../store/cartStore';
import useAuthStore from '../store/authStore';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useCartStore((state) => state.items);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const menuItems = [
    { name: 'BEDROOM', path: '/bedroom' },
    { name: 'LIVING ROOM', path: '/living-room' },
    { name: 'DINING ROOM', path: '/dining-room' },
    { name: 'HOME OFFICE', path: '/office' },
    { name: 'OUTDOOR', path: '/outdoor' },
    { name: 'ABOUT US', path: '/about' }
  ];

  return (
    <nav className="bg-[#492D25] text-[#E8E3DD]">
      <div className="container mx-auto px-4">
        <div className="hidden md:flex items-center justify-between py-4">
          <Link to="/" className="text-2xl font-bold">Hudson Furnishings</Link>
          
          <div className="flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="hover:text-[#EABF7C] transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/cart" className="relative">
              <FaShoppingCart className="text-2xl" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#EABF7C] text-[#492D25] rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {isAuthenticated ? (
              <Link to="/profile">
                <FaUser className="text-2xl" />
              </Link>
            ) : (
              <Link to="/login" className="hover:text-[#EABF7C]">
                Login
              </Link>
            )}
          </div>
        </div>

        <div className="md:hidden">
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="text-xl font-bold">Hudson Furnishings</Link>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-2xl"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="pb-4">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block py-2 hover:text-[#EABF7C]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#724935]">
                <Link
                  to="/cart"
                  className="relative"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FaShoppingCart className="text-2xl" />
                  {cartItemsCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-[#EABF7C] text-[#492D25] rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      {cartItemsCount}
                    </span>
                  )}
                </Link>

                {isAuthenticated ? (
                  <Link
                    to="/profile"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FaUser className="text-2xl" />
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="hover:text-[#EABF7C]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;