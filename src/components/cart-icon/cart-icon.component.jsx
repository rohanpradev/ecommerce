import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { ToggleCartVisible } from '../../redux/cart/cart.actions';

const CartIcon = ({ toggleVisibility }) => {
  return (
    <div className='cart-icon' onClick={toggleVisibility}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({ toggleVisibility: () => dispatch(ToggleCartVisible()) });

export default connect(null, mapDispatchToProps)(CartIcon);
