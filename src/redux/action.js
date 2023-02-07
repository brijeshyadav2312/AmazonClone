export function addProducts(product){
    return {
        type: "ADD_PRODUCT",
        product: product
    }
}

export function addProductsINCart(product){
    return {
        type: "ADD_PRODUCT_CART",
        product: product
    }
}

export function removeProductsINCart(id){
    return {
        type: "REMOVE_PRODUCT_CART",
        productId: id
    }
}