import { Component } from 'react';
import { ProductList } from '../components/ProudctList';

class Women extends Component {
  render() {
    // Dummy data for products
    const dummyProducts = [
      {
        id: 1,
        name: 'Stylish Dress',
        price: 49.99,
        imageUrl: 'https://via.placeholder.com/200x150?text=Stylish+Dress'
      },
      {
        id: 2,
        name: 'Elegant Shoes',
        price: 89.99,
        imageUrl: 'https://via.placeholder.com/200x150?text=Elegant+Shoes'
      },
      {
        id: 3,
        name: 'Chic Handbag',
        price: 129.99,
        imageUrl: 'https://via.placeholder.com/200x150?text=Chic+Handbag'
      }
    ];

    return (
      <div className="container">
        <h1>Women</h1>
        <ProductList products={dummyProducts} />
      </div>
    );
  }
}

export default Women;
