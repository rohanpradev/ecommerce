import React from 'react';
import './category.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selector';
import { connect } from 'react-redux';

const CategoryPage = ({ collection: { items, title } }) => (
  <div className='category'>
    <h2 className='title'>{title}</h2>
    <div className='items'>
      {items.map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.categoryId)(state),
});

export default connect(mapStateToProps)(CategoryPage);
