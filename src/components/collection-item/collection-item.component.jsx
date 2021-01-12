import React from 'react';
import './collection-item.styles.scss';
import FormButton from '../form-button/form-button.component';
import { connect } from 'react-redux';
import { AddItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;
  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <FormButton onClick={() => addItem(item)} inverted>
        Add to cart
      </FormButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(AddItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
