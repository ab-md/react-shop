import axios from "axios"

const signupAction = (name, email, password) => (dispatch) => {
    const data = {
        "name": name,
        "email": email,
        "password": password
    }

    dispatch({
        type: "SIGNUP_REQUEST_SEND"
    })

    axios.post('http://45.138.24.15:9000/api/users', data)
        .then(response => dispatch({type: "SIGNUP_REQUEST_SUCCESS", payload: response.data}))
        .catch(error => dispatch({type: "SIGNUP_REQUEST_FAILURE", payload: error.message}))
}

export default signupAction;