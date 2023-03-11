document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json()) //parse response as JSON
    .then(data => {
        console.log(data.message) // Logging data from the response
        document.querySelector("img").src = data.message
    })
    .catch(err => {
        console.log(`error ${err}`) // Displaying the error
    })
}

