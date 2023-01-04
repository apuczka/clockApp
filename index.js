const quoteText = document.querySelector(".quote");
const quoteAuthor = document.querySelector('.quote-author');
const quoteRefresh = document.querySelector('.refresh');

function randomQuote() {
  const api_url = "https://api.quotable.io/random";

  fetch(api_url)
    .then(res => res.json())
    .then(data => {
    quoteText.textContent = `"${data.content}"`;
    quoteAuthor.textContent = data.author;
  })
}

randomQuote();

quoteRefresh.addEventListener('click', () => {
  randomQuote();
})

const time = document.querySelector('.clock')

function getTime() {
  let data = new Date();
  return data.toLocaleTimeString();

}

setInterval(function() {
  time.innerHTML = getTime();

},1000)


const hello = document.querySelector('.hello');

if (new Date() > 12 && new Date() < 18) {
  hello.innerHTML = "Good afternoon,"
} else if(new Date() > 18) {
  hello.innerHTML = "Good evening,"
} else {
  hello.innerHTML = "Good morning,"
}


console.log(new Date(Date.UTC(2022)))

document.querySelector('.utc');