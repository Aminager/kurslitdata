import React from "react";
import course from "../styles/Components.css"

export default function Course({ code, name, hp, link }) {
    return (
        <div className="course">
            <a href={link} target="_blank">
                <p>{name} - {code} {hp}hp</p>
            </a>
        </div>
    );
}