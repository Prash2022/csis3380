/*
Author: Prashneel Chand
Date: 11-10-2023
*/

/*** 
 * `quotes` array 
***/
let quotes = [
    {
      quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
      source: "Ralph Waldo Emerson",
      citation: "Self-Reliance",
      year: 1841
    },
    {
      quote: "In the end, we will remember not the words of our enemies, but the silence of our friends",
      source: "Martin Luther King Jr.",
      citation: "Strength to Love",
      year: 1963
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      source: "Winston Churchill",
      citation: " speech at Harrow School",
      year: 1941
    },
    {
      quote: "The best way to predict the future is to invent it.",
      source: " Alan Kay",
      citation: "Computers and Thought",
      year: 1963
    },
    
    
  ];
  



/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  


/***
 * `printQuote` function
***/
function printQuote() {
    const randomQuote = getRandomQuote();
    let html = `<p class="quote">${randomQuote.quote}</p>
                <p class="source">${randomQuote.source}`;
  
    if (randomQuote.citation) {
      html += `<span class="citation">${randomQuote.citation}</span>`;
    }
  
    if (randomQuote.year) {
      html += `<span class="year">${randomQuote.year}</span>`;
    }
  
    html += `</p>`;
  
    document.getElementById('quote-box').innerHTML = html;
  }
  
  


/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/

document.getElementById('load-quote').addEventListener('click', printQuote);