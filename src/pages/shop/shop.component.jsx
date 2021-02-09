import React, { useEffect } from 'react';
import './shop.styles.scss';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CategoryPage from '../category/category.component';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchShopData } from '../../redux/shop/shop.actions';

const Shop = ({ match, fetchShopData }) => {
  
  useEffect(() => {
    fetchShopData();
  }, [fetchShopData]);

  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
    </div>
  );
};

export default connect(null, { fetchShopData })(Shop);
