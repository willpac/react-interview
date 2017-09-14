import React from 'react';
import {countByKey} from '../utils';

const Facet = (props) => (
  <div>
    <ul className='collection pointer'>
    {countByKey(props.items,'brand').map((item,index) => {
        return (<li className='collection-item' key={index} onClick={(i) => props.onFacetSelect(item)}>{item.brand + " (" + item.count + ")"}</li>  )
    })}
    </ul>
    </div>
);

Facet.propTypes = {
  items: React.PropTypes.array.isRequired,
  onFacetSelect: React.PropTypes.func
};

export default Facet;