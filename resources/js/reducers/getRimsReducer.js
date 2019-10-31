const getRimsReducer = (
    state = {
        rims: [],
        cart: [],
    },
    action) => {

        switch (action.type) {

            case "GET_ALL":

                state = {
                    ...state,
                    rimsHist:action.payload.data,
                    rims: action.payload.data
                }
                
                break;

            case "GET_ONE":
                
                state = {
                    ...state,
                    rim: action.payload.data
                }

                break;

            case "FILTER_ASC":
                let attr = action.payload.attr;
                state = {
                    ...state,
                    rims: [...action.payload.rims].sort(
                        function (rim1,rim2){
                            return rim1[attr] - rim2[attr];
                        }
                    )
                }

                break;

            case "FILTER_DESC":
                attr = action.payload.attr;                
                state = {
                    ...state,
                    rims: [...action.payload.rims].sort(
                        function (rim1,rim2){
                            return rim2[attr] - rim1[attr];
                        }
                    )
                }    
                
                break;
            
            case "FILTER_VALUE":
                attr = action.payload.attr;
                    state = {
                        ...state,
                        rims: [...action.payload.rims].filter(
                            rim => {
                                
                                if(attr === "price")
                                {
                                
                                    return (
                                        rim[attr] <= action.payload.value 
                                        && 
                                        Number(rim.size) == Number(action.payload.otherValue)
                                        );

                                }
                                else if(attr === "size"){

                                    return (
                                        +rim[attr] == +action.payload.value
                                        &&
                                        +rim.price <= +action.payload.otherValue
                                        );
                                    
                                }                             
                                
                            }
                        )
                    }        
                    break;
        
        }


        return state;

};


export default getRimsReducer;