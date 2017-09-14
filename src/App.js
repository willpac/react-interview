import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Api from './api';
import ShoeList from './components/ShoeList';
import CartSummary from './components/CartSummary';
import Facet from './components/Facet';
import Cart from './components/Cart';
import { createStore } from 'redux';
import storeApp from './reducers/reducers';
import initialState from './reducers/reducers';

let store = createStore(storeApp);
class App extends Component {
  /**
   * TIP:
   *  - this.state = {...}
   *  - this.someFunction = this.someFunction.bind(this)
   * */
  constructor(props) {
    super(props);
    this.state = {
      shoes: [],
      cart: [],
      facetSelected: null
    };
    this.storage = null;

    this.handleShoeSelect = this.handleShoeSelect.bind(this);
    this.handleFacetSelect = this.handleFacetSelect.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
    this.handleClearCart = this.handleClearCart.bind(this);
    this.getStoreState = this.getStoreState.bind(this);
    let subscribeToCartChange = store.subscribe(() => {
      this.setState({ cart: store.getState().cart });
      if (this.storage) {
        this.storage.setItem('cart', JSON.stringify(store.getState().cart.cart));
      }
    });

  }

  /**
   * TIP:
   *  - Api.getShoes() returns a promise
   *  - this.setState() might be useful
   * */
  getStoreState(){
    return store.getState();
  }
  componentDidMount() {
    Api.getShoes().then(shoes => {
      this.setState({ shoes: shoes })
    });

    this.storage = localStorage;
    store.dispatch({
      type:'SET_CART_ITEMS',
      items: JSON.parse(this.storage.getItem('cart')) || []
    });
  }
  handleRemoveFromCart(cartItem) {
    store.dispatch({
      type: "REMOVE_FROM_CART",
      item: cartItem
    });
  }
  handleClearCart() {
    store.dispatch({
      type: "CLEAR_CART",
    });

  }
  handleShoeSelect(shoe) {
    store.dispatch({
      type: 'ADD_TO_CART',
      item: shoe
    });
  }
  handleFacetSelect(facet) {
    const currentFacet = this.state.facetSelected;
    if (JSON.stringify(currentFacet) === JSON.stringify(facet)) {
      this.setState({ facetSelected: null });
      Api.getShoes().then(shoes => {
        this.setState({ shoes: shoes })
      });
    }
    else {
      this.setState({ facetSelected: facet })
      var filteredShoes = this.state.shoes.filter(item => {
        return item.brand === facet.brand
      });
      this.setState({ shoes: filteredShoes });
    }
  }
  render() {
    return (
      <div>

        <NavBar title="Super duper awesome store" />

        <div className="row">

          <div className="col s3">
            <h5>Filter by brand</h5>
            <Facet items={this.state.shoes} onFacetSelect={this.handleFacetSelect} />
          </div>

          <div className="col s6">
            <h5>Products</h5>
            <ShoeList shoes={this.state.shoes} onShoeSelect={this.handleShoeSelect} />
          </div>

          <div className="col s3">
            <Cart items={store.getState().cart.cart} onCartItemRemove={this.handleRemoveFromCart} />
            <a href='#' onClick={this.handleClearCart}>Clear Cart</a>
            <hr />
            <CartSummary cart={store.getState().cart.cart} />
          </div>

        </div>
      </div>

    );
  }
}

export default App;
