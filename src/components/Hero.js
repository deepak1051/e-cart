import './hero.css'
import heroImg from '../images/cat.svg'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

const Hero = () => {
  const [quote, setQuote] = useState('')

  const fetchQuote = async () => {
    const { data } = await axios.get('https://type.fit/api/quotes')
    const randomNumber = Math.floor(Math.random() * 1643) + 1
    setQuote(data[randomNumber])
  }
  useEffect(() => {
    fetchQuote()
  }, [])
  return (
    <div className='hero'>
      <div className='img-container'>
        <h1>Welcome to LightShop Website</h1>
        <img src={heroImg} alt='' />

      </div>
      <div>
        <div class="quote-container" id="quote-container">

          <div class="quote-text">
            <i class="fas fa-quote-left"></i>
            <span id="quote" >{quote.text}</span>
          </div>

          <div class="quote-author">
            <span id="author"><h2>{quote.author ? `${quote.author}` : 'Unknown'}</h2></span>
          </div>

          <div class="button-container">
            <button class="twitter-button button" id="twitter" title="Tweet This!"><i class="fab fa-twitter"></i></button>
            <button class="add button" onClick={() => fetchQuote()}>Click Me 😊</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero