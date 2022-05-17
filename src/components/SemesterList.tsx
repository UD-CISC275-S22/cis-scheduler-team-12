import React from "react";
import { Semester } from "../interfaces/semester";
import { Container, Row, Col } from "react-bootstrap";
import { SemesterView } from "./SemesterView";

export function SemesterList({
    semesters,
    editSemester,
    deleteSemester,
    addSemester
}: {
    semesters: Semester[];
    editSemester: (id: number, newSemester: Semester) => void;
    deleteSemester: (id: number) => void;
    addSemester: () => void;
}): JSX.Element {
    return (
        <Container className="Semester-list">
            {semesters.map((semester: Semester) => (
                <div key={semester.id} className="Semester">
                    <Row>
                        <Col>
                            <SemesterView
                                data-testid="semester-view"
                                semester={semester}
                                deleteSemester={deleteSemester}
                                editSemester={editSemester}
                                addSemester={addSemester}
                            ></SemesterView>
                        </Col>
                    </Row>
                </div>
            ))}
        </Container>
    );
}
