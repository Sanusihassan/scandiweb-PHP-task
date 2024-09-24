import React, { useState } from 'react';

interface CartItemProps {
  imageUrl: string;
  title: string;
  price: string;
  initialQuantity: number;
  sizeOptions: string[];
  selectedSize: string;
  colorOptions: string[];
  selectedColor: string;
}

const CartItem: React.FC<CartItemProps> = ({
  imageUrl,
  title,
  price,
  initialQuantity,
  sizeOptions,
  selectedSize,
  colorOptions,
  selectedColor,
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      setQuantity(newQuantity);
    }
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="cart-item">
      <div className="item-details">
        <div className="item-title">{title}</div>
        <div className="item-price">{price}</div>
        <div className="item-size">
          <span>Size:</span>
          {sizeOptions.map((size) => (
            <button
              key={size}
              className={`cart-btn ${selectedSize === size ? "active" : ""}`}
            >
              {size}
            </button>
          ))}
        </div>
        <div className="item-color">
          <span>Color:</span>
          {colorOptions.map((color, index) => (
            <button
              key={index}
              className={`item-color-button btn-${color} btn-sm ${
                selectedColor === color ? "active" : ""
              }`}
              style={{
                backgroundColor: color
              }}
            >
              {" "}
            </button>
          ))}
        </div>

        <div className="quantity-control">
          <button className="quantity-decrease" onClick={handleDecrease}>-</button>
          <input
            type="number"
            className="quantity-input"
            value={quantity}
            onChange={handleQuantityChange}
            min="0"
          />
          <button className="quantity-increase" onClick={handleIncrease}>+</button>
        </div>

      </div>
      <div className="item-image">
        <img src={imageUrl} alt={title} />
      </div>
    </div>
  );
};

export default CartItem;