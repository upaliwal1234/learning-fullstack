import { useEffect } from "react";

function Effect() {

    const url = 'https://api.tvmaze.com/search/shows?q=jack%20ryan';

    fetch(url)
        .then(async (res) => {
            let data = await res.json();
            console.log(data, 'utk');
        })

    return (
        <div>Effect</div>
    )
}

export default Effect