import React, { Component } from 'react';
import { FaShoppingCart, FaStore } from 'react-icons/fa';
import ShopIcon from './icons/ShopIcon';

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
        <ul className="categories">
          <li className="category">Women</li>
          <li className="category">Men</li>
          <li className="category">Kids</li>
        </ul>

        <div className="shop-icon">
          <ShopIcon />
        </div>

        <div className="cart" onClick={this.handleCartClick}>
          <FaShoppingCart />
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
