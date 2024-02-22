import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="w-100% flex bg-orange-500 gap-6 md:gap-48 lg:gap-96 px-10 py-4 sm:text-xl">
            <div>
                <h1 className='text-sm sm:text-2xl font-bold'>Quote App</h1>
            </div>
            <div className='mx-4'>
                <ul className='flex gap-8 text-gray-200'>
                    <li>
                        <Link to='/'>
                            All Quotes
                        </Link>
                    </li>
                    <li>
                        <Link to='/new'>
                            New Quote
                        </Link>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar