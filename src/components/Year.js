import React from "react";
import Semester from "./Semester";
import { yearheader } from '../styles/Year.css'

export default function Year({ year }) {
    return (
        <div>
            <h1 className="year-header">Year {year}</h1>
            <Semester period="1" />
            <Semester period="2" />
            <Semester period="3" />
            <Semester period="4" />
        </div>
    );
}