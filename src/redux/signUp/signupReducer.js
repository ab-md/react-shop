const initialState = {
    loading: false,
    data: localStorage.getItem('user') ?
        JSON.parse(localStorage.getItem('user')) :
        {},
    error: ""
}

const saveInStorage = (user) => {
    localStorage.setItem('user', JSON.stringify(user))
}

const signupReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SIGNUP_REQUEST_SEND":
            return {
                ...state,
                loading: true
            }
        case "SIGNUP_REQUEST_SUCCESS":

            state.data = action.payload;
            saveInStorage(state.data);

            return {
                ...state,
                loading: false,
                data: state.data
                // data: action.payload
            }

        case "SIGNUP_REQUEST_FAILURE":
            return {
                loading: false,
                data: {},
                error: action.payload
            }

        case "SIGN_OUT":

            state.data = {};
            saveInStorage(state.data);


            return {
                loading: false,
                data: state.data,
                error: ""
            }

        default:
            return state;
    }
}

export default signupReducer;