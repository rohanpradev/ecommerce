import React from 'react';
import './cart.styles.scss';
import FormButton from '../form-button/form-button.component';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { ToggleCartVisible } from '../../redux/cart/cart.actions';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

const Cart = ({ items, history, dispatch }) => {
  const handleClick = () => {
    history.push('/checkout');
    dispatch(ToggleCartVisible());
  };

  return (
    <div className='cart'>
      <div className='cart-items'>
        {items.length ? (
          items.map((item) => <CartItem key={item.name} item={item} />)
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <FormButton onClick={handleClick}>go to checkout</FormButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({ items: selectCartItems });

export default withRouter(connect(mapStateToProps)(Cart));
