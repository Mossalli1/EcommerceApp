// @flow
import { actionTypes } from "../../constants";

export function addProducts(value:[]) {
    return {
        type: actionTypes.ADD_PRODUCT_LIST,
        payload: {
            items: value
        }
    }
}

export function productDetails(index: string) {
  //  Console.log('..............>', index)
    return {
        type: actionTypes.PRODUCT_DETAILS,
        payload: {
            items: index
        }
    }
}