import { createStore } from 'redux';
import Cart1 from './Cart1';

const initialState = {
    cartItems: []
};
export const addToCart = (item) => ({
    type: 'ADD_TO_CART',
    payload: item
});


const cartReducer = (state = initialState, action) => {
    console.log(action.payload);
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        
        default:
            return state;
    }
};



 export const store = createStore(cartReducer);

