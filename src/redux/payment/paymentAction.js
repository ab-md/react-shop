import axios from "axios";
import { submitOrders } from "../../assets/scripts/submitOrders";

const paymentAction = (itemsList, shipping) => (dispatch, getState) => {
    const data = {
        // "orderItems": [itemsList],
        "orderItems": submitOrders(itemsList.cart),
        "shippingAddress": shipping,
        "paymentMethod": "online",
        "itemsPrice": itemsList.price,
        "shippingPrice": '0',
        "totalPrice": itemsList.total
    }

    const headers = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getState().signupStates.data.token}`,
        }
    }

    dispatch({ type: "PAYMENT_REQUEST_SEND" });

    axios.post('http://45.138.24.15:9000/api/orders', data, headers)
        .then(response => dispatch({ type: "PAYMENT_REQUEST_SUCCESS", payload: response.data }))
        .catch(error => dispatch({ type: "PAYMENT_REQUEST_FAILURE", payload: error.message }))
}

export default paymentAction;