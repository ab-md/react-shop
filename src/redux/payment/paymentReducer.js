const initialState = {
    loading: false,
    data: {},
    error: ''
}

const paymentReducer = (state = initialState, action) => {
    switch (action) {
        case "PAYMENT_REQUEST_SEND":
            return {
                ...state,
                loading:true
            }
        case "PAYMENT_REQUEST_SUCCESS":
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case "PAYMENT_REQUEST_FAILURE":
            return {
                loading: false,
                data: {},
                error: action.payload
            }
    
        default:
            return state;
    }
}

export default paymentReducer;