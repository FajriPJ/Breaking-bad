import Quotes from '../components/Quotes'
import useFetch from '../helpers/hooks/useFetch'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import React, { useEffect, useState } from 'react'
import {useSelector, useDispatch } from 'react-redux'


function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    getQuote()
  }, [])

  const getQuote = () => {
    let url = 'https://breakingbadapi.com/api/quotes'
    fetch(url)
      .then(res => res.json())
      .then(quote => {
        dispatch({type: 'quotes/setQuotes', payload: quote})

      })
      .catch(error => console.log(error))
  }

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
      <div className="jumbotron text-center mt-4">
        <h2 className="display-4 text-center"><span className='px-2' style={{color: 'white', background: "#134717"}}>Br</span>eaking <span className='px-1' style={{color: 'white', background: "#134717"}}>Ba</span>d</h2>
        <hr className="my-4" />
        <p className="lead">
        </p>
        {/* <div class="d-grid gap-2 col-6 mx-auto">
          <button class="btn btn-primary" type="button">Button</button>
        </div> */}
      </div>
      <Quotes className="mt-3 mb-5"></Quotes>
    </div>
  )
}

export default Home;
