const initialState = {
    loading: false,
    data: localStorage.getItem('user') ?
        JSON.parse(localStorage.getItem('user')) :
        {},
    error: ""
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_REQUEST_SEND":
            return {
                ...state,
                loading: true
            }
        case "LOGIN_REQUEST_SUCCESS":
            
            state.data = localStorage.setItem('user', JSON.stringify(action.payload));

            return {
                ...state,
                loading: false,
                data: state.data
            }
        case "LOGIN_REQUEST_FAILURE":
            return {
                loading: false,
                data: {},
                error: action.payload
            }

        default:
            return state;
    }
}

export default loginReducer;