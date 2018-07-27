import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="mb-4">
            <h1>In-The-Loop</h1>

            <Link to="/" className="badge badge-primary">Home</Link>
            {" "}
            <Link to="/login" className="badge badge-primary">Login</Link>
            {" "}
            <Link to="/signup" className="badge badge-primary">Signup</Link>
            {" "}
        </header>
    );
};

export default Header;