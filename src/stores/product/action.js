import { PRODUCT_CATEGORY_GET_LIST } from './type'

export const getListCategory = list => {
    return {
    type: PRODUCT_CATEGORY_GET_LIST,
    payload: list
    }
}
