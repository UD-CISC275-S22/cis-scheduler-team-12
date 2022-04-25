import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Course } from "../interfaces/course";

const DEFAULT_COURSE: Course = {
    id: 0,
    code: "CISC101",
    title: "new course",
    credits: 3,
    prereqs: [],
    completed: false,
    required: false
};

export function CourseEditor({
    courses,
    setCourses
}: {
    courses: Course[];
    setCourses: (courses: Course[]) => void;
}): JSX.Element {
    const [courseList, setCourseList] = useState<Course[]>(courses);

    function changeCode(id: number, newCode: string) {
        setCourseList(
            courses.map(
                (course: Course): Course =>
                    course.id === id ? { ...course, code: newCode } : course
            )
        );
        setCourses(
            courses.map(
                (course: Course): Course =>
                    course.id === id ? { ...course, code: newCode } : course
            )
        );
    }

    function changeTitle(id: number, newTitle: string) {
        setCourseList(
            courses.map(
                (course: Course): Course =>
                    course.id === id ? { ...course, title: newTitle } : course
            )
        );
        setCourses(
            courses.map(
                (course: Course): Course =>
                    course.id === id ? { ...course, title: newTitle } : course
            )
        );
    }

    function changeCredits(id: number, newCredits: number) {
        setCourseList(
            courses.map(
                (course: Course): Course =>
                    course.id === id
                        ? { ...course, credits: newCredits }
                        : course
            )
        );
        setCourses(
            courses.map(
                (course: Course): Course =>
                    course.id === id
                        ? { ...course, credits: newCredits }
                        : course
            )
        );
    }

    function deleteCourse(id: number) {
        setCourseList(
            courses.filter((course: Course): boolean => course.id !== id)
        );
        setCourses(
            courses.filter((course: Course): boolean => course.id !== id)
        );
    }

    function addCourse() {
        setCourseList(
            courses.concat({ ...DEFAULT_COURSE, id: courses.length + 1 })
        );
        setCourses(
            courses.concat({ ...DEFAULT_COURSE, id: courses.length + 1 })
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
                <tr key={course.id}>
                    <td>
                        <Form.Control
                            type="string"
                            value={course.code}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                changeCode(course.id, event.target.value);
                                console.log("Course code edited");
                            }}
                        />
                    </td>
                    <td>
                        <Form.Control
                            type="string"
                            value={course.title}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                changeTitle(course.id, event.target.value);
                                console.log("Course title edited");
                            }}
                        />
                    </td>
                    <td>
                        <Form.Control
                            type="number"
                            value={course.credits}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                changeCredits(
                                    course.id,
                                    parseInt(event.target.value, 10)
                                );
                                console.log("Course credits edited");
                            }}
                        />
                    </td>
                    <td>
                        <Button
                            onClick={() => deleteCourse(course.id)}
                            variant="danger"
                            className="me-8"
                        >
                            Delete
                        </Button>
                    </td>
                </tr>
            ))}
            <tr>
                <Button
                    onClick={() => addCourse()}
                    variant="success"
                    className="m-4"
                >
                    Add Course
                </Button>
            </tr>
        </table>
    );
}
