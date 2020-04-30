const postRimReducer = (state = {
  created:''
}, action) => {

  switch (action.type) {
    case "POST_RIM":
      
      state = {
        ...state,
        created: action.payload.created
      }
      console.log(`post rim ${action.payload.created}`)
      break;

    default:
    
      state = {
        ...state
      }
      console.log(`default is : ${action.payload}` )
      break;
  }

  return state
}

export default postRimReducer