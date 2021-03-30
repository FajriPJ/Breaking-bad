import React, { useEffect, useState } from 'react'
// import useFetch from '../helpers/hooks/useFetch'

export default function Quotes() {
  
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')

  useEffect(() => {
    getQuote()
  }, [])

  const getQuote = () => {
    let url = 'https://breakingbadapi.com/api/quotes'
    fetch(url)
      .then(res => res.json())
      .then(quote => {
        let randomIndex = Math.floor(Math.random() * quote.length)
        let randomQuotes = quote[randomIndex]
        console.log(randomQuotes);
          setQuote(randomQuotes.quote)
          setAuthor(randomQuotes.author)
      })
      .catch(error => console.log(error))
  }

  const showQuote = () => {
    getQuote();
  }

  return (
    <div>
      <div className="card">
        <h5 className="card-header">Quotes</h5>
        <div className="card-body">
          <h5>{quote}</h5>
          <p className="card-text">{author}</p>
          <a className="btn btn-primary" onClick={showQuote}>Next Quote</a>
        </div>
      </div>
    </div>
  )
}
