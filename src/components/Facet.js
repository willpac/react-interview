import React from 'react';
import {countByKey} from '../utils';

const Facet = (props) => (
  <div>{countByKey(props.shoes,'brand').map(item => {
    return <li> {item.brand}</li>
    
    })}</div>
);

Facet.propTypes = {
  items: React.PropTypes.array.isRequired,
  onFacetSelect: React.PropTypes.func
};

export default Facet;