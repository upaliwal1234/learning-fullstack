import { useState } from 'react'

function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    return (
        <div className='w-1/2 flex flex-col justify-center border mx-auto my-10 rounded p-4'>
            <h1 className='text-4xl font-bold'>Login</h1>
            <form action="" className='flex flex-col gap-2 text-xl' >
                <div className='flex flex-col text-start'>
                    <label htmlFor="email">Email: </label>
                    <input type="text" id='email' value={email} className='border rounded py-1 px-2' placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='flex flex-col text-start'>
                    <label htmlFor="password">Password: </label>
                    <input type="password" id='password' value={password} className='border rounded py-1 px-2' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className='border rounded py-1 text-gray-100 bg-blue-500 hover:bg-blue-700' >Login</button>
            </form>
        </div>
    )
}

export default Login