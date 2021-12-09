import React from "react";
import Course from './Course'
import Courses from '../Courses.json'

export default function Semester({ year, period }) {

    const yearCourses = Courses.filter(y => y.year == year)
    const periodCourses = yearCourses.at(0).periods.filter(p => p.period == period)


    function getCourses() {
        return periodCourses.at(0)?.courses.map(c => <Course key={c.code} code={c.code} name={c.name} hp={c.hp} link={c.link} />)
    }

    return (
        <div key={year + "" + period}>
            <h2 className="semester">Läsperiod {period} </h2>
            <h4>{getCourses()}</h4>
        </div>

    );
}