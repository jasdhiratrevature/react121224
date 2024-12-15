import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar">
             <h1>The Revature Site</h1>
        <div className="links">
            {/* <a href="/">Home</a>
          <a href="/comments">Comments</a>
            <a href="/posts">Posts</a> */}
            <Link to="/">Home</Link>
            <Link to="/comments">Comments</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/lyft">Lifting State</Link>
        </div>
        </nav>
    );
}
 
export default Navbar;