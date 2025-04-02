import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function PostList() {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        fetch("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts")
            .then(response => response.json())
            .then(data => setPostList(data))
    }, []);

    return (
        <>
            <main>
                <div className="container">
                    <h1 className='text-center'>Post List</h1>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
                        {postList.map((post) => (
                            <div key={post.id} className="col">
                                <div className="card mb-3 h-100">
                                    <div className="card-body">

                                        <h3 className="card-title">{post.title}</h3>
                                        <p className="card-text">{post.author}</p>
                                        <p className="card-text">{post.public}</p>
                                        <Link to={`/PostList/${post.id}`} className='btn btn-primary'>
                                            Read Post's body
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>


            </main>
        </>

    );


}
