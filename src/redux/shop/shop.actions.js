import SHOP_DATA from '../../pages/shop/shop.data';
import { SHOPTYPES } from './shop.types';

const fetchData = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(SHOP_DATA);
    }, 2000);
  });

export const fetchShopData = () => async (dispatch) => {
  const collections = await fetchData();
  dispatch({ type: SHOPTYPES.FETCH_COLLECTIONS_START, payload: collections });
};
