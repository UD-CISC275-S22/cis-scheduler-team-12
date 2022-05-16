import React from "react";
import { Button, Form } from "react-bootstrap";
import { Course } from "../interfaces/course";

const DEFAULT_COURSE: Course = {
    id: 1,
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
    function changeCode(id: number, newCode: string) {
        setCourses(
            courses.map(
                (course: Course): Course =>
                    course.id === id ? { ...course, code: newCode } : course
            )
        );
    }

    function changeTitle(id: number, newTitle: string) {
        setCourses(
            courses.map(
                (course: Course): Course =>
                    course.id === id ? { ...course, title: newTitle } : course
            )
        );
    }

    function changeCredits(id: number, newCredits: number) {
        setCourses(
            courses.map(
                (course: Course): Course =>
                    course.id === id
                        ? { ...course, credits: newCredits }
                        : course
            )
        );
    }

    function changePrereqs(id: number, newPrereqs: string) {
        setCourses(
            courses.map(
                (course: Course): Course =>
                    course.id === id
                        ? { ...course, prereqs: newPrereqs.split(" ") }
                        : course
            )
        );
    }

    function changeCompleted(id: number, isCompleted: boolean) {
        setCourses(
            courses.map(
                (course: Course): Course =>
                    course.id === id
                        ? { ...course, completed: isCompleted }
                        : course
            )
        );
    }

    function changeRequired(id: number, isRequired: boolean) {
        setCourses(
            courses.map(
                (course: Course): Course =>
                    course.id === id
                        ? { ...course, required: isRequired }
                        : course
            )
        );
    }

    function deleteCourse(id: number) {
        setCourses(
            courses.filter((course: Course): boolean => course.id !== id)
        );
    }

    function addCourse() {
        if (courses.length !== 0) {
            setCourses(
                courses.concat({
                    ...DEFAULT_COURSE,
                    id: courses[courses.length - 1].id + 1
                })
            );
        } else setCourses([{ ...DEFAULT_COURSE }]);
    }

    return (
        <div>
            <table width="auto" className="Course-editor">
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
                            <td>
                                <Form.Control
                                    type="string"
                                    value={course.code}
                                    onChange={(
                                        event: React.ChangeEvent<HTMLInputElement>
                                    ) => {
                                        changeCode(
                                            course.id,
                                            event.target.value
                                        );
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
                                        changeTitle(
                                            course.id,
                                            event.target.value
                                        );
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
                                <Form.Control
                                    type="string"
                                    value={course.prereqs.toString()}
                                    onChange={(
                                        event: React.ChangeEvent<HTMLInputElement>
                                    ) => {
                                        changePrereqs(
                                            course.id,
                                            event.target.value
                                        );
                                        console.log("Course prereqs edited");
                                    }}
                                />
                            </td>
                            <td>
                                <Form.Check
                                    type="checkbox"
                                    id="completed-check"
                                    checked={course.completed}
                                    onChange={() =>
                                        changeCompleted(
                                            course.id,
                                            !course.completed
                                        )
                                    }
                                />
                            </td>
                            <td>
                                <Form.Check
                                    type="checkbox"
                                    id="required-check"
                                    checked={course.required}
                                    onChange={() =>
                                        changeRequired(
                                            course.id,
                                            !course.required
                                        )
                                    }
                                />
                            </td>
                            <td>
                                <Button
                                    data-testid="delete-course"
                                    onClick={() => deleteCourse(course.id)}
                                    variant="danger"
                                    className="me-8"
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Button
                data-testid="add-course"
                onClick={() => addCourse()}
                variant="success"
                className="m-4"
            >
                Add Course
            </Button>
        </div>
    );
}
