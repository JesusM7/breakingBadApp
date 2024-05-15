

const fetchQuote = async() => {
    const res = await fetch("https://api.breakingbadquotes.xyz/v1/quotes");
    const data = await res.json();

    console.log(data[0]);
    return data[0];
}

export const BreakingbadApp = async ( element ) => {

    document.querySelector("#app-title").innerHTML = "BREAKING BAD APP"

    element.innerHTML = "Loading..."

    const quoteLabel = document.createElement("blockquote");
    const authorLabel = document.createElement("h5");
    const nextQuoteButton = document.createElement("button");
    nextQuoteButton.innerText = "Next Quote";


    const quote = (data) => {
        quoteLabel.innerHTML = data.quote;
        authorLabel.innerHTML = data.author;
        element.replaceChildren(quoteLabel, authorLabel, nextQuoteButton);
    }

    fetchQuote()
     .then( quote )

    const next = () => {
        element.innerHTML = "Loading...";
        fetchQuote()
        .then( quote )
    }

    nextQuoteButton.addEventListener("click", next ) //  () => next() ?? 
    
}