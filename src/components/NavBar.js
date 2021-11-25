import React from "react";
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <header className="nav-bar">
            <Link to="/home">
                <h3 className="nav-item">Home</h3>
            </Link>
            <Link to="/year1">
                <h3 className="nav-item">Year 1</h3>
            </Link>

        </header>
    );
}