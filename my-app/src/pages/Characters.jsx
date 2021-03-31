import React from 'react'
import CharacterList from '../components/CharacterList'
import useFetch from '../helpers/hooks/useFetch'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function Characters() {
  const { data: characters, loading, error } = useFetch('https://breakingbadapi.com/api/characters')
  const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };

  if (loading) {
    return (
      <div style={style}>
        {/* <h1 className="display-4 text-center">Please wait...</h1> */}
        <Loader type="Bars" color="#134717" height={200} width={200} />
      </div>
    )
  }

  if (error) {
    return <h1>something error {error.message}</h1>
  }
  return (
    <div>
      <h1>characters Page</h1>
      <div className="row mt-3">
        {
          characters.map(character => {
            return <CharacterList character={character} key={character.char_id}></CharacterList>
          })
        }
      </div>
    </div>
  )
}
