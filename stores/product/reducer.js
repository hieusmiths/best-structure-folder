import { PRODUCT_CATEGORY_GET_LIST } from './actionType';

const initState = { listCategory: [] };
export default function reducer(state = initState, action) {
  switch (action.type) {
    case PRODUCT_CATEGORY_GET_LIST: {
      return {
        ...state,
        listCategory: action.payload,
      };
    }
    default:
      return state;
  }
}
