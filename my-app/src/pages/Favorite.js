import React from 'react'
import { useSelector } from 'react-redux'

export default function Favorite() {

  const data = useSelector( state => state.favoritesReducer.favorites)

  if (!data.length) {
    return (
      <h1>Belom masukin favorite</h1>
    )
  }
  return (
    <div>
      {
        data.map(fav => {
          return (
            <div class="container m-4">
              <div class="row">
                <div class="col-md-8">
                  <div class="card">
                    <div class="card-body">
                    <div class="row">
                      <div class="col-md-4">
                      <img src={fav.img} style={{height: "200px", width: "220px"}} />
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h3 className="card-title">{fav.name} A.K.A {fav.nickname}</h3>
                          <h6>Actor: {fav.portrayed}</h6>
                          <h6>BirthDay: {fav.birthday}</h6>
                          <h6>Occupation: </h6>
                          {
                            fav.occupation.map(occu => {
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
