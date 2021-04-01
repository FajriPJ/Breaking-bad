import {useSelector, useDispatch } from 'react-redux'
import React, { useEffect, useState } from 'react'


export default function Quotes() {

  const [isNext, setIsNext] = useState(false) 
  const [data, setData] = useState([]);

  const quotes = useSelector(state => state.quotes)

  const random = () => {
    let randomIndex = Math.floor(Math.random() * quotes.length)
    let randomQuotes = quotes[randomIndex]
    return randomQuotes
  }

  useEffect(() => {
    const temp = random()
    setData(temp)
  }, [isNext])

  const showQuote = () => {
    if ( isNext ) {
      setIsNext(false)
    } else {
      setIsNext(true)
    }
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