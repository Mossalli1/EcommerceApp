import { actionTypes } from "../../constants";

const productReducer = (state = {}, action: {type: string, payload: any}) => {
    switch(action.type) {
        case "TEST":
            console.log("Test action ", action.payload);
            return [...state, action.payload]
        
        case "Add_To_ProductDetails":
            console.log("Add_To_ProductDetails action ", action.payload);
            return state
        case actionTypes.ADD_PRODUCT_LIST:
        console.log("ADD_PRODUCT_LIST action ", action.payload);
        return Object.assign({}, {productList: action.payload.items})

        case actionTypes.PRODUCT_DETAILS:
            console.log("ProductDetails action... ", action.payload);
            const product = state.productList.find((obj , index) => index === action.payload.items);
            return Object.assign({}, state, {productDetails: product}) 

        default:
            return state;    
    }
}

export default productReducer