import React from "react";
import { Course } from "../interfaces/course";

export function CourseList({ courses }: { courses: Course[] }): JSX.Element {
    return (
        <table className="Course-table">
            <tr>
                <th>Course Code</th>
                <th>Course Name</th>
                <th>Credits</th>
            </tr>
            {courses.map((course: Course) => (
                <tr key={course.code}>
                    <td>{course.code}</td>
                    <td>{course.title}</td>
                    <td>{course.credits}</td>
                </tr>
            ))}
        </table>
    );
}
