import { useState, useRef } from 'react';
import './App.css';
import Quote from './components/Quote';
import QuoteList from './assets/quotes.json';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function App() {
  
  const [currentQuote, setQuote] = useState(
    QuoteList.quotes[Math.floor(Math.random() * QuoteList.quotes.length)]
  );
  
  const root = document.documentElement;
  const quoteTextRef = useRef(null);
  const authorRef = useRef(null);

  const newQuote = () => {
    if (quoteTextRef.current && authorRef.current) {
      quoteTextRef.current.style.color = `rgb(255,255,255)`;
      authorRef.current.style.color = `rgb(255, 255, 255)`;
    }
    setTimeout(()=>{
      newColor();
      setQuote(
        QuoteList.quotes[Math.floor(Math.random() * QuoteList.quotes.length)]
      );
    }, 800);
  };

  const newColor = () => {
    const randomRGB = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    root.style.setProperty('--main-color', randomRGB);
    if(quoteTextRef.current) quoteTextRef.current.style.color = randomRGB;
    if (authorRef.current) authorRef.current.style.color = randomRGB;
  }


  return (
    <div id='app'>
      <div id='quote-box'>
        <Quote 
          quote={currentQuote.quote} 
          author={currentQuote.author}
          quoteTextRef={quoteTextRef}
          authorRef={authorRef}
          />
        <div id='social-icons'>
          <a id='instagram' href='/'><InstagramIcon className='icon'/></a>
          <a id='tweet-quote' href='twitter.com/intent/tweet'><TwitterIcon className='icon'/></a>
        </div>
        <button id='new-quote' onClick={newQuote}>New Quote</button>
      </div>
    </div>
  );
}

export default App;
