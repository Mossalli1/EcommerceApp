// @flow
import { actionTypes } from "../constants";

export function addProducts(value: []) {
  return {
    type: actionTypes.ADD_PRODUCT_LIST,
    payload: {
      items: value
    }
  };
}

export function productDetails(index: string) {
  //  Console.log('..............>', index)
  return {
    type: actionTypes.PRODUCT_DETAILS,
    payload: {
      items: index
    }
  };
}

export function addProductToCart(index: string) {
  //  Console.log('..............>', index)
  return {
    type: actionTypes.ADD_PRODUCT_TO_CART,
    payload: {
      items: index
    }
  };
}

export function removeProductFromCart(index: string) {
  return {
    type: actionTypes.REMOE_PRODUCT_FROM_CART,
    payload: {
      items: index
    }
  };
}
