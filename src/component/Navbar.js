import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function NavBar(){
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    console.log(token)
    function handleLogout() {
        localStorage.removeItem("token");
        navigate("/");
    }
    return( 
    <nav>
        <div>
            <Link to="/">Home</Link> 
            <Link to="/cards">Cards</Link>
        </div>
        
        <div>
            <div>

            
            {token != null ? 
                <button className="logout" onClick={handleLogout}>Logout</button>
            : 
                <Link to="/login">Login</Link>
            }
            </div>
        </div>
    </nav>)
}


