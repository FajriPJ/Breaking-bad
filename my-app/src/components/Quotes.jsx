import {useSelector, useDispatch } from 'react-redux'
import React, { useEffect, useState } from 'react'


export default function Quotes() {

  const dispatch = useDispatch()

  const [data, setData] = useState([]);

  const quotes = useSelector(state => state.quotesReducer.quotes)
  // console.log(quotes);

  const random = () => {
    let randomIndex = Math.floor(Math.random() * quotes.length)
    let randomQuotes = quotes[randomIndex]
    return randomQuotes
  }

  useEffect(() => {
    if ( !quotes.length ) {
      fetch('https://breakingbadapi.com/api/quotes')
      .then(res => res.json())
      .then(quote => {
        dispatch({type: 'quotes/setQuotes', payload: quote})

      })
      .catch(error => console.log(error))
    }
  }, [])

  useEffect(() => {
    showQuote()
  }, [quotes])

  const showQuote = () => {
    const temp = random()
    setData(temp)
  }

  // console.log(data, '---');
  // if (!data) {
  //   return <h1>kena sini</h1>
  // } 

  return (
    
    <div className="card">
      <h3 className="card-header">Get Quotes</h3>
      <div className="card-body">
        <h2>{data?.quote }</h2>
        <h5 className="card-text mt-3">- {data?.author}</h5>
        <a className="btn btn-primary" onClick={showQuote}>Next Quote</a>
      </div>
    </div>
    
  )
}