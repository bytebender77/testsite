import React from 'react';

interface ProductGalleryProps {
  mainImage: string;
  productName: string;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ mainImage, productName }) => {
  return (
    <div className="w-full">
      <div className="relative rounded-lg overflow-hidden">
        <img 
          src={mainImage} 
          alt={productName} 
          className="w-full h-96 object-cover"
        />
      </div>
    </div>
  );
};

export default ProductGallery;