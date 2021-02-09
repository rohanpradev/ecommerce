import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectShopCollection = createSelector([selectShop], (shop) => shop.collections);

export const selectCollection = (urlParam) =>
  createSelector([selectShopCollection], (collections) =>
    collections && collections.length > 0 ? collections.find((coll) => coll.routeName === urlParam) : []
  );
