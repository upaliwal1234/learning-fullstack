import { useState } from "react"
import Signup from "./Signup"
import Login from "./Login";
import { useNavigate } from "react-router-dom";
// import Login from "./Login";

function Dashboard() {
    const navigate = useNavigate();
    const [login, setLogin] = useState(true);
    return (
        <div>
            <div className="border border-blue-500 flex w-1/2 mx-auto rounded-lg">
                <div className="w-1/2">
                    <button className={`w-full py-2 rounded ${login ? 'bg-blue-500' : ''}`} onClick={() => setLogin(true)}>Login</button>
                </div>
                <div className="w-1/2">
                    <button className={`w-full py-2 rounded ${!login ? 'bg-blue-500' : ''}`} onClick={() => setLogin(false)}>SignUp</button>
                </div>
            </div>
            <div>
                {login ? (<Login />) : (<Signup />)}
            </div>

            <div>
                <button className="rounded px-2 py-1 bg-blue-300" onClick={() => navigate('/')}>Home</button>
            </div>
        </div >
    )
}

export default Dashboard