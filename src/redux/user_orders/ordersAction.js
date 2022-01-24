import axios from "axios";

const ordersAction = () => (dispatch, getState) => {

    const headers = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getState().signupStates.data.token}`,
          }
    }

    dispatch({type: "GET_ORDERS_SEND"});

    axios.get('http://45.138.24.15:9000/api/orders/myorders', headers)
        .then(response => dispatch({type: "GET_ORDERS_SUCCESS", payload: response.data}))
        .catch(error => dispatch({type: "GET_ORDERS_FAILURE", payload: error.message}))
}

export default ordersAction;