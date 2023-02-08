import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="dojo-title">dojo blog</div>
            <div className="links">
                <Link to="/">home</Link>
                <Link to="/newblog" className="new-blog-btn">new blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;