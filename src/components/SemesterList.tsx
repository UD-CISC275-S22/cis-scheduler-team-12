import React, { useState } from "react";
import { Semester } from "../interfaces/semester";
import { Container, Row, Col } from "react-bootstrap";

export function SemesterList({
    semesters
}: {
    semesters: Semester[];
}): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);

    function changeEditing() {
        setEditing(!editing);
    }
    return editing ? (
        <></>
    ) : (
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
