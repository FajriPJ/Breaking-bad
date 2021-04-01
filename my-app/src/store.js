// import { createStore } from 'redux'

// const initialState = {
//   characters: [],
//   quotes: [],
//   favorites: []
// }

// function reducer(state = initialState, action){
//   const { type, payload } = action
//   if (type === 'quotes/setQuotes'){
//     return {...state, quotes: payload}

//   } else if (type === 'favorites/addFavorites'){
//     // return {...state, favorites: {...state.favorites, payload}}
//     return {...state, favorites: state.favorites.concat(payload)}

//   } else  if (type === 'characters/setCharacters'){
//     return { ...state, characters:payload}
//   }
  
//   return state
// }

// const store = createStore(reducer)

// export default store;