import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { outdoorProducts } from '../data/outdoorProducts';

const Outdoor = () => {
  const [products] = useState(outdoorProducts);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#492D25] mb-6">Outdoor Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Outdoor;