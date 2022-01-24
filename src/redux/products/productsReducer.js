const initialState = {
    loading: false,
    products: [],
    error: ""
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_PRODUCTS_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "GET_PRODUCTS_SUCCESS":
            return {
                loading: false,
                products: action.payload
            }
        case "GET_PRODUCTS_FAILURE":
            return {
                loading: false,
                products: [],
                error: action.payload
            }
        default:
            return state;
    }
}

export default productsReducer;