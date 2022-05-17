import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { Semester } from "../interfaces/semester";

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
    addSemester: () => void;
}): JSX.Element {
    const [quarter, setQuarter] = useState<string>(semester.quarter);
    const [year, setYear] = useState<string>(semester.year);
    const courses = semester.courses;
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
            <Row className="justify-Center">
                {/* Semester Quarter */}
                <Form.Group
                    controlid="formQuarter"
                    as={Row}
                    className="quarter-Year-Form"
                >
                    <Col>
                        <Form.Label>Quarter:</Form.Label>
                        <Form.Select
                            data-testid="select-quarter"
                            value={quarter}
                            onChange={(
                                event: React.ChangeEvent<HTMLSelectElement>
                            ) => {
                                setQuarter(event.target.value);
                                //console.log("Quarter edited");
                            }}
                        >
                            <option data-testid="quarter-option" value="Fall">
                                Fall
                            </option>
                            <option data-testid="quarter-option" value="Winter">
                                Winter
                            </option>
                            <option data-testid="quarter-option" value="Spring">
                                Spring
                            </option>
                            <option data-testid="quarter-option" value="Summer">
                                Summer
                            </option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Label>Year:</Form.Label>
                        <Form.Control
                            data-testid="change-year"
                            type="textbox"
                            value={year}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                setYear(event.target.value);
                                //console.log("Year edited");
                            }}
                        />
                    </Col>
                </Form.Group>
            </Row>
            {/* Save/Cancel */}
            <Button
                data-testid="save-semester"
                onClick={save}
                variant="success"
                className="me-4 save-Semester"
            >
                Save Semester
            </Button>
            <Button
                data-testid="delete-semester"
                onClick={() => deleteSemester(semester.id)}
                variant="danger"
                className="me-8 delete-Semester"
            >
                Delete Semester
            </Button>
        </Container>
    );
}
