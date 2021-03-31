import React from 'react'
import useFetch from '../helpers/hooks/useFetch'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { useParams } from 'react-router-dom';

export default function Detail() {
  const { id } = useParams();

  const { data: character, loading, error } = useFetch(`https://breakingbadapi.com/api/characters/${id}`)
  const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };

  if (loading) {
    return (
      <div style={style}>
        <Loader type="Bars" color="#134717" height={200} width={200} />
      </div>
    )
  }

  if (error) {
    return <h1>something error {error.message}</h1>
  }

  return (
    <div>
      {
        character.map(profile => {
          return (
            <div className="card mb-3 mt-3">
              <h1></h1>
              <div className="row">
                <div className="col-md-4">
                  <img src={profile.img} alt="..." style={{height: "330px"}}/>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h3 className="card-title">{profile.name} A.K.A {profile.nickname}</h3>
                    <h6>Actor: {profile.portrayed}</h6>
                    <h6>BirthDay: {profile.birthday}</h6>
                    <h6>Occupation: </h6>
                    {
                      profile.occupation.map(occu => {
                        return (
                          <ul className="m-1">
                            <li>{occu}</li>
                          </ul>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
