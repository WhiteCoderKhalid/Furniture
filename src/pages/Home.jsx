import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { products as initialProducts } from '../data/products';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaSearch } from 'react-icons/fa';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });

  useEffect(() => {
    const loadProducts = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setProducts(initialProducts);
      setLoading(false);
    };
    loadProducts();
  }, []);

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setPriceRange({ min: '', max: '' });
    setSearchQuery('');
  };

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = (!priceRange.min || product.price >= Number(priceRange.min)) &&
                        (!priceRange.max || product.price <= Number(priceRange.max));
    const matchesSearch = !searchQuery || 
                         product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesPrice && matchesSearch;
  });

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'bedroom', name: 'Bedroom' },
    { id: 'living-room', name: 'Living Room' },
    { id: 'dining-room', name: 'Dining Room' },
    { id: 'office', name: 'Home Office' },
    { id: 'outdoor', name: 'Outdoor' }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl font-bold text-[#492D25] mb-4">Welcome to Hudson Furnishings</h1>
        <p className="text-[#724935] text-lg max-w-2xl mx-auto">
          Discover our collection of premium furniture for your home. Quality craftsmanship meets modern design.
        </p>
      </motion.section>

      {/* Filter Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-8 bg-white p-6 rounded-lg shadow-sm"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-[#492D25] mb-2">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-2 border rounded-md focus:ring-[#BD8E4A] focus:border-[#BD8E4A]"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-[#492D25] mb-2">Search</label>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full p-2 border rounded-md focus:ring-[#BD8E4A] focus:border-[#BD8E4A] pl-10"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-[#492D25] mb-2">Price Range</label>
            <div className="flex gap-2">
              <input
                type="number"
                value={priceRange.min}
                onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
                placeholder="Min"
                className="w-1/2 p-2 border rounded-md focus:ring-[#BD8E4A] focus:border-[#BD8E4A]"
              />
              <input
                type="number"
                value={priceRange.max}
                onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
                placeholder="Max"
                className="w-1/2 p-2 border rounded-md focus:ring-[#BD8E4A] focus:border-[#BD8E4A]"
              />
            </div>
          </div>

          <div className="flex items-end">
            <button
              onClick={handleClearFilters}
              className="w-full p-2 bg-[#BD8E4A] text-white rounded-md hover:bg-[#8D5E2F] transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </motion.section>

      {/* Products Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-bold text-[#492D25] mb-6">Featured Products</h2>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </motion.section>

      {/* Rest of the sections remain the same */}
    </div>
  );
};

export default Home;