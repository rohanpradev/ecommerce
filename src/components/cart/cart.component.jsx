import React from 'react';
import './cart.styles.scss';
import FormButton from '../form-button/form-button.component';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';

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

const mapStateToProps = (state) => ({ items: selectCartItems(state) });

export default connect(mapStateToProps)(Cart);
