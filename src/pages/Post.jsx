import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Post() {
    const [post, setPost] = useState(null)

    const { id } = useParams()

    console.log(id);

    useEffect(() => {
        fetch(`https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts/${id}`)
            .then(res => res.json())
            .then(data => {
                setPost(data)
            })
            .catch(err => {
                console.log('ERROR', err);

            })
    }, [])

    return (
        <>
            <main>
                {
                    !post ? ('Loading ...')
                        : (
                            <>
                                <section>
                                    <div className="container">
                                        <div className="card">
                                            <h3>{post.author}</h3>
                                            <div className="card-body">
                                                <h4>{post.title}</h4>
                                                <p>
                                                    {post.body}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </>


                        )

                }
            </main>

        </>


    )


}