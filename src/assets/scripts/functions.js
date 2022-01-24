const shorten = (title) => {
    const splitedTitle = title.split(" ");
    const newTitle = `${splitedTitle[0]} ${splitedTitle[1]}`
    return newTitle;
}

const idShorten = (id) => {
    const newID = id.charAt(23);
    // console.log(+newID+1);
    // return +newID + 1;
    return newID;
}

const isInCart = (state, _id) => {
    const result = !!state.cart.find(item => item._id === _id)
    return result;
}

let condition = 0;
const quantityCount = (state, _id) => {
    const index = state.cart.findIndex(item => item._id === _id);
    if (index === -1) {
        return false
    } else {
        condition = state.cart[index].qty;
        return condition;
    }
}

export { shorten, idShorten, isInCart, quantityCount, condition };