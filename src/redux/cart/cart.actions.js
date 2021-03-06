import { CartTypes } from './cart.types';

export const ToggleCartVisible = () => ({ type: CartTypes.TOGGLE_CART_HIDDEN });

export const AddItem = (item) => ({ type: CartTypes.ADD_ITEM, payload: item });

export const ClearItem = (item) => ({ type: CartTypes.CLEAR_ITEM_FROM_CART, payload: item });

export const DecreaseItem = (item) =>
  item.quantity === 1 ? ClearItem(item) : { type: CartTypes.SUBTRACT_ITEM, payload: item };
