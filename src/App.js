import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Api from './api';
import ShoeList from './components/ShoeList';
import CartSummary from './components/CartSummary';
import Facet from './components/Facet';
import Cart from './components/Cart';

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
      cart: JSON.parse(localStorage.getItem('cart')) || [],
      facetSelected: null
    };
    this.handleShoeSelect = this.handleShoeSelect.bind(this);
    this.handleFacetSelect = this.handleFacetSelect.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
    this.handleClearCart = this.handleClearCart.bind(this);
  }

  /**
   * TIP:
   *  - Api.getShoes() returns a promise
   *  - this.setState() might be useful
   * */
  componentDidMount() {
    Api.getShoes().then(shoes => {
      this.setState({ shoes: shoes })
    });
  }
  handleRemoveFromCart(cartItem) {
    var cart = this.state.cart.slice();
    var index = cart.findIndex((item) => (item.brand === cartItem.brand && item.name === cartItem.name && item.price === cartItem.price));

    if (index > -1) {
      cart.splice(index, 1);
      localStorage.setItem('cart',JSON.stringify(cart));
      this.setState({ cart: cart });
    }
  }
  handleClearCart() {
    localStorage.removeItem('cart');
    this.setState({ cart: [] });
  }
  handleShoeSelect(shoe) {
    var cart = this.state.cart.slice();
    cart.push(shoe);
    localStorage.setItem('cart',JSON.stringify(cart));
    this.setState({ cart: cart });
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
            <Cart items={this.state.cart} onCartItemRemove={this.handleRemoveFromCart} />
            <a href='#' onClick={this.handleClearCart}>Clear Cart</a>
            <hr />
            <CartSummary cart={this.state.cart} />
          </div>

        </div>
      </div>

    );
  }
}

export default App;
