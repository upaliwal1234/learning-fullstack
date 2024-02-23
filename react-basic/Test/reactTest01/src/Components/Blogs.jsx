import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import blogs from '../BlogData';

function Blogs() {
    const navigate = useNavigate();
    const [blogData, setBlogData] = useState(blogs);

    const handleDelete = (id) => {
        const newArr = blogData.filter((item) => {
            return item.id !== id;
        });

        while (blogs.length > 0) {
            blogs.pop();
        }
        for (const itm of newArr) {
            blogs.push(itm);
        }
        setBlogData(newArr)
    }
    return (
        <div>
            <h1 className='text-3xl my-4'>Blogs</h1>
            <div className='flex flex-col gap-4 justify-center mx-auto w-2/3 mb-4'>
                {blogData.map((data) => (
                    <div key={data.id} className='border border-gray-400 rounded h-[150px] text-start p-4 flex flex-col justify-between'>
                        <div>
                            <h1 className='text-2xl'>Name: {data.authorName}</h1>
                            <p className='text-lg'>Desc: {data.desc}</p>
                        </div>
                        <div>
                            <button className='bg-red-500 hover:bg-red-600 text-red-900 px-2 py-1 rounded' onClick={() => handleDelete(data.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>

            <div>
                <button className="mb-2 rounded px-3.5 py-1 bg-blue-300" onClick={() => navigate('/blogs/new')}>New</button>
            </div>
            <div>
                <button className="rounded px-2 py-1 bg-blue-300" onClick={() => navigate('/')}>Home</button>
            </div>
        </div>
    )
}

export default Blogs