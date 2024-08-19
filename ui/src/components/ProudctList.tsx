import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

interface ProductListProps {
  products: Product[];
}

export class ProductList extends React.Component<ProductListProps> {
  render() {
    const { products } = this.props;

    return (
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <div className="product-info">
              <p className="product-name">{product.name}</p>
              <strong className="product-price">${product.price.toFixed(2)}</strong>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
