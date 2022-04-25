import React from "react";
import { Course } from "../interfaces/course";

export function CourseList({ courses }: { courses: Course[] }): JSX.Element {
    return (
        <table width="500" className="Course-table">
            <tr>
                <th>Course Code</th>
                <th>Course Name</th>
                <th>Credits</th>
            </tr>
            {courses.map((course: Course) => (
                <tr key={course.id}>
                    <td width="20%">{course.code}</td>
                    <td width="50%">{course.title}</td>
                    <td width="30%">{course.credits}</td>
                </tr>
            ))}
        </table>
    );
}
