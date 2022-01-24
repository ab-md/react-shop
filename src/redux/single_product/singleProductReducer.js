const initialState = {
    loading: false,
    productData: {},
    error: ""
}

const singleProductReducer = (state = initialState  , action) => {

    switch (action.type) {

        case "GET_SINGLE_PRODUCT_REQUEST":
            return {
                ...state,
                loading: true
            }

        case "GET_SINGLE_PRODUCT_SUCCESS":
            return {
                ...state,
                loading: false,
                productData: action.payload
            }

        case "GET_SINGLE_PRODUCT_FAILURE":
            return {
                loading: false,
                productData: {},
                error: action.payload
            }
    
        default:
            return state;
    }

}

export default singleProductReducer;