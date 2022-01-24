import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import productsReducer from "./products/productsReducer";
import cartReducer from "./cart/reducers";
import signupReducer from "./signUp/signupReducer";
import paymentReducer from "./payment/paymentReducer";
import userReducer from "./user/userReducer";
import ordersReducer from "./user_orders/ordersReducer";
import editProfileReducer from "./edit_profile/editProfReducer";
import singleProductReducer from "./single_product/singleProductReducer";
import singleOrderReducer from "./single_order/singleOrderReducer";

const myReducers = combineReducers({
    getProducts: productsReducer,
    singleProductState: singleProductReducer,
    cartState: cartReducer,
    signupStates: signupReducer,
    userState: userReducer,
    editProfStates: editProfileReducer,
    paymentState: paymentReducer,
    ordersState: ordersReducer,
    singleOrderState: singleOrderReducer
})

const store = createStore(
    myReducers,
    composeWithDevTools(applyMiddleware(thunk))
)

export { store };