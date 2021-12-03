import React from 'react';
import Button from './UI/Button';

interface ProductProps {
    description: string;
    name: string;
    price: number;
    image: string;
}

const Product = (props: ProductProps) => {
    const {description, price, image, name} = props;
    return (
        <div className="product">
  <div className="product-image-container">
    <img src={image} width="100" height="100" className="product-image" alt="product name here"
    />
    <div className="product-quantity-container">
      <div className="product-quantity">0</div>
    </div>
  </div>
  <div className="product-info">
    <h3>{name}</h3>
    <p>{description}</p>
  </div>
  <div className="product-checkout">
    <div>
        <Button className="product-delete btn-outline">x</Button>
    </div>
    <Button className='btn-outline'>${price}</Button>
  </div>
</div>)
}

export default Product;
