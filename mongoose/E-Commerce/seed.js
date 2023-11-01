const mongoose = require('mongoose');
const Product = require('./model/Product');

mongoose.connect('mongodb://127.0.0.1:27017/ecom')
    .then(() => {
        console.log('DB connected');
    })
    .catch((err) => {
        console.log('error while connecting DB', err);
    })

let dummyProducts = [
    {
        name: 'Apple iPhone 15',
        price: 79999,
        image: "https://images.macrumors.com/article-new/2023/09/iPhone-15-General-Feature-Black.jpg",
        description: "The Apple iPhone 15 5G comes with a 6.1 inch touchscreen with Crash Detection, features Dynamic Island and a new 48-megapixel main camera with 4x resolution, 20 hours of video playback. This is all powered by the Apple A16 Bionic GPU chipset."
    },
    {
        name: 'Apple iPad Air 5th gen',
        price: 68900,
        image: "https://m.media-amazon.com/images/I/71VbHaAqbML._AC_UF1000,1000_QL80_.jpg",
        description: "iPad Air. With an immersive 10.9-inch Liquid Retina display.1 The breakthrough Apple M1 chip delivers faster performance, making iPad Air a creative and mobile gaming powerhouse. Featuring Touch ID, advanced cameras, blazing-fast 5G2 and Wi-Fi 6, USB-C, and support for Magic Keyboard and Apple Pencil (2nd generation)"
    },
    {
        name: 'Apple MacBook Air M2',
        price: 114900,
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653084303665",
        description: "Redesigned around the next-generation M2 chip, MacBook Air is strikingly thin and brings exceptional speed and power efficiency within its durable all-aluminum enclosure. It's the ultrafast, ultracapable laptop that lets you work, play, or create just about anything - anywhere."
    },
    {
        name: 'Apple Watch Series 9',
        price: 41900,
        image: "https://www.apple.com/in/apple-watch-series-9/images/overview/hero/hero_endframe__bkh9oofkh2dy_large.jpg",
        description: "Smarter. Brighter. Mightier. Measure all the ways you move. Stay moving, stay motivated. Powerful sensors, advanced health features. Apple Watch Series 9 helps you stay connected, active, healthy, and safe. Featuring double tap, a magical way to interact with Apple Watch, an even-brighter display, faster on-device Siri, and Precision Finding for iPhone."
    },
]


async function seedData() {
    await Product.create(dummyProducts);
    console.log('DB Seeded Successfully');
}

seedData();