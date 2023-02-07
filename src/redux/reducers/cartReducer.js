const CART = [];

function cartReducer(state = CART, action){
    switch (action.type) {
        case "ADD_PRODUCT_CART":
            return [...state, action.product];
        case "REMOVE_PRODUCT_CART":
            return state.filter((ele) => ele.id!==action.productId);
        default:
            return state;
    }
}
export default cartReducer;