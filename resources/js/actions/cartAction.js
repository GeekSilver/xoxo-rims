export function addToCart(rim,cart){
    return (dispatch) => {
        
        dispatch({
            type:"ADD_TO_CART",
            payload:{
                rim:rim,
                cart: cart
            }
        })
    }
}