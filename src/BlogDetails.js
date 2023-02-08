import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { data: blog, isPending, error } = useFetch("http://localhost:8080/blogs/" + id);

    const handleDelete = (e) => {
        fetch("http://localhost:8080/blogs/" + blog.id, {
            method: "DELETE"
        })
        .then(() => {
            navigate('/');
        });
    }

    return (
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article className="article-box">
                    <h2>{ blog.title }</h2>
                    <div className="writer-delete">
                        <p>Written by { blog.author }</p>
                        <button onClick={handleDelete}>delete</button>
                    </div>
                    <div>{ blog.body }</div>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;