# Every Day Is A Dog Day!

Webpage with a single button that will change the image of the :dog:, and hopefully make you smile! :smile:

## Motivation

My girlfriend would really like to have a dog, due to some living circumstances she can't have an animal in her premises, therefore I have decided to make a simple webpage to lift her mood up! I use [dog.ceo](https://dog.ceo/dog-api/) API to make her smile :blush:

## Method and results

The method used in this webpage is a simple URL fetched API provided by [dog.ceo](https://dog.ceo/dog-api/).

The webpage is hosted on [Netlify](https://app.netlify.com/teams/evgeniikozhushko/overview). 

The technologies used in this webpage are HTML, CSS, and JavaScript.

A simple `fetch("URL)` method is used to parse JSON data that is inserted into html `<img>` tag.

JavaScript code bloc:

```
document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
    fetch("URL")
    .then(res => res.json()) //parse response as JSON
    .then(data => {
        console.log(data.message) // Logging data from the response
        document.querySelector("img").src = data.message
    })
    .catch(err => {
        console.log(`error ${err}`) // Displaying the error
    })
}
```

## Repository overview

The directory structure and files, are simple:

├── README.md
├── index.html
├── style.css
├── main.js

## Running instructions

The user can visit [Every Day Is A Dog Day!](https://everydayisadogday.netlify.app/) page and enjoy a random selection of dog images by clicking on the `New doggy :)` button.

## About

This little webpage was inspired by following the [#100Devs](https://leonnoel.com/100devs/) boot camp. :computer:

## Thank you for stopping by!

Hope you enjoy this tiny webpage :sparkling_heart:
