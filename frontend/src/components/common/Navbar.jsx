import {NavLink} from "react-router-dom";
import "./Navbar.css";

function Navbar(){
    return(
        <nav className="navbar">
            <div className="navbar-logo">
                <h2>🥗 Plateora</h2>
            </div>

            <div className="navbar-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/history">History</NavLink>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div className="navbar-settings">
                <NavLink to="/settings">Settings</NavLink>
            </div>
        </nav>
    );
}
export default Navbar;