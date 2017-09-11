import React from 'react';
import Shoe from './Shoe';

const ShoeList = (props) => (
 <div>
      {props.shoes.map((shoe) => {
        return (<div>
            <Shoe key={shoe.id} name={shoe.name} brand={shoe.brand} price={shoe.price} />
          </div>)
      })}
   </div>
);

ShoeList.propTypes = {
  shoes: React.PropTypes.array.isRequired,
  onShoeSelect: React.PropTypes.func
};

export default ShoeList;

