import axios from 'axios';

const userAction = () => (dispatch, getState) => {

    const header = {
        'headers': {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getState().signupStates.data.token}`,
        }
    }

    dispatch({ type: "USER_DATA_REQUEST" });

    axios.get('http://45.138.24.15:9000/api/users/profile', header)
        .then(response => dispatch({ type: "USER_DATA_RESIVED", payload: response.data }))
        .catch(error => dispatch({ type: "USER_DATA_FAILURE", payload: error.message }))
}

export default userAction;