const giveMeAJoke = require('give-me-a-joke');
// console.log(giveMeAJoke);
giveMeAJoke.getRandomDadJoke(function (joke) {
    console.log(joke);
});