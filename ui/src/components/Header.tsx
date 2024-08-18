import React, { Component } from 'react';
import { FaShoppingCart, FaStore } from 'react-icons/fa';

interface HeaderState {
  cartVisible: boolean;
}

class Header extends Component<{}, HeaderState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      cartVisible: false,
    };
  }

  handleCartClick = () => {
    this.setState((prevState) => ({
      cartVisible: !prevState.cartVisible,
    }));
  };

  render() {
    const { cartVisible } = this.state;

    return (
      <header className="header">
        <div className="categories">
          <span className="category">Women</span>
          <span className="category">Men</span>
          <span className="category">Kids</span>
        </div>

        <div className="shopIcon">
          <FaStore className="icon" as any />
        </div>

        <div className="cart" onClick={this.handleCartClick}>
          <FaShoppingCart className="icon" as any />
          <div className={`cartDropdown ${cartVisible ? 'visible' : ''}`}>
            <span className="cartItem">No items in cart</span>
            {/* Add more cart items here */}
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
