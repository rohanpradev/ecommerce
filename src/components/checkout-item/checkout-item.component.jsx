import React from 'react';
import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import { ClearItem, AddItem, DecreaseItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div onClick={() => removeItem(cartItem)} className='arrow'>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div onClick={() => addItem(cartItem)} className='arrow'>
          &#10095;
        </div>
      </span>
      <span className='price'>${price}</span>
      <div className='remove-button' onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(ClearItem(item)),
  addItem: (item) => dispatch(AddItem(item)),
  removeItem: (item) => dispatch(DecreaseItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
