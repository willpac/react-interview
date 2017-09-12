import React from 'react';

const Shoe = (props) => (
  <div >
    <div className="row">
      <div className='col s3'>
        {props.brand + "-" + props.name}
      </div>
    </div>
    <div className="row">
      <div className="col s3">
        R{props.price.toFixed(2)}
      </div>
    </div>

    <div className="row">
      <div className="col s5">
        <a className="waves-effect waves-light btn" href="#" onClick={(i) => props.onShoeSelect(props)}>Add to Cart</a>
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