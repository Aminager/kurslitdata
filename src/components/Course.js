import React from "react";

export default function Course({code, name, hp}) {
    return(
        <div className="Course">
            <p>Course {name} - {code} {hp}hp</p>
        </div>
    );
}