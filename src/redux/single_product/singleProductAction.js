import axios from "axios";

const singleProductAction = (id) => (dispatch) => {

    dispatch({type: "GET_SINGLE_PRODUCT_REQUEST"});

    axios.get(`http://45.138.24.15:9000/api/products/${id}`)
        .then(responst => dispatch({type: "GET_SINGLE_PRODUCT_SUCCESS", payload: responst.data}))
        .catch(error => dispatch({type: "GET_SINGLE_PRODUCT_FAILURE"}))

}

export default singleProductAction;