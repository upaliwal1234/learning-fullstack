const express = require('express');
const app = express();
const dotenv = require('dotenv');
const quoteRoutes = require('./api/quoteRoutes');
const mongoose = require('mongoose')

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(quoteRoutes);

app.get('/', (req, res) => {
    res.status(200).json({ msg: 'backend connected' });
});

const PORT = process.env.PORT || 4400;
app.listen(PORT, (e) => {
    console.log(`server is running at http://localhost:${PORT}`);
});