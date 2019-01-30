import { actionTypes } from "../constants";

const productReducer = (
  state = { cartList: [] },
  // state = {},
  action: { type: string, payload: any }
) => {
  switch (action.type) {
    // case "TEST":
    //     console.log("Test action ", action.payload);
    //     return [...state, action.payload]

    // case "Add_To_ProductDetails":
    //     console.log("Add_To_ProductDetails action ", action.payload);
    //     return state

    //Added data to home screen
    case actionTypes.ADD_PRODUCT_LIST:
      console.log("ADD_PRODUCT_LIST action ", action.payload);
      return Object.assign({}, state, { productList: action.payload.items });

    //Added data to products details screen
    case actionTypes.PRODUCT_DETAILS:
      console.log("ProductDetails action... ", action.payload);
      const product = state.productList.find(
        (obj, index) => index === action.payload.items
      );
      return Object.assign({}, state, { productDetails: product });

    //Added data to cart by Rayhan Vaia
    // case actionTypes.ADD_PRODUCT_TO_CART:
    //   let cartList = state.cartList.length > 0 ? state.cartList : [];
    //   cartList.push(action.payload.items);
    //   console.log("Cart action......", cartList);
    //   return Object.assign({}, state, {
    //     cartList
    //   });

    //Added data to cart

    // case actionTypes.ADD_PRODUCT_TO_CART:
    //   let cartList = [];
    //   console.log("Cart action......", cartList);
    //   // return {
    //   //   ...state,
    //   //   cartList: [...state.cartList, action.payload.items] //Added Here Without filtering, thats why array take dupliat items
    //   return {
    //     ...state,
    //     cartList: [...state.cartList, action.payload.items].filter(
    //       (val, id, array) => array.indexOf(val) == id
    //     ) // Removed Duplicate Item by filtering
    //   };

    case actionTypes.ADD_PRODUCT_TO_CART:
      let cartList = [];
      console.log("Cart action......", cartList);
      return Object.assign({}, state, {
        cartList: [...state.cartList, action.payload.items].filter(
          (val, id, array) => array.indexOf(val) == id
        )
      });

    case actionTypes.REMOE_PRODUCT_FROM_CART:
      console.log("Remove action......", cartList);
      return Object.assign({}, state, {
        cartList: [state.cartList].filter(item => item !== action.payload.items)
      });

    // return state.cartList.filter(
    //   cartList => cartList !== action.payload.items
    // );

    default:
      return state;
  }
};

export default productReducer;
