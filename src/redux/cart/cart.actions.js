import { CartTypes } from './cart.types';

export const ToggleCartVisible = () => ({ type: CartTypes.TOGGLE_CART_HIDDEN });
export const AddItem = (item) => ({ type: CartTypes.ADD_ITEM, payload: item });
