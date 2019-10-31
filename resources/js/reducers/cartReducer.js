const cartReducer = (
    state = {
        cart: [],
    },
    action) => {

    switch (action.type) {

        case "ADD_TO_CART":
                    let oldCart = [...action.payload.cart];
                    //check if rim already exists in cart
                    oldCart.includes(action.payload.rim) 
                    ? 
                    state = { ...state } 
                    : 
                    oldCart.push(action.payload.rim)
                    state = {
                        ...state,
                        cart: oldCart,
                    };

            break;
    }

    return state;
}

export default cartReducer;