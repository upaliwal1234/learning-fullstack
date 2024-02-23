import { v4 as uuid } from 'uuid';
const blogs = [
    {
        id: uuid(),
        authorName: 'Utkarsh',
        desc: 'This blog is on AI'
    },
    {
        id: uuid(),
        authorName: 'Sparsh',
        desc: 'This blog is on IT'
    },
    {
        id: uuid(),
        authorName: 'Shubham',
        desc: 'This blog is on Drone Technology'
    },
    {
        id: uuid(),
        authorName: 'Vatsal',
        desc: 'This blog is on Semiconductors'
    },
    {
        id: uuid(),
        authorName: 'Abhinav',
        desc: 'This blog is on Defence Technologies'
    },
]

export default blogs;