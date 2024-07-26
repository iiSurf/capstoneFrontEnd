import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>
            <header>
                <nav>
                    <Link to='/'>Home</Link>
                </nav>
            </header>
        </>
    )
};

export default NavBar;