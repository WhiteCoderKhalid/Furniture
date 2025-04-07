import { useState } from 'react';
import Modal from 'react-modal';
import { FaShoppingCart, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useCartStore from '../store/cartStore';
import toast from 'react-hot-toast';

const ProductCard = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addItem(product, quantity);
    toast.success('Added to cart!', {
      duration: 3000,
      position: 'top-right',
    });
  };

  return (
    <>
      <div 
        className="bg-[#E8E3DD] rounded-lg shadow-md overflow-hidden cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-[#492D25] font-bold text-lg">{product.name}</h3>
          <p className="text-[#8D5E2F]">${product.price}</p>
          <button
            onClick={handleAddToCart}
            className="mt-2 bg-[#BD8E4A] text-white px-4 py-2 rounded flex items-center justify-center gap-2 hover:bg-[#8D5E2F] w-full"
          >
            <FaShoppingCart /> Add to Cart
          </button>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="bg-white p-6 rounded-lg max-w-2xl mx-auto mt-20"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <div className="space-y-4">
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-bold text-[#492D25]">{product.name}</h2>
            <button
              onClick={() => setIsModalOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <FaTimes size={24} />
            </button>
          </div>
          
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-64 object-cover rounded-lg"
          />
          <p className="text-[#8D5E2F] text-lg">${product.price}</p>
          <p className="text-gray-600">{product.description}</p>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center border rounded">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 border-r"
              >
                -
              </button>
              <span className="px-4 py-1">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 border-l"
              >
                +
              </button>
            </div>
            <button
              onClick={(e) => {
                handleAddToCart(e);
                setIsModalOpen(false);
              }}
              className="bg-[#BD8E4A] text-white px-6 py-2 rounded hover:bg-[#8D5E2F] flex items-center gap-2"
            >
              <FaShoppingCart /> Add to Cart
            </button>
          </div>
          
          <div className="flex justify-between mt-4 pt-4 border-t">
            <Link
              to="/"
              className="text-[#BD8E4A] hover:text-[#8D5E2F] font-medium"
            >
              Continue Shopping
            </Link>
            <Link
              to="/cart"
              className="bg-[#492D25] text-white px-6 py-2 rounded hover:bg-[#724935]"
            >
              View Cart
            </Link>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProductCard;