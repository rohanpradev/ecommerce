import { CartTypes } from './cart.types';
import { addItemsToCart } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartTypes.ADD_ITEM:
      return { ...state, cartItems: addItemsToCart(state.cartItems, action.payload) };
    case CartTypes.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    case CartTypes.CLEAR_ITEM_FROM_CART:
      return { ...state, cartItems: state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id) };
    default:
      return state;
  }
};

export default cartReducer;
