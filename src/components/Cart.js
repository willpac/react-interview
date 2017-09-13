import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => (
 <div>
     <h5>My Cart Items </h5>
      {props.items.map((item) => {
        return (<div key={item.id} >
            <CartItem key={item.id} name={item.name} brand={item.brand} price={item.price} onCartItemRemove={props.onCartItemRemove} />
          </div>)
      })}
   </div>
);
Cart.propTypes = {
  items: React.PropTypes.array.isRequired,
  onCartItemRemove: React.PropTypes.func
};

export default Cart;
