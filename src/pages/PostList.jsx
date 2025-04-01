import React, { useState, useEffect } from 'react';

export default function PostList() {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        fetch("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts")
            .then(response => response.json())
            .then(data => setPostList(data))
    }, []);

    return (
        <div className="container">
            <h1 className='text-center'>Post List</h1>
            <div className="row py-5">
                {postList.map((post) => (
                    <div key={post.id} className="col-md-4 mb-4">
                        <div className="card mb-3 h-100">
                            <div className="card-body">
                                <h3 className="card-title">{post.title}</h3>
                                <p className="card-text">{post.author}</p>
                                <p className="card-text">{post.body}</p>

                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>



    );
}
