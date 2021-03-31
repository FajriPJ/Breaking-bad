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
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={profile.img} alt="..." style={{height: "330px"}}/>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h3 className="card-title">{profile.name}</h3>
                    <h5>BirthDay: {profile.birthday}</h5>
                    <h5>occupation: {profile.occupation}</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
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
