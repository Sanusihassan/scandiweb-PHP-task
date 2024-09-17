import { Component } from "react";
import CartItem from "./CartItem";
import CartIcon from "../icons/CartIcon";

interface CartProps {
  handleCartClick: () => void;
  cartVisible: boolean;
}

class Cart extends Component<CartProps> {
  render() {
    const { handleCartClick, cartVisible } = this.props;

    return (
      <div className="cart">
        <CartIcon onClick={handleCartClick} />
        <div className={`dropdown-wrapper${cartVisible ? " visible" : ""}`}>
          <div className={`cart-dropdown${cartVisible ? " visible" : ""}`}>
            <h5>My Bag, 3 items</h5>

            {/* Cart Item 1 */}
            <CartItem
              imageUrl="/test.svg"
              title="Running Short"
              price="$50.00"
              initialQuantity={1}
              sizeOptions={["XS", "S", "M", "L"]}
              selectedSize="S"
              colorOptions={["#2c3e50", "#2f3640", "#44bd32"]}
              selectedColor="#2f3640"
            />

            {/* Cart Item 2 */}
            <CartItem
              imageUrl="/test2.svg"
              title="Wayfarer"
              price="$75.00"
              initialQuantity={2}
              sizeOptions={["S", "M"]}
              selectedSize="M"
              colorOptions={["#e74c3c", "#27ae60", "#8e44ad"]}
              selectedColor="#e74c3c"
            />

            {/* Cart Total */}
            <div className="cart-total">
              <span>Total</span>
              <strong>$200.00</strong>
            </div>

            {/* Checkout Button */}
            <button className="checkout-btn">Place Order</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
