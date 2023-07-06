import React from 'react';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [ProductList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProduct = async () => {
    let searchQuery = query.get('q') || '';
    console.log('쿼리값은?', searchQuery);
    let url = `https://my-json-server.typicode.com/Dami-LEE00/reactshoppingmall/products?q=${searchQuery}`;
    console.log(url);
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data);
    setProductList(data);
  }

  useEffect(() => {
    getProduct();
  }, [query])
  return (
    <div>
      <Container>
        <Row>
          {ProductList.map((item) => (
            <Col md={3} sm={12} key={item.id}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll;
