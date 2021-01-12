export const addItemsToCart = (cartItems, newItem) => {
  const existingCartItems = cartItems.find((item) => item.id === newItem.id);
  if (existingCartItems) {
    return cartItems.map((item) => (item.id === newItem.id ? { ...item, quantity: (item.quantity || 0) + 1 } : item));
  }
  return [...cartItems, { ...newItem, quantity: 1 }];
};
