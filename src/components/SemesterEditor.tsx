import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { Semester } from "../interfaces/semester";
import { Course } from "../interfaces/course";

export function SemesterEditor({
    changeEditing,
    semester,
    editSemester,
    deleteSemester
}: {
    changeEditing: () => void;
    semester: Semester;
    editSemester: (id: number, newSemester: Semester) => void;
    deleteSemester: (id: number) => void;
}): JSX.Element {
    const [quarter, setQuarter] = useState<string>(semester.quarter);
    const [year, setYear] = useState<string>(semester.year);
    const [courses] = useState<Course[]>(semester.courses);

    function save() {
        editSemester(semester.id, {
            id: semester.id,
            quarter: quarter,
            year: year || "",
            courses: courses || []
        });
        changeEditing();
    }
    return (
        <Container>
            <Row>
                {/* Semester Quarter */}
                <Form.Group controlID="formQuarter" as={Row}>
                    <Col>
                        <Form.Label>Quarter:</Form.Label>
                        <Form.Select
                            value={quarter}
                            onChange={(
                                event: React.ChangeEvent<HTMLSelectElement>
                            ) => {
                                setQuarter(event.target.value);
                                console.log("Quarter edited");
                            }}
                        >
                            <option value="Fall">Fall</option>
                            <option value="Winter">Winter</option>
                            <option value="Spring">Spring</option>
                            <option value="Summer">Summer</option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Label>Year:</Form.Label>
                        <Form.Control
                            type="number"
                            value={year}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                setYear(event.target.value);
                                console.log("Year edited");
                            }}
                        />
                    </Col>
                </Form.Group>
            </Row>
            {/* Save/Cancel */}
            <Button onClick={save} variant="success" className="me-4">
                Save
            </Button>
            <Button
                onClick={() => deleteSemester(semester.id)}
                variant="danger"
                className="me-8"
            >
                Delete
            </Button>
        </Container>
    );
}
