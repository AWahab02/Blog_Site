import React from 'react'
import {useParams, Link} from 'react-router-dom';

const PostPage = ({posts, handledelete}) => {
    const {id} = useParams();
    const post = posts.find((post)=>
        (post.id).toString() === id
    );

    return (
        <main className='PostPage'>
            <article className='post'>
                {post && 
                    <>
                        <h2>{post.title}</h2>
                        <p className='postDate'>{post.datetime}</p>
                        <p className='postBody'>{post.body}</p>
                        <button onClick={() => handledelete(post.id)}>
                            Delete Post
                        </button>
                    </>}
                {!post && 
                    <>
                        <h2>Post not found</h2>
                        <p>Whoopsie</p>
                        <Link to='/'>Visit Homepage</Link>
                    </>}
            </article>
        </main>
    )
}

export default PostPage