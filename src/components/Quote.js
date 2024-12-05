import React from 'react';
import '../App.css';
import '../styles/Quote.css'
import QuoteSymbol from '@mui/icons-material/FormatQuoteRounded';

const Quote = ({quote, author, quoteTextRef, authorRef}) => {
  return (
    <div id='quote'>
        <div id='text' ref={quoteTextRef}>
            <QuoteSymbol className='icon' id='quote-icon'/>
            {quote}
        </div>
        <div id='author' ref={authorRef}>
             - {author}
        </div>
    </div>
  );
};

export default Quote