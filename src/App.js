import React from 'react';
import ProductName from './Component/ProductName';
import ProductPrice from './Component/ProductPrice';
import ProductDescription from './Component/ProductDescription';
import ProductImage from './Component/ProductImage';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div>
      <h1>Product Details</h1>

      <Card style={{ width: '18rem' }}>
      
      <Card.Body>
       
      
        <Card.Title><ProductName /></Card.Title>
        <ProductImage />
        <Card.Text>
        <ProductDescription />
        <ProductPrice />
        </Card.Text>
        <Button variant="primary">add to cart</Button>
      </Card.Body>
    </Card>




      {/* <productImage/>
      <ProductName />
      <ProductPrice />
      <ProductDescription />
      <ProductImage /> */}
    </div>
  );
};

export default App;