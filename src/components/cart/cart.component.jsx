import React from 'react';
import './cart.styles.scss';
import FormButton from '../form-button/form-button.component';

const Cart = () => {
  return (
    <div className='cart'>
      <div className='cart-items'></div>
      <FormButton>go to checkout</FormButton>
    </div>
  );
};

export default Cart;
