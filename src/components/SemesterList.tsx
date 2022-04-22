import React from "react";
import { Semester } from "../interfaces/semester";
import { Container, Row, Col } from "react-bootstrap";
import { CourseList } from "./CourseList";
import { SemesterView } from "./SemesterView";

export function SemesterList({
    semesters,
    editSemester,
    deleteSemester
}: {
    semesters: Semester[];
    editSemester: (id: number, newSemester: Semester) => void;
    deleteSemester: (id: number) => void;
}): JSX.Element {
    return (
        <Container className="Semester-list">
            {semesters.map((semester: Semester) => (
                <div key={semester.id} className="Semester">
                    <Row>
                        <Col>
                            <SemesterView
                                semester={semester}
                                deleteSemester={deleteSemester}
                                editSemester={editSemester}
                            ></SemesterView>
                        </Col>
                    </Row>
                </div>
            ))}
        </Container>
    );
}
