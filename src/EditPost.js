import { useEffect } from 'react';
import { useParams, Link} from 'react-router-dom';

const EditPost = ({posts, handleedit, editpostBody, editpostTitle, setEditPostBody, setEditPostTitle}) => {
  
    const { id } = useParams();
    const post = posts.find(post=> post.id.toString() === id);

    useEffect(()=>{

    if(post)
    {
        setEditPostTitle(post.title);
        setEditPostBody(post.body);    
    }

    }, [post, setEditPostTitle, setEditPostBody])

    

    return (
        <main className='NewPost'>
            {editpostTitle &&
            <>
                <h2>Edit Post</h2>
                <form className='newPostForm' onSubmit={(e)=> e.preventDefault()}>
                    <label htmlFor='postTitle'>Title:</label>
                    <input 
                        id='postTitle'
                        type='text'
                        required
                        value={editpostTitle}
                        onChange={(e)=> setEditPostTitle(e.target.value)}
                    />

                    <label htmlFor='postBody'>Post: </label>

                    <textarea
                        id="postBody"
                        required
                        value={editpostBody}
                        onChange={(e)=>setEditPostBody(e.target.value)}
                    />

                    <button type='submit' onClick={()=>handleedit(post.id)}>Submit</button>
                    </form>
                </>
                }
                {!editpostTitle && (
                    <>
                        <h2>Post not found</h2>
                        <p>Well, that's disappointing</p>
                        <p>
                            <Link to='/'>Visit Our Homepage</Link>
                        </p>
                    </>
                )}
        </main>
  )
}

export default EditPost