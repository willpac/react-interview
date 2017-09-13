import React from 'react';

const CartItem = (props) => (
  <div>
    <li key={props.id}>{"(" + props.brand + ")" + props.name + " - R " + props.price.toFixed(2)}
      &nbsp; <a href="#" onClick={(i) => props.onCartItemRemove(props)}>X</a>
    </li>
  </div>
);
CartItem.propTypes = {
  brand: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  price: React.PropTypes.number.isRequired,
  onCartItemRemove: React.PropTypes.func,
};

export default CartItem;
