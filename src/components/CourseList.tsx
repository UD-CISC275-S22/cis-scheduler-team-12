import React from "react";
import { Course } from "../interfaces/course";

export function CourseList({ courses }: { courses: Course[] }): JSX.Element {
    function getEmoji(bool: boolean): string {
        if (bool) {
            return "✔️";
        } else {
            return "❌";
        }
    }

    return (
        <table width="auto" className="Course-table">
            <tr>
                <th>Course Code</th>
                <th>Course Name</th>
                <th>Credits</th>
                <th>Prereqs</th>
                <th>Completed</th>
                <th>Required</th>
            </tr>
            {courses.map((course: Course) => (
                <tr key={course.id}>
                    <td>{course.code}</td>
                    <td>{course.title}</td>
                    <td>{course.credits}</td>
                    <td>{course.prereqs.toString}</td>
                    <td>{getEmoji(course.completed)}</td>
                    <td>{getEmoji(course.required)}</td>
                </tr>
            ))}
        </table>
    );
}
