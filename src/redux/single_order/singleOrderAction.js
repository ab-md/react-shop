import axios from "axios";

const singleOrderAction = (id) => (dispatch, getState) => {

    const headers = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getState().signupStates.data.token}`,
          } 
    }

    dispatch({type: "GET_SINGLE_PRODUCT_REQUEST"});

    axios.get(`http://45.138.24.15:9000/api/orders/${id}`, headers)
        .then(response => dispatch({type: "GET_SINGLE_PRODUCT_SUCCESS", payload: response.data}))
        .catch(error => dispatch({type: "GET_SINGLE_PRODUCT_FAILURE", payload: error.message}))

}

export default singleOrderAction;