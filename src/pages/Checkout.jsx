import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCartStore from '../store/cartStore';
import toast from 'react-hot-toast';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, clearCart, getTotal } = useCartStore();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate payment processing
    setTimeout(() => {
      clearCart();
      toast.success('Order placed successfully!');
      navigate('/');
    }, 1500);
  };

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-[#492D25] mb-6">Checkout</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-[#492D25] mb-4">Shipping Information</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#BD8E4A] focus:ring-[#BD8E4A] sm:text-sm"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#BD8E4A] focus:ring-[#BD8E4A] sm:text-sm"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#BD8E4A] focus:ring-[#BD8E4A] sm:text-sm"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  name="address"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#BD8E4A] focus:ring-[#BD8E4A] sm:text-sm"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">City</label>
                  <input
                    type="text"
                    name="city"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#BD8E4A] focus:ring-[#BD8E4A] sm:text-sm"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">ZIP Code</label>
                  <input
                    type="text"
                    name="zipCode"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#BD8E4A] focus:ring-[#BD8E4A] sm:text-sm"
                    value={formData.zipCode}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#BD8E4A] focus:ring-[#BD8E4A] sm:text-sm"
                  value={formData.cardNumber}
                  onChange={handleChange}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
                  <input
                    type="text"
                    name="expiryDate"
                    placeholder="MM/YY"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#BD8E4A] focus:ring-[#BD8E4A] sm:text-sm"
                    value={formData.expiryDate}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#BD8E4A] focus:ring-[#BD8E4A] sm:text-sm"
                    value={formData.cvv}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#BD8E4A] text-white py-2 px-4 rounded hover:bg-[#8D5E2F] transition-colors"
              >
                Place Order (${getTotal().toFixed(2)})
              </button>
            </form>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-[#492D25] mb-4">Order Summary</h3>
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-4 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-grow">
                  <h4 className="font-semibold text-[#492D25]">{item.name}</h4>
                  <p className="text-sm text-[#8D5E2F]">
                    ${item.price} x {item.quantity}
                  </p>
                </div>
                <p className="font-semibold text-[#492D25]">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>${getTotal().toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;