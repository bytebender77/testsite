import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden">
        <div className="aspect-w-1 aspect-h-1">
          <img 
            src={product.image} 
            alt={product.name} 
            className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        {product.popular && (
          <div className="absolute top-3 right-3 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">
            Popular
          </div>
        )}
      </Link>
      
      <div className="p-4">
        <div className="flex items-center mb-2">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${i < Math.floor(product.rating || 0) ? 'fill-current' : 'stroke-current fill-none'}`} 
              />
            ))}
          </div>
          <span className="text-gray-500 text-sm ml-2">{product.rating}</span>
        </div>
        
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-lg text-gray-900 mb-1 hover:text-amber-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-gray-700 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-amber-600 font-bold">₹{product.price}</span>
          <button
            onClick={() => addItem(product, 1)}
            className="bg-amber-100 text-amber-600 p-2 rounded-full hover:bg-amber-500 hover:text-white transition-colors"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;