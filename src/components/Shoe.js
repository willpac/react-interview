import React from 'react';

const Shoe = (props) => (
  <div>
    <ul>
      <li>
        {props.brand}
      </li>
      <li>
        {props.name}
      </li>
      <li>
        {props.price.toFixed(2)}
      </li>
      <li>
        <a className="waves-effect waves-light btn" href="#" onClick={(i) => props.onShoeSelect(props)}>Add to Cart</a>
      </li>
    </ul>
  </div>
);

Shoe.propTypes = {
  brand: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  price: React.PropTypes.number.isRequired,
  onShoeSelect: React.PropTypes.func,
};

export default Shoe;