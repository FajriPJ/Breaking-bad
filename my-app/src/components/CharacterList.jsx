import React from 'react'
import { useHistory } from 'react-router-dom'

export default function CharacterList (props) {
  
  let history = useHistory();

  const toDetail = (id) => {
    // alert(id)
    history.push(`/characters/${id}`)
  }


  return (
    <div className="col-md-3 mb-4 ">
      <div className="card shadow">
        <img src={props.character.img} className="card-img-top" style={{height: "300px"}}/>
        <div className="card-body">
          {/* <h5 className="card-title fs-3">{props.character.char_id}. {props.character.nickname}</h5> */}
          <button type="button" className="btn btn-outline-info" onClick={() => toDetail(props.character.char_id)}>See Profile</button>
        </div>
      </div>
    </div>
  )
}
