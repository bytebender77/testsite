import React from 'react';
import { Link } from 'react-router-dom';
import { getPopularProducts } from '../../data/products';
import { ShoppingCart, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const FeaturedProducts: React.FC = () => {
  const popularProducts = getPopularProducts();
  const { addItem } = useCart();
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Offerings</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our most loved traditional sweets, prepared with authentic recipes and the finest ingredients for your Chhath Puja celebrations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {popularProducts.map(product => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
            >
              <Link to={`/product/${product.id}`} className="block relative overflow-hidden">
                <div className="aspect-w-1 aspect-h-1">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute top-3 right-3 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">
                  Popular
                </div>
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
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link 
            to="/shop" 
            className="inline-block px-6 py-3 bg-amber-500 text-white font-medium rounded-md hover:bg-amber-600 transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;