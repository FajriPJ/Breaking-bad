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
      <div className="card mb-5">
        <h3 className="card-header">Get Random Quotes </h3>
        <div className="card-body">
          <h2>{quote}</h2>
          <h5 className="card-text mt-3">- {author}</h5>
          <a className="btn btn-primary" onClick={showQuote}>Next Quote</a>
        </div>
      </div>
    </div>
  )
}
