const express = require('express')
const app = express()
const axios = require('axios')

const options = {
    method: 'GET',
    url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi',
    headers: {
        'X-RapidAPI-Key': '973a810864msh57bebdf660532b0p19356ejsn9390e0bd8e9b',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

app.get('/', async (req, res) => {
    try {
        const response = await axios.request(options);
        res.send(response.data)
    }
    catch (err) {
        res.status(500).json({ messsage: err });
    }

})

app.listen(8080, () => {
    console.log('server is up and running at PORT', 8080);
})