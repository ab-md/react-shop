import axios from "axios";

const productsAction = () => async (dispatch) => {
    // dispatch({ type: "GET_PRODUCTS_REQUEST" });

    // axios.get('https://fakestoreapi.com/products')
    //     .then(response => dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: response.data }))
    //     .catch(error =>  dispatch({ type: "GET_PRODUCTS_FAILURE", payload: error.messege }))

    //main api: http://45.138.24.15:9000/api/products
    //fake store API: https://fakestoreapi.com/products

    try {
        dispatch({ type: "GET_PRODUCTS_REQUEST" });
        const { data } = await axios.get('http://45.138.24.15:9000/api/products')
        dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: data });
    } catch (error) {
        dispatch({ type: "GET_PRODUCTS_FAILURE", payload: error });
    }
}

export default productsAction;