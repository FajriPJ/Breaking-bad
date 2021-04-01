
const initialState = {
  favorites: []
}

function reducer(state = initialState, action){
  const { type, payload } = action
   if (type === 'favorites/addFavorites'){
    // return {...state, favorites: {...state.favorites, payload}}
    console.log('masuk favorit reducer');
    return {...state, favorites: state.favorites.concat(payload)}

  }
  
  return state
}

export default reducer