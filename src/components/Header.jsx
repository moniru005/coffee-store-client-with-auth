import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex mx-auto my-6">
            <div className="flex gap-4 mx-auto">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
            <NavLink to="/signin">Sign In</NavLink>
        </div>
        </div>
    );
};

export default Header;