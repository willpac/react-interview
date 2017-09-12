import React from 'react';

const CartSummary = (props) => {
  return (
    <div className="CartSummary">
      <span className="ItemCount" id="ItemCount">
       {props.cart.length}
      </span>
      <br/>
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

/*{props.cart.map(cartItem => {
      return (
          <div className="row">
            {cartItem.name} - {cartItem.price}
            </div>)
    })}*/