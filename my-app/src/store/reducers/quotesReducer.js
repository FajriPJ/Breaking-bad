
const initialState = {
  quotes: [],
}

function reducer(state = initialState, action){
  const { type, payload } = action
  if (type === 'quotes/setQuotes'){
    return {...state, quotes: payload}
  } 
  return state
}

export default reducer
