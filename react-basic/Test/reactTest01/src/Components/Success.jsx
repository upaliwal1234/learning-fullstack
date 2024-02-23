import { useNavigate } from "react-router-dom"

function Success() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>{operation} successfully</h1>
            <div>
                <button className="mb-2 rounded px-3.5 py-1 bg-blue-300" onClick={() => navigate('/blogs/new')}>New</button>
            </div>
            <div>
                <button className="rounded px-2 py-1 bg-blue-300" onClick={() => navigate('/')}>Home</button>
            </div>
        </div>
    )
}

export default Success