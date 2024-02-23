import { useNavigate } from "react-router-dom"

function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Home</h1>
            <div className="flex flex-col gap-2 ">
                <button onClick={() => navigate('/dashboard')} className="rounded bg-blue-700 text-white px-5 py-2">Dashboard</button>
                <button onClick={() => navigate('/blogs')} className="rounded bg-blue-700 text-white px-5 py-2">Blogs</button>
            </div>
        </div>
    )
}

export default Home