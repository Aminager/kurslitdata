import React from "react";
import course from "../styles/Components.css"

export default function Course({code, name, hp}) {
    return(
        <div className="course">
            <p>Course {name} - {code} {hp}hp</p>
        </div>
    );
}