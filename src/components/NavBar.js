import React from "react";
import {navbar, navitem} from "../styles/Components.css"
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <header className="navbar">
            <Link to="/">
                <h3 className="navitem">Home</h3>
            </Link>
            <Link to="/year1">
                <h3 className="navitem">Year 1</h3>
            </Link>
            <Link to="/year2">
                <h3 className="navitem">Year 2</h3>
            </Link>
            <Link to="/year3">
                <h3 className="navitem">Year 3</h3>
            </Link>
            

        </header>
    );
}