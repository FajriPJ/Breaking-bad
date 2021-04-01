const initialState = {
  characters: [],
  loading: false,
  error: null
}

function reducer(state = initialState, action){
  const { type, payload } = action
  
  if (type === 'characters/setCharacters'){
    // return {...state, favorites: {...state.favorites, payload}}
    return {...state, characters: state.characters.concat(payload)}

  } else if ( type=== 'characters/setLoading') {
    return {...state, loading: payload}
  } else if ( type === 'characters/setError') {
    return { ...state, error: payload}
  }
  
  return state
}

export default reducer