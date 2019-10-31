
export function getAllRimsAction (){
    return (dispatch) => {

        axios.get('/api/rims')
        .then(
            ({data}) => 
            {
                dispatch( {
                    type: "GET_ALL",
                    payload:{
                        data:data
                    }
                })
                
            }
        ).catch(
            error => {
                dispatch ({
                    type: "GET_ALL",
                    payload:{
                        error: error
                    }
                })
                
            }
        );
    }
};

export function getOneRimAction (id) {

    return (dispatch) => {

        axios.get(`/api/rims/${id}`)
        .then(
            ({data}) => {
                dispatch ({
                    type: "GET_ONE",
                    payload: {
                        data: data
                    }
                })
            }
        ).catch(
            error => {
                console.log(error);
                dispatch(
                    {
                        type: "GET_ONE",
                        payload: error
                    }
                );
            }
        );

    }
}

export function filterAsc(rims,attribute){
    return (dispatch) => {
        dispatch({
        type: "FILTER_ASC",
        payload: {
            rims: rims,
            attr: attribute
        }
    });
    }
}

export function filterDesc(rims,attribute){
    return (dispatch) => {
        dispatch({
        type: "FILTER_DESC",
        payload: {
            rims: rims,
            attr: attribute
        }
    });
    }
}

export function filterByValue(value,rims,attribute,otherValue){
    return (dispatch) => {
        dispatch({
            type:"FILTER_VALUE",
            payload: {
                value: value,
                rims: rims,
                attr: attribute,
                otherValue:otherValue
            }
        });
    }
}

