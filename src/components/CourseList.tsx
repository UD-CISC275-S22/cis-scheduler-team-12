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
            <tbody>
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
                        <td width="auto">{course.code}</td>
                        <td width="auto">{course.title}</td>
                        <td width="auto">{course.credits}</td>
                        <td width="auto">{course.prereqs.toString()}</td>
                        <td width="auto">{getEmoji(course.completed)}</td>
                        <td width="auto">{getEmoji(course.required)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
