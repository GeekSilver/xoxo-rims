const cartReducer = (
    state = {
        cart: [],
    },
    action) => {

    switch (action.type) {

        case "ADD_TO_CART":

            // old cart is used instead of state.cart
            // because state in reducer isn't persistent
            let oldCart = [...action.payload.cart];
            let itemIndex = -1;
            if (oldCart.length > 0) {
                oldCart.forEach((item, index) => {
                    if (item.name === action.payload.rim.name) {
                        itemIndex = index;
                        console.log(`item name: ${item.name} && 
                        rim name ${action.payload.rim.name}
                        && index: ${itemIndex}`, oldCart)
                    }
                });                
            }

            if ( itemIndex >= 0 ) {
                const item = oldCart[itemIndex];
                const count = item.count + 1;
                // add 1 in count of item (rim) & replace item
                oldCart.splice(itemIndex, 1, { ...item, count });
                state = {
                    ...state,
                    cart: oldCart,
                }
            }
            else {
                oldCart.push({ ...action.payload.rim, count: 1 })
                state = {
                    ...state,
                    cart: oldCart,
                };
            }


            break;

        case "REMOVE_FROM_CART":

            let cart = [...action.payload.cart];
            let indexOfItemToRemove;
            cart.forEach((item, index) => {
                if (item.name === action.payload.rim.name) {
                    indexOfItemToRemove = index;
                }
            });

            let currentCount = action.payload.rim.count;

            if ( currentCount > 1 ) {
                // less one item in count
                 currentCount -= 1;
                // less one in count of item to remove and replace 
                cart.splice(indexOfItemToRemove, 1, { ...action.payload.rim, count: currentCount })
                state = {
                    ...state,
                    cart
                }
            }
            else {
                // remove item from cart 
                cart.splice(indexOfItemToRemove, 1);
                state = {
                    ...state,
                    cart
                }
            }
            
         break;
        
        default:
             state = {
                 ...state
             }

    }

    return state;
}

export default cartReducer;