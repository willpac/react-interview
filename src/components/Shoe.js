import React from 'react';

const Shoe = (props) => (

  <div className="row">
    <div className="col s12 m9">
      <div className="card horizontal">
        <div className='card-stacked'>
          <div className="card-content">
            <h5> {props.brand + ">" + props.name}</h5>
            <p> R{props.price.toFixed(2)}</p>
          </div>
          <div className="card-action">
            <a href="#" onClick={(i) => props.onShoeSelect(props)}>Add to Cart</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Shoe.propTypes = {
  brand: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  price: React.PropTypes.number.isRequired,
  onShoeSelect: React.PropTypes.func,
};

export default Shoe;