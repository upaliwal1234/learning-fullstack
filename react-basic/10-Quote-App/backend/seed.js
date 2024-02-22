const mongoose = require('mongoose');
const Quote = require('./models/Quote');

mongoose.connect('mongodb://127.0.0.1:27017/Quote-App')
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err))


let dummyData = [
    {
        author: "Nelson Mandela",
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall"
    },
    {
        author: "Walt Disney",
        text: "The way to get started is to quit talking and begin doing."
    },
    {
        author: "Steve Jobs",
        text: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."
    },
    {
        author: "Eleanor Roosevelt",
        text: "The future belongs to those who believe in the beauty of their dreams."
    },
    {
        author: "James Cameroon",
        text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."
    },
    {
        author: "Franklin D. Roosevelt",
        text: "The only thing we have to fear is fear itself. "
    },
]


async function seed() {
    await Quote.insertMany(dummyData);
    console.log("DB SEEDED SUCCESSFULLY");
}

seed();