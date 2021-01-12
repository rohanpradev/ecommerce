import React from 'react';
import './cart.styles.scss';
import FormButton from '../form-button/form-button.component';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';

const Cart = ({ items }) => {
  return (
    <div className='cart'>
      <div className='cart-items'>
        {items.map((item) => (
          <CartItem key={item.name} item={item} />
        ))}
      </div>
      <FormButton>go to checkout</FormButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({ items: cartItems });

export default connect(mapStateToProps)(Cart);
