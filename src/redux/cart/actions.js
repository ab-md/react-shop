const addToCart = (product) => {
    return {
        type: "ADD_TO_CART",
        payload: product
    }
}

const increament = (productId) => {
    return {
        type: "INCREAMENT",
        payload: productId
    }
}

const decreament = (productId) => {
    return {
        type: "DECREAMENT",
        payload: productId
    }
}

const deleteFromCart = (productId) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: productId
    }
}

const clearCart = () => {
    return {
        type: "CLEAR_CART"
    }
}

export { addToCart, increament, decreament, deleteFromCart, clearCart };