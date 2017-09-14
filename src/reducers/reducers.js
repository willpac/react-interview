import { combineReducers } from 'redux'
import React from 'react';
const initialState = {
    shoes: [],
    cart:   [],
    facetSelected: null
}

function cart(state = initialState , action) {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_CART':
            {
                var cart = state.cart.slice();
                cart.push(action.item);
                state.cart = cart;
                return state;
            }
        case 'REMOVE_FROM_CART': {
            var cart = state.cart.slice();
            var cartItem = action.item;
            var index = cart.findIndex((item) => (item.brand === cartItem.brand && item.name === cartItem.name && item.price === cartItem.price));

            if (index > -1) {
                cart.splice(index, 1);
                state.cart = cart;
                return state;
            }
            return state;
        }
        case 'CLEAR_CART':{
            state.cart = [];
            return state;
        }
        case 'SET_CART_ITEMS':
        {
            state.cart = action.items;
            return state;
        }
        default:
            return state;
    }
}

const storeApp = combineReducers({
    cart
});

export default storeApp;