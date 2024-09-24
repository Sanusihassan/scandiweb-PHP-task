import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ShopIcon from './icons/ShopIcon';
import CartIcon from './icons/CartIcon';
import Cart from './Cart/Cart';

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
                  to="/category/women"
                  className={({ isActive }: { isActive: boolean }) =>
                    isActive ? "link active" : "link"
                  }
                >
                  Women
                </NavLink>
              </li>
              <li className="category">
                <NavLink
                  to="/category/men"
                  className={({ isActive }: { isActive: boolean }) =>
                    isActive ? "link active" : "link"
                  }
                >
                  Men
                </NavLink>
              </li>
              <li className="category">
                <NavLink
                  to="/category/kids"
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
          <Cart handleCartClick={this.handleCartClick} cartVisible={this.state.cartVisible} />
          </nav>
        </section>
      </header>
    );
  }
}

export default Header;