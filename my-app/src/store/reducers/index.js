import { combineReducers } from 'redux'
import charactersReducer from './charactersReducer'
import favoritesReducer from './favoritesReducer'
import quotesReducer from './quotesReducer'

const reducer = combineReducers({
  charactersReducer,
  favoritesReducer,
  quotesReducer
})

export default reducer
 