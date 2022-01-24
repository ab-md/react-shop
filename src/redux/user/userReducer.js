const initialState = {
    loading: false,
    userData: {},
    error: ""
}

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case "USER_DATA_REQUEST":
            return {
                ...state,
                loading: true
            }

        case "USER_DATA_RESIVED":
            return {
                ...state,
                loading: false,
                userData: action.payload
            }

        case "USER_DATA_FAILURE":
            return {
                loading: false,
                userData: {},
                error: action.payload
            }
    
        default:
            return state;
    }

}

export default userReducer;