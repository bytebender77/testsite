import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import CartItem from '../components/cart/CartItem';
import Button from '../components/ui/Button';
import { useCart } from '../context/CartContext';
import { ShoppingCart, ArrowRight, Trash2 } from 'lucide-react';

const CartPage: React.FC = () => {
  const { items, clearCart, getTotalPrice } = useCart();
  
  const totalPrice = getTotalPrice();
  const deliveryFee = totalPrice >= 1000 ? 0 : 100;
  const grandTotal = totalPrice + deliveryFee;
  
  return (
    <Layout>
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-8">Your Shopping Cart</h1>
          
          {items.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="mb-4">
                <ShoppingCart className="h-16 w-16 text-gray-400 mx-auto" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
              <p className="text-gray-600 mb-6">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Link to="/shop">
                <Button>Continue Shopping</Button>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Cart Items */}
              <div className="lg:w-2/3">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900">
                      Cart Items ({items.reduce((total, item) => total + item.quantity, 0)})
                    </h2>
                    <button 
                      onClick={clearCart}
                      className="text-red-500 flex items-center hover:text-red-600"
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Clear Cart
                    </button>
                  </div>
                  
                  <div className="divide-y divide-gray-200">
                    {items.map(item => (
                      <CartItem key={item.product.id} item={item} />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="lg:w-1/3">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">₹{totalPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Delivery Fee</span>
                      {deliveryFee === 0 ? (
                        <span className="text-green-600 font-medium">Free</span>
                      ) : (
                        <span className="font-medium">₹{deliveryFee}</span>
                      )}
                    </div>
                    {deliveryFee > 0 && (
                      <div className="text-sm text-amber-600">
                        Add ₹{1000 - totalPrice} more for free delivery
                      </div>
                    )}
                    <div className="border-t border-gray-200 pt-3 flex justify-between">
                      <span className="font-semibold">Total</span>
                      <span className="font-bold text-amber-600">₹{grandTotal}</span>
                    </div>
                  </div>
                  
                  <Link to="/checkout">
                    <Button 
                      className="w-full flex items-center justify-center"
                      size="lg"
                    >
                      Proceed to Checkout
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  
                  <div className="mt-4 text-center">
                    <Link 
                      to="/shop" 
                      className="text-amber-600 hover:text-amber-700"
                    >
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;