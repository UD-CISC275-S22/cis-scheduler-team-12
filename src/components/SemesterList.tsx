import React from "react";
import { Semester } from "../interfaces/semester";
import { Container, Row, Col } from "react-bootstrap";

export function SemesterList({
    semesters
}: {
    semesters: Semester[];
}): JSX.Element {
    return (
        <Container>
            {semesters.map((semester: Semester) => (
                <div key={semester.id}>
                    <Row>
                        <Col>
                            <h4>
                                {semester.quarter} {semester.year}
                            </h4>
                        </Col>
                    </Row>
                </div>
            ))}
        </Container>
    );
}
