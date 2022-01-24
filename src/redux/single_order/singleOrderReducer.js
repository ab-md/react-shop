const initialState = {
    loading: false,
    orderData: {},
    error: ""
}

const singleOrderReducer = (state = initialState, action) => {

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
                orderData: action.payload
            }

        case "GET_SINGLE_PRODUCT_FAILURE":
            return {
                loading: false,
                orderData: {},
                error: action.payload
            }
    
        default:
            return state;
    }

}

export default singleOrderReducer;