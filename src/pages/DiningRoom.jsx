import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { diningRoomProducts } from '../data/diningRoomProducts';

const DiningRoom = () => {
  const [products] = useState(diningRoomProducts);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#492D25] mb-6">Dining Room Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default DiningRoom;