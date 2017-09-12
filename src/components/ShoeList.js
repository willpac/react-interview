import React from 'react';
import Shoe from './Shoe';

const ShoeList = (props) => (
 <div>
      {props.shoes.map((shoe) => {
        return (<div key={shoe.id}>
            <Shoe name={shoe.name} brand={shoe.brand} price={shoe.price} onShoeSelect={props.onShoeSelect} />
          </div>)
      })}
   </div>
);

ShoeList.propTypes = {
  shoes: React.PropTypes.array.isRequired,
  onShoeSelect: React.PropTypes.func
};

export default ShoeList;

