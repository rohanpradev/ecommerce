import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { ToggleCartVisible } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleVisibility, itemCount }) => {
  return (
    <div className='cart-icon' onClick={toggleVisibility}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({ toggleVisibility: () => dispatch(ToggleCartVisible()) });

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
