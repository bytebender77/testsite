import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ProductGallery from '../components/product/ProductGallery';
import QuantitySelector from '../components/product/QuantitySelector';
import Button from '../components/ui/Button';
import { getProductById } from '../data/products';
import { useCart } from '../context/CartContext';
import { Star, ShoppingBag, TruckIcon, Calendar, Clock, Shield } from 'lucide-react';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(id ? getProductById(id) : null);
  
  useEffect(() => {
    if (id) {
      const foundProduct = getProductById(id);
      setProduct(foundProduct);
      
      if (!foundProduct) {
        navigate('/shop');
      }
    }
  }, [id, navigate]);
  
  const handleAddToCart = () => {
    if (product) {
      addItem(product, quantity);
    }
  };
  
  if (!product) {
    return null;
  }
  
  return (
    <Layout>
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Product Gallery */}
              <div className="md:w-1/2 p-6">
                <ProductGallery mainImage={product.image} productName={product.name} />
              </div>
              
              {/* Product Details */}
              <div className="md:w-1/2 p-6 md:p-8 bg-amber-50">
                <div className="mb-6">
                  <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded-full capitalize">
                    {product.category}
                  </span>
                  <h1 className="text-2xl font-bold text-gray-900 mt-2">{product.name}</h1>
                  
                  <div className="flex items-center mt-2 mb-4">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-5 w-5 ${i < Math.floor(product.rating || 0) ? 'fill-current' : 'stroke-current fill-none'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm ml-2">{product.rating} Rating</span>
                  </div>
                  
                  <p className="text-3xl font-bold text-amber-600 mb-4">
                    ₹{product.price}
                  </p>
                  
                  <p className="text-gray-700 mb-6">
                    {product.description}
                  </p>
                </div>
                
                {/* Quantity and Add to Cart */}
                <div className="mb-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-gray-700">Quantity:</span>
                    <QuantitySelector 
                      quantity={quantity}
                      setQuantity={setQuantity}
                    />
                  </div>
                  
                  <Button 
                    onClick={handleAddToCart}
                    className="w-full flex items-center justify-center"
                    size="lg"
                  >
                    <ShoppingBag className="h-5 w-5 mr-2" />
                    Add to Cart
                  </Button>
                </div>
                
                {/* Product Features */}
                <div className="border-t border-amber-200 pt-6">
                  <h3 className="font-medium text-gray-900 mb-4">Product Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <TruckIcon className="h-5 w-5 text-amber-500 mr-3" />
                      <span className="text-gray-700">Free delivery on orders above ₹1000</span>
                    </li>
                    <li className="flex items-start">
                      <Calendar className="h-5 w-5 text-amber-500 mr-3" />
                      <span className="text-gray-700">Made fresh for each order</span>
                    </li>
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-amber-500 mr-3" />
                      <span className="text-gray-700">Order at least 3 days before your celebration</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-amber-500 mr-3" />
                      <span className="text-gray-700">Quality and freshness guaranteed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;