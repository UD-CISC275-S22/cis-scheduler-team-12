import React, { useState } from "react";
import { Semester } from "../interfaces/semester";
import { SemesterEditor } from "./SemesterEditor";
import { Container, Row, Col, Button } from "react-bootstrap";
import { CourseEditor } from "./CourseEditor";
import { Course } from "../interfaces/course";
import { CourseList } from "./CourseList";

export function SemesterView({
    semester,
    deleteSemester,
    editSemester,
    addSemester
}: {
    semester: Semester;
    deleteSemester: (id: number) => void;
    editSemester: (id: number, newSemester: Semester) => void;
    addSemester: () => void;
}): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);
    function changeEditing() {
        setEditing(!editing);
    }

    function changeCourses(newCourses: Course[]) {
        editSemester(semester.id, { ...semester, courses: newCourses });
    }

    return editing ? (
        <Container>
            <SemesterEditor
                changeEditing={changeEditing}
                semester={semester}
                editSemester={editSemester}
                deleteSemester={deleteSemester}
                addSemester={addSemester}
            ></SemesterEditor>
            <CourseEditor
                courses={semester.courses}
                setCourses={changeCourses}
            ></CourseEditor>
        </Container>
    ) : (
        <Container className="Semester-view">
            <div key={semester.id} className="Semester">
                <Row>
                    <Col>
                        <div className="Semester-header">
                            <h4>
                                {semester.quarter} {semester.year}
                            </h4>
                            <div className="Edit-button">
                                <div>
                                    <Button
                                        data-testid="edit"
                                        className="float-right"
                                        size="sm"
                                        onClick={changeEditing}
                                    >
                                        Edit
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div>
                <CourseList courses={semester.courses}></CourseList>
            </div>
        </Container>
    );
}
