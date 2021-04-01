

export function setCharacters(payload) {
  return {
    type: 'characters/setCharacters',
    payload
  }
} 

export function setLoading(payload) {
  return {
    type: 'characters/setLoading',
    payload
  }
}

export function setError(payload) {
  return {
    type: 'characters/setError',
    payload
  }
}

export function setCharactersAsync() {
  return (dispatch) => {
    dispatch(setLoading(true))
    fetch('https://breakingbadapi.com/api/characters')
      .then(res => res.json())
      .then(data => {
        dispatch(setCharacters(data))
      })
      .catch(err => dispatch(setError(err)))
      .finally(_ => {
        dispatch(setLoading(false))
      } )
  }
}

