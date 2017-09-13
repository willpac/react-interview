import React from 'react';

const CartSummary = (props) => {
  return (
    <div className="CartSummary">
      <h5>My Cart</h5>
      Total Items:&nbsp;
      <span className="ItemCount" id="ItemCount">
        {props.cart.length}
      </span>
      <br />
      Total Cost:&nbsp;
      <span className="TotalCost" id="TotalCost">
        {calculateTotalPrice(props.cart).toFixed(2)}
      </span>
    </div>
  )

  function calculateTotalPrice(cartItems) {
    return cartItems.reduce((a, b) => {
      return b["price"] == null ? a : a + b["price"];
    }, 0);
  }
};

CartSummary.propTypes = {
  cart: React.PropTypes.array.isRequired
};

export default CartSummary;
