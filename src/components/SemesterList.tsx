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
                                <table className="Course-table">
                                    <tr>
                                        <th>Course Code</th>
                                        <th>Course Name</th>
                                        <th>Credits</th>
                                    </tr>
                                    <tr>
                                        <td>CISC275</td>
                                        <td>
                                            Introduction to Software Engineering
                                        </td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <td>MATH242</td>
                                        <td>
                                            Analytic Geometry and Calculus B
                                        </td>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <td>CISC355</td>
                                        <td>Computers, Ethics, and Society</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <td>ENTR456</td>
                                        <td>Startup Experience II</td>
                                        <td>3</td>
                                    </tr>
                                </table>
                            </div>
                        </Col>
                    </Row>
                </div>
            ))}
        </Container>
    );
}
