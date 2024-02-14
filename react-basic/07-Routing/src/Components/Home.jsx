import { Link } from "react-router-dom"

function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <Link to='/admin'>Admin</Link>
            <br />
            <Link to='/products'>Products</Link>
        </div>
    )
}

export default Home