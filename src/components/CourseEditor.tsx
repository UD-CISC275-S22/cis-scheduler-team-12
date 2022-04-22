import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Course } from "../interfaces/course";

export function CourseEditor({
    courses,
    setCourses
}: {
    courses: Course[];
    setCourses: (courses: Course[]) => void;
}): JSX.Element {
    const [courseList, setCourseList] = useState<Course[]>(courses);

    function changeCode(oldCode: string, newCode: string) {
        setCourseList(
            courses.map(
                (course: Course): Course =>
                    course.code === oldCode
                        ? { ...course, code: newCode }
                        : course
            )
        );
        setCourses(
            courses.map(
                (course: Course): Course =>
                    course.code === oldCode
                        ? { ...course, code: newCode }
                        : course
            )
        );
    }

    function changeTitle(oldCode: string, newTitle: string) {
        setCourseList(
            courses.map(
                (course: Course): Course =>
                    course.code === oldCode
                        ? { ...course, title: newTitle }
                        : course
            )
        );
        setCourses(
            courses.map(
                (course: Course): Course =>
                    course.code === oldCode
                        ? { ...course, title: newTitle }
                        : course
            )
        );
    }

    function changeCredits(oldCode: string, newCredits: number) {
        setCourseList(
            courses.map(
                (course: Course): Course =>
                    course.code === oldCode
                        ? { ...course, credits: newCredits }
                        : course
            )
        );
        setCourses(
            courses.map(
                (course: Course): Course =>
                    course.code === oldCode
                        ? { ...course, credits: newCredits }
                        : course
            )
        );
    }

    return (
        <table width="500" className="Course-editor">
            <tr>
                <th>Course Code</th>
                <th>Course Name</th>
                <th>Credits</th>
            </tr>
            {courseList.map((course: Course) => (
                <tr key={course.code}>
                    <td width="30%">
                        <Form.Control
                            type="string"
                            value={course.code}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                changeCode(course.code, event.target.value);
                                console.log("Course code edited");
                            }}
                        />
                    </td>
                    <td width="50%">
                        <Form.Control
                            type="string"
                            value={course.title}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                changeTitle(course.code, event.target.value);
                                console.log("Course title edited");
                            }}
                        />
                    </td>
                    <td width="20%">
                        <Form.Control
                            type="number"
                            value={course.credits}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                changeCredits(
                                    course.code,
                                    parseInt(event.target.value, 10)
                                );
                                console.log("Course credits edited");
                            }}
                        />
                    </td>
                </tr>
            ))}
        </table>
    );
}
