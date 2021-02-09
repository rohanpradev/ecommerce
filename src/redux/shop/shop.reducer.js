import { SHOPTYPES } from './shop.types';

const INITIAL_STATE = {
  collections: [],
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOPTYPES.FETCH_COLLECTIONS_START:
      return { ...state, collections: action.payload };
    default:
      return state;
  }
};

export default shopReducer;
