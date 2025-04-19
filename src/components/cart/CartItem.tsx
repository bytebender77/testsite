import React from 'react';
import { X } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';
import QuantitySelector from '../product/QuantitySelector';
import { useCart } from '../../context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateItemQuantity, removeItem } = useCart();
  
  const handleQuantityChange = (newQuantity: number) => {
    updateItemQuantity(item.product.id, newQuantity);
  };
  
  return (
    <div className="flex items-center py-4 border-b border-gray-200">
      <div className="w-20 h-20 flex-shrink-0">
        <img 
          src={item.product.image} 
          alt={item.product.name} 
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      
      <div className="flex-grow ml-4">
        <h3 className="font-medium text-gray-900">{item.product.name}</h3>
        <p className="text-sm text-gray-500 mb-1">Category: {item.product.category === 'thekua' ? 'Thekua' : 'Laddoo'}</p>
        <p className="text-amber-600 font-medium">₹{item.product.price}</p>
      </div>
      
      <div className="flex items-center space-x-4">
        <QuantitySelector 
          quantity={item.quantity} 
          setQuantity={handleQuantityChange}
        />
        
        <button 
          onClick={() => removeItem(item.product.id)}
          className="text-gray-500 hover:text-red-500 p-1"
          aria-label="Remove item"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;