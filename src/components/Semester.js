import React from "react";
import Course from './Course'
import Courses from '../Courses.json'

export default function Semester({ year, period }) {

    const yearCourses = Courses.filter(y => y.year == year)
    const periodCourses = yearCourses.at(0).periods.filter(p => p.period == period)
    const thisCourse = periodCourses.length > 0


    function courses() {
        return thisCourse ? periodCourses.at(0).courses.map(c => (<Course code={c.code} name={c.name} hp={c.hp} />)) : []
    }

    return (
        <div>
            <h3 className="semester">Läsperiod {period} </h3>
            <ul>{courses}</ul>
        </div>

    );
}