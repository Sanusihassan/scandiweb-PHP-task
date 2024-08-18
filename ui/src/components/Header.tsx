import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ShopIcon from './icons/ShopIcon';
import CartIcon from './icons/CartIcon';

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
        <section className="container">
          <nav className="nav">
            <ul className="categories">
              <li className="category">
                <NavLink
                  to="/women"
                  className={({ isActive }: { isActive: boolean }) =>
                    isActive ? "link active" : "link"
                  }
                >
                  Women
                </NavLink>
              </li>
              <li className="category">
                <NavLink
                  to="/men"
                  className={({ isActive }: { isActive: boolean }) =>
                    isActive ? "link active" : "link"
                  }
                >
                  Men
                </NavLink>
              </li>
              <li className="category">
                <NavLink
                  to="/kids"
                  className={({ isActive }: { isActive: boolean }) =>
                    isActive ? "link active" : "link"
                  }
                >
                  Kids
                </NavLink>
              </li>
            </ul>
            <div className="shop-icon">
              <ShopIcon />
            </div>
            <div className="cart" onClick={this.handleCartClick}>
              <CartIcon />
              <div className={`cart-dropdown${cartVisible ? ' visible' : ''}`}>
                <span className="cartItem">No items in cart</span>
              </div>
            </div>
          </nav>
        </section>
      </header>
    );
  }
}

export default Header;