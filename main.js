"use strict"
const quoteBtn = document.querySelector(".btn")
const api = "https://type.fit/api/quotes"

quoteBtn.addEventListener("click", fetchQuote)

// const API = "https://breaking-bad-quotes.herokuapp.com/v1/quotes"

// function fetchQuote(){
//     fetch(API)
//     .then(res => res.json())
//     .then(quotes => {
//         quotes.map(quote => {
//             document.querySelector(".quote").classList.remove("hidden")
//             document.querySelector(".quote").innerHTML = ` <h3 class="main-quote">${quote.quote}</h3>
//             <p class="author">--${quote.author}</p>`
//         })
//     })
// }

function fetchQuote() {
    fetch(api)
        .then(res => res.json())
        .then(quotes => {
            let randomQuote = Math.trunc(Math.random() * quotes.length) + 1
            let currentQuote = quotes[randomQuote] 
            document.querySelector(".quote").classList.remove("hidden")
            document.querySelector(".quote").innerHTML = ` <h3 class="main-quote">${currentQuote.text}</h3>
            <p class="author">--${currentQuote.author}</p>`
        })
}