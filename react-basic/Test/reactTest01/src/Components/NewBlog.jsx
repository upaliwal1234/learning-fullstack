import { useState } from "react"
import { v4 as uuid } from 'uuid';
import blogs from "../BlogData";
import { useNavigate } from "react-router-dom";

function NewBlog() {

    const navigate = useNavigate();
    const [authorName, setAuthorName] = useState('');
    const [desc, setDesc] = useState('');

    const handleSubmit = () => {
        let item = {
            id: uuid(),
            authorName,
            desc
        };

        blogs.push(item);
        navigate('/blogs');
    }

    console.log(authorName);

    return (
        <div className='w-1/2 flex flex-col justify-center border mx-auto my-10 rounded p-4'>
            <h1 className='text-4xl font-bold'>Add New Blog</h1>
            <form action="" className='flex flex-col gap-2 text-xl' >
                <div className='flex flex-col text-start'>
                    <label htmlFor="authorName">Author Name: </label>
                    <input type="text" id='authorName' value={authorName} className='border rounded py-1 px-2' placeholder='Enter Author Name' onChange={(e) => setAuthorName(e.target.value)} />
                </div>
                <div className='flex flex-col text-start'>
                    <label htmlFor="desc">Description: </label>
                    <textarea type="text" id='desc' value={desc} className='border rounded py-1 px-2' placeholder='Enter Description' onChange={(e) => setDesc(e.target.value)} />
                </div>
                <button className='border rounded py-1 text-gray-100 bg-blue-500 hover:bg-blue-700' onClick={handleSubmit} >Submit</button>
            </form>
        </div>
    )
}

export default NewBlog