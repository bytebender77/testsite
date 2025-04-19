import React from 'react';
import { Plus, Minus } from 'lucide-react';

interface QuantitySelectorProps {
  quantity: number;
  setQuantity: (quantity: number) => void;
  min?: number;
  max?: number;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  setQuantity,
  min = 1,
  max = 20,
}) => {
  const increment = () => {
    if (quantity < max) {
      setQuantity(quantity + 1);
    }
  };
  
  const decrement = () => {
    if (quantity > min) {
      setQuantity(quantity - 1);
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= min && value <= max) {
      setQuantity(value);
    }
  };
  
  return (
    <div className="flex items-center border border-gray-300 rounded-md">
      <button 
        onClick={decrement}
        disabled={quantity <= min}
        className={`p-2 ${quantity <= min ? 'text-gray-400' : 'text-gray-600 hover:text-amber-600'}`}
        aria-label="Decrease quantity"
      >
        <Minus className="h-4 w-4" />
      </button>
      
      <input
        type="text"
        value={quantity}
        onChange={handleChange}
        className="w-12 text-center border-0 focus:ring-0"
        aria-label="Quantity"
      />
      
      <button 
        onClick={increment}
        disabled={quantity >= max}
        className={`p-2 ${quantity >= max ? 'text-gray-400' : 'text-gray-600 hover:text-amber-600'}`}
        aria-label="Increase quantity"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
};

export default QuantitySelector;