const initialState = {
    loading: false,
    data: {},
    error: ""
}

const editProfileReducer = (state = initialState, action) => {

    switch (action.type) {

        case "EDIT_REQUEST_SEND":
            return {
                ...state,
                loading: true
            }

        case "EDIT_REQUEST_SUCCESS":
            return {
                ...state,
                loading: false,
                data: action.payload
            }

        case "EDIT_REQUEST_FAILURE":
            return {
                loading: false,
                data: {},
                error: action.payload
            }
    
        default:
            return state;
    }

}

export default editProfileReducer;