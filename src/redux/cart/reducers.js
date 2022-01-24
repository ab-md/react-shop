const initialState = {
    cart: localStorage.getItem('shoppingCart') ?
        JSON.parse(localStorage.getItem('shoppingCart')) :
        [],

    itemsCounter: localStorage.getItem('itemsCounter') ?
        JSON.parse(localStorage.getItem('itemsCounter')) :
        0,

    total: localStorage.getItem('total') ?
        JSON.parse(localStorage.getItem('total')) :
        0
}

const updateLocalStorage = (cart) => {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
}

const updateItemsCounter = (itemsCounter) => {
    localStorage.setItem('itemsCounter', JSON.stringify(itemsCounter));
}

const updateTotal = (total) => {
    localStorage.setItem('total', JSON.stringify(total));
}

const sumItems = items => {
    const itemsCounter = items.reduce((total, product) => total + product.qty, 0);
    let total = items.reduce((total, product) => total + product.price * product.qty, 0).toFixed(2);
    updateItemsCounter(itemsCounter);
    updateTotal(total);
    return { itemsCounter, total }
}

const cartReducer = (state = initialState, action) => {

    switch (action.type) {

        case "ADD_TO_CART":
            const hasProduct = state.cart.find(
                product => product._id === action.payload._id
            ) ? true : false;

            state.cart = hasProduct ?
                state.cart.map(product => product._id === action.payload._id ? { ...product, countInStock: product.countInStock - 1, qty: product.qty + 1 } : product)
                : [...state.cart, { ...action.payload, qty: 1 }];

            updateLocalStorage(state.cart);

            return {
                ...state,
                cart: state.cart,
                ...sumItems(state.cart)
            }

        case "INCREAMENT":
            state.cart = state.cart.map(product => product._id === action.payload ? { ...product, qty: product.qty + 1 } : product)
            updateLocalStorage(state.cart);

            return {
                ...state,
                cart: state.cart,
                ...sumItems(state.cart)
            }

        case "DECREAMENT":
            const product = state.cart.find(
                product => product._id === action.payload
            )
            state.cart = product.qty > 1 ? state.cart.map(product => product._id === action.payload ? { ...product, qty: product.qty - 1 } : product)
                : state.cart;
            updateLocalStorage(state.cart);

            return {
                ...state,
                cart: state.cart,
                ...sumItems(state.cart)
            }

        case "REMOVE_FROM_CART":
            state.cart = state.cart.filter(product => product._id !== action.payload)
            updateLocalStorage(state.cart);

            return {
                ...state,
                cart: state.cart,
                ...sumItems(state.cart)
            }

        case "CLEAR_CART":
            updateLocalStorage([]);

            const resetCounter = 0;
            updateItemsCounter(resetCounter)

            const resetTotal = 0;
            updateTotal(resetTotal)

            return {
                ...state,
                cart: [],
                itemsCounter: resetCounter,
                total: resetTotal
            }

        default:
            return state;
    }
}

export default cartReducer; 