import React from "react";
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <header className="nav-bar">
            <Link to="/">
                <h3 className="nav-item">Home</h3>
            </Link>
            <Link to="/year1">
                <h3 className="nav-item">Year 1</h3>
            </Link>
            <Link to="/year2">
                <h3 className="nav-item">Year 2</h3>
            </Link>
            <Link to="/year3">
                <h3 className="nav-item">Year 3</h3>
            </Link>
            <Link to="/year4">
                <h3 className="nav-item">Year 4</h3>
            </Link>
            <Link to="/year5">
                <h3 className="nav-item">Year 5</h3>
            </Link>

        </header>
    );
}