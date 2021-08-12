import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    // it fires on every render
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    if(!res.ok) {
                        throw Error('could not fetch data for that resource!');
                    }

                    return res.json();
                })
                .then((data) => {
                    setBlogs(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    setIsPending(false);
                    setError(err.message);
                })
        }, 1000);
    }, []);

    return ( 
        <div className="home">
            { error && <div> { error } </div>}
            { isPending && <div>Loading...</div> }
            {blogs && <BlogList blogs={ blogs } title="All Blogs" handleDelete={handleDelete} /> }
            {/* <BlogList blogs={ blogs.filter((blog) => blog.author === 'mario') } title="Mario's blogs" /> */}
        </div>
      );
}
 
export default Home;