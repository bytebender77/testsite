import React, { useState } from 'react';
import { Filter, ChevronDown, ChevronUp } from 'lucide-react';

interface ProductFiltersProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedType: string;
  setSelectedType: (type: string) => void;
  minPrice: number;
  setMinPrice: (price: number) => void;
  maxPrice: number;
  setMaxPrice: (price: number) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  selectedCategory,
  setSelectedCategory,
  selectedType,
  setSelectedType,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
}) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  
  const thekuaTypes = ['Classic', 'Coconut', 'Suji', 'Mawa', 'Dry Fruit'];
  const laddooTypes = ['Besan', 'Rava', 'Coconut', 'Boondi', 'Dates & Nuts'];
  
  const resetFilters = () => {
    setSelectedCategory('');
    setSelectedType('');
    setMinPrice(0);
    setMaxPrice(500);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <Filter className="h-5 w-5 mr-2 text-amber-500" />
          Filters
        </h3>
        <button 
          onClick={resetFilters}
          className="text-sm text-amber-600 hover:text-amber-700"
        >
          Reset All
        </button>
      </div>
      
      {/* Category Filter */}
      <div className="mb-6 border-b border-gray-100 pb-4">
        <button
          onClick={() => setIsCategoryOpen(!isCategoryOpen)}
          className="w-full flex items-center justify-between text-left mb-2"
        >
          <h4 className="font-medium text-gray-900">Category</h4>
          {isCategoryOpen ? (
            <ChevronUp className="h-4 w-4 text-gray-500" />
          ) : (
            <ChevronDown className="h-4 w-4 text-gray-500" />
          )}
        </button>
        
        {isCategoryOpen && (
          <div className="space-y-2 mt-3">
            {['', 'thekua', 'laddoo'].map((category) => (
              <label key={category} className="flex items-center">
                <input
                  type="radio"
                  name="category"
                  checked={selectedCategory === category}
                  onChange={() => setSelectedCategory(category)}
                  className="rounded text-amber-500 focus:ring-amber-500 h-4 w-4"
                />
                <span className="ml-2 text-gray-700 capitalize">
                  {category || 'All Categories'}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>
      
      {/* Type Filter */}
      <div className="mb-6 border-b border-gray-100 pb-4">
        <button
          onClick={() => setIsTypeOpen(!isTypeOpen)}
          className="w-full flex items-center justify-between text-left mb-2"
        >
          <h4 className="font-medium text-gray-900">Type</h4>
          {isTypeOpen ? (
            <ChevronUp className="h-4 w-4 text-gray-500" />
          ) : (
            <ChevronDown className="h-4 w-4 text-gray-500" />
          )}
        </button>
        
        {isTypeOpen && (
          <div className="space-y-2 mt-3">
            <label className="flex items-center">
              <input
                type="radio"
                name="type"
                checked={selectedType === ''}
                onChange={() => setSelectedType('')}
                className="rounded text-amber-500 focus:ring-amber-500 h-4 w-4"
              />
              <span className="ml-2 text-gray-700">All Types</span>
            </label>
            
            {(!selectedCategory || selectedCategory === 'thekua') && (
              <div className="ml-2 border-l-2 border-amber-100 pl-3 mt-4">
                <h5 className="font-medium text-gray-800 mb-2">Thekua</h5>
                <div className="space-y-2">
                  {thekuaTypes.map((type) => (
                    <label key={type} className="flex items-center">
                      <input
                        type="radio"
                        name="type"
                        checked={selectedType === type}
                        onChange={() => setSelectedType(type)}
                        className="rounded text-amber-500 focus:ring-amber-500 h-4 w-4"
                      />
                      <span className="ml-2 text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
            
            {(!selectedCategory || selectedCategory === 'laddoo') && (
              <div className="ml-2 border-l-2 border-amber-100 pl-3 mt-4">
                <h5 className="font-medium text-gray-800 mb-2">Laddoo</h5>
                <div className="space-y-2">
                  {laddooTypes.map((type) => (
                    <label key={type} className="flex items-center">
                      <input
                        type="radio"
                        name="type"
                        checked={selectedType === type}
                        onChange={() => setSelectedType(type)}
                        className="rounded text-amber-500 focus:ring-amber-500 h-4 w-4"
                      />
                      <span className="ml-2 text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      
      {/* Price Range Filter */}
      <div>
        <button
          onClick={() => setIsPriceOpen(!isPriceOpen)}
          className="w-full flex items-center justify-between text-left mb-2"
        >
          <h4 className="font-medium text-gray-900">Price Range</h4>
          {isPriceOpen ? (
            <ChevronUp className="h-4 w-4 text-gray-500" />
          ) : (
            <ChevronDown className="h-4 w-4 text-gray-500" />
          )}
        </button>
        
        {isPriceOpen && (
          <div className="space-y-4 mt-3">
            <div className="flex justify-between">
              <span className="text-gray-600">₹{minPrice}</span>
              <span className="text-gray-600">₹{maxPrice}</span>
            </div>
            <input
              type="range"
              min="0"
              max="500"
              step="50"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
              className="w-full h-2 bg-amber-200 rounded-lg appearance-none cursor-pointer"
            />
            <input
              type="range"
              min="0"
              max="500"
              step="50"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full h-2 bg-amber-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductFilters;