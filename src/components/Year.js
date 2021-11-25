import React from "react";
import Semester from "./Semester";
import year from '../styles/Components.css'

export default function Year({ year }) {

    function createSemesters(n) {
        return [...Array(n).keys()].map(x => (<Semester period={x + 1} year={year} />))
    }


    return (
        <div>
            <h1 className="year">Year {year}</h1>
            {createSemesters(4)}
        </div>
    );
}