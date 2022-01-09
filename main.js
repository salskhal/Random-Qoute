const quoteBtn = document.querySelector(".btn")
const API = "https://breaking-bad-quotes.herokuapp.com/v1/quotes"


quoteBtn.addEventListener("click", fetchQuote)

function fetchQuote(){
    fetch(API)
    .then(res => res.json())
    .then(quotes => {
        quotes.map(quote => {
            document.querySelector(".quote").classList.remove("hidden")
            document.querySelector(".quote").innerHTML = ` <h3 class="main-quote">${quote.quote}</h3>
            <p class="author">--${quote.author}</p>`
        })
    })
}



