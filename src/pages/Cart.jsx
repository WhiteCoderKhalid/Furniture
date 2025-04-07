import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';
import useCartStore from '../store/cartStore';

const Cart = () => {
  const { items, removeItem, updateQuantity } = useCartStore();
  const [loading, setLoading] = useState(false);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(productId, newQuantity);
    }
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold text-[#492D25] mb-4">Your Cart is Empty</h2>
        <Link to="/" className="text-[#BD8E4A] hover:text-[#8D5E2F]">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-[#492D25] mb-6">Shopping Cart</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-lg mb-4 shadow-sm">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded"
              />
              
              <div className="flex-grow">
                <h3 className="font-semibold text-[#492D25]">{item.name}</h3>
                <p className="text-[#8D5E2F]">${item.price}</p>
                
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    className="p-1 text-[#492D25] hover:text-[#8D5E2F]"
                  >
                    <FaMinus size={12} />
                  </button>
                  <span className="px-2">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    className="p-1 text-[#492D25] hover:text-[#8D5E2F]"
                  >
                    <FaPlus size={12} />
                  </button>
                </div>
              </div>
              
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
          <h3 className="text-xl font-semibold text-[#492D25] mb-4">Order Summary</h3>
          
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
          
          <Link
            to="/checkout"
            className={`w-full bg-[#BD8E4A] text-white py-2 px-4 rounded text-center block hover:bg-[#8D5E2F] transition-colors ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={loading}
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;