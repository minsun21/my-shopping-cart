import { ADD_TO_CART, REMOVE_FROM_CART } from "../types";

export const addToCart = (product) => (dispatch, getState) => {
    const cartItmes = getState().cart.cartItems.slice();
    let alreadyExists = false;
    cartItmes.forEach(x => {
        if (x._id === product._id) {
            alreadyExists = true;
            x.count++;
        }
    });
    if (!alreadyExists) {
        cartItmes.push({ ...product, count: 1 });
    }
    dispatch({
        type: ADD_TO_CART,
        payload: { cartItmes },
    });
    localStorage.setItem("cartItmes", JSON.stringify(cartItmes));
}

export const removeFromCart = (product) => (dispatch, getState) => {
    const cartItmes = getState().cart.cartItems.slice().filter(
        x => x._id !== product._id
    );
    dispatch({
        type: REMOVE_FROM_CART,
        payload: { cartItmes },
    });
    localStorage.setItem("cartItmes", JSON.stringify(cartItmes));
}