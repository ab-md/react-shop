import axios from "axios";

const editProfileAction = (name, email, password) => (dispatch, getState) => {

    const data = {
        "name": name,
        "email": email,
        "password": password
    }

    const headers = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getState().signupStates.data.token}`,
        }
    }

    dispatch({ type: "EDIT_REQUEST_SEND" });

    axios.put('http://45.138.24.15:9000/api/users/profile', data, headers)
        .then(response => dispatch({ type: "EDIT_REQUEST_SUCCESS", payload: response.data }))
        .catch(error => dispatch({ type: "EDIT_REQUEST_FAILURE", payload: error.message }))
}

export default editProfileAction;