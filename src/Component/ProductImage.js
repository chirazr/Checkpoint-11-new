import React from 'react';
import Product from '../Product';

const ProductImage = () => {
  return <img src={Product.image} alt={Product.name} style={{ maxWidth: '200px' }} />;
};

export default ProductImage;