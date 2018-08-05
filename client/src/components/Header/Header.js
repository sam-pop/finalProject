import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="mb-4">
            <h1>In The Loop!</h1>

            <Link to="/" className="badge badge-primary">Home</Link>
            {" "}
            
        </header>
    );
};

export default Header;