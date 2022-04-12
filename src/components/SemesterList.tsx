import React from "react";
import { Semester } from "../interfaces/semester";
import { Container, Row, Col } from "react-bootstrap";

export function SemesterList({
    semesters
}: {
    semesters: Semester[];
}): JSX.Element {
    return (
        <Container className="Semester-list">
            {semesters.map((semester: Semester) => (
                <div key={semester.id} className="Semester">
                    <Row>
                        <Col>
                            <h4>
                                {semester.quarter} {semester.year}
                            </h4>
                            <div>
                                Course list component goes here. If the text is
                                longer than this is what happens.
                            </div>
                        </Col>
                    </Row>
                </div>
            ))}
        </Container>
    );
}
