import React from "react";
import Semester from "./Semester";
import year from "../styles/Components.css"

export default function Year({ year }) {

    function createSemesters(n) {
        return [...Array(n).keys()].map(x => (<Semester key={year + "" + x+1} period={x + 1} year={year} />))
    }


    return (
        <div className="year" key={year}>
            <h1 className="yearheader">Year {year}</h1>
            <p className="semester">{createSemesters(4)}</p>
        </div>
    );
}