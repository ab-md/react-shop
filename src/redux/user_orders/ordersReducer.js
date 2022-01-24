const initialState = {
    loading: false,
    ordersData: [],
    error: ""
}

const ordersReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case "GET_ORDERS_SEND":
            return {
                ...state,
                loading: true
            }

        case "GET_ORDERS_SUCCESS":
            return {
                ...state,
                loading: false,
                ordersData: action.payload
            }

        case "GET_ORDERS_FAILURE":
            return {
                loading: false,
                ordersData: [],
                error: action.payload
            }
    
        default:
            return state;
    }

}

export default ordersReducer;