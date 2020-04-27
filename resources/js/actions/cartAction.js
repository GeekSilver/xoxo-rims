export function addToCart(rim,cart){
    return (dispatch) => {
        
        dispatch({
            type:"ADD_TO_CART",
            payload:{
                rim,
                cart
            }
        })
    }
};

export function removeFromCart(rim, cart){
    return (dispatch) => {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                rim,
                cart
            }
        })
    }
};