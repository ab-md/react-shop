import axios from "axios";

const loginAction = (email, password) => (dispatch) => {
    const data = {
        "email": email,
        "password": password
    }

    dispatch({
        type: "SIGNUP_REQUEST_SEND"
    })

    axios.post('http://45.138.24.15:9000/api/users/login', data)
        .then(response => dispatch({type: "SIGNUP_REQUEST_SUCCESS", payload: response.data}))
        .catch(error => dispatch({type: "SIGNUP_REQUEST_FAILURE", payload: error.message}))

    // dispatch({
    //     type: "LOGIN_REQUEST_SEND",
    // })

    // axios.post('http://45.138.24.15:9000/api/users/login', data)
    //     .then(response => dispatch({type: "LOGIN_REQUEST_SUCCESS", payload: response.data}))
    //     .catch(error => dispatch({type: "LOGIN_REQUEST_FAILURE", payload: error.message}))
}

export const signOut = (user) => {
    
    return {
        type: "SIGN_OUT",
        payload: user
    }

}

export default loginAction;