const STATE = [];

function addProductsReducer(state = STATE, action){
    switch (action.type) {
        case "ADD_PRODUCT":
            return [...state, action.product];
    
        default:
            return state;
    }
}
export default addProductsReducer;