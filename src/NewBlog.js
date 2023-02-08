import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const NewBlog = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    const [alert, setAlert] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(title.trim() === '' || author.trim() === '' || body.trim() === '') {
            setAlert('Please fill out all fields');
            return;
        }

        setAlert(null);
        setIsPending(true);
        const blog = { title, author, body };
        
        fetch('http://localhost:8080/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        })
        .then(() => {
            console.log('new blog added');
            setIsPending(false);
            navigate('/');
        });
    };

    return (
        <div className="new-blog">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Blog title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Blog author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <textarea
                    placeholder="Blog body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                { !isPending && <button>Add Blog</button>}
                { isPending && <button disabled>Adding Blog...</button>}
            </form>
            { alert && <p className='alert-message'>{ alert }</p>}
        </div>
    );
}
 
export default NewBlog;