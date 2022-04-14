import React from "react";
import { Semester } from "../interfaces/semester";
import { Container, Row, Col } from "react-bootstrap";
import { CourseList } from "./CourseList";

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
                                <CourseList
                                    courses={semester.courses}
                                ></CourseList>
                            </div>
                        </Col>
                    </Row>
                </div>
            ))}
        </Container>
    );
}
