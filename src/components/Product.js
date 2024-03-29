import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Product = ({product}) => {
  return ( 
    // 7a tmro2 3lyon kelon la2n bl homescreen 7atin <Product/> bi map
    <Card className=' my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top'/>
      </Link>
      <Card.Body>
      <Link to={`/product/${product._id}`}>
        <Card.Title as ='div'>
          <strong> {product.name}</strong>
        </Card.Title>
      </Link>
      <Card.Text as='div'>
        <Rating 
        value={product.rating ?product.rating:0}
         text={`${product.numReviews} reviews`}/>
      </Card.Text>
      <Card.Text as='h3'>${product.price}</Card.Text>


      </Card.Body>

    </Card>
  )
}

export default Product;