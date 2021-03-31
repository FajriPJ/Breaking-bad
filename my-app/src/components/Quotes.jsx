
import React, { useEffect, useState } from 'react'
import {useSelector, useDispatch } from 'react-redux'


export default function Quotes() {

  const dispatch = useDispatch();
  const quotes = useSelector(state => state.quotes)
  
  // const [quote, setQuote] = useState('')
  // const [author, setAuthor] = useState('')

  useEffect(() => {
    getQuote()
  }, [])


  const random = () => {
    let randomIndex = Math.floor(Math.random() * quotes.length)
    let randomQuotes = quotes[randomIndex]
    
    return randomQuotes
  }

  const data = random()
  console.log(data.quote, data.author)

  const getQuote = () => {
    let url = 'https://breakingbadapi.com/api/quotes'
    fetch(url)
      .then(res => res.json())
      .then(quote => {
        dispatch({type: 'quotes/setQuotes', payload: quote})
      })
      .catch(error => console.log(error))
  }

  const showQuote = () => {
    getQuote();
  }

  return (
    <div>
      <div className="card">
        <h3 className="card-header">Get Quotes</h3>
        <div className="card-body">
          <h2>{data.quote}</h2>
          <h5 className="card-text mt-3">- {data.author}</h5>
          <a className="btn btn-primary" onClick={showQuote}>Next Quote</a>
        </div>
      </div>
    </div>
  )
}
