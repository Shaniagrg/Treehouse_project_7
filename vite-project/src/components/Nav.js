//A Nav component for the app's navigation links.
import React from "react";

const Nav = () => {
    return (
        <nav className="main-nav">
                <ul>
                    <li><a href='#'>Cats</a></li>
                    <li><a href='#'>Dogs</a></li>
                    <li><a href='#'>Computers</a></li>
                </ul>
            </nav>
    )
}

export default Nav