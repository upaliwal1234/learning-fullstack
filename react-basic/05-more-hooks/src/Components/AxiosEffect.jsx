import axios from 'axios'
import { useEffect, useState } from 'react'

function AxiosEffect() {
    const url = 'https://api.tvmaze.com/search/shows?q=jack%20ryan';

    let [d, setD] = useState(null);

    useEffect(() => {
        axios.get(url)
            .then((data) => {
                setD(data)
            })
            .catch((err) => console.error(err))
    }, [])

    return (
        <div>AxiosEffect</div>
    )
}

export default AxiosEffect