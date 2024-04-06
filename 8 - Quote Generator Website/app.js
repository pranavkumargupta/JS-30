const api_url = "https://api.quotable.io/random";

async function getquote(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    document.getElementById("quote").innerHTML = data.content;
    document.getElementById("author").innerHTML = data.author;
}

document.getElementById("nextquote").addEventListener("click", () =>{
    getquote(api_url);
});

// document.getElementById("shareontwitter").addEventListener("click", () => {
//     window.open("https://twitter.com/intent/tweet?text=" + data.quote + "-- by " + data.author, "tweet window", "width=600, height=300");
// });

document.getElementById("shareontwitter").addEventListener("click", () => {
    // Assuming data.quote and data.author contain the quote and author values
    let tweetText = (document.getElementById("quote").innerHTML + " -- by " + document.getElementById("author").innerHTML);
    let tweetUrl = "https://twitter.com/intent/tweet?text=" + tweetText;
    window.open(tweetUrl, "tweet window", "width=600, height=300");
});

getquote(api_url)