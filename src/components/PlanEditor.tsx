import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { Plan } from "../interfaces/plan";
import { Semester } from "../interfaces/semester";

export function PlanEditor({
    changeEditing,
    plan,
    editPlan,
    deletePlan
}: {
    changeEditing: () => void;
    plan: Plan;
    editPlan: (id: string, newPlan: Plan) => void;
    deletePlan: (id: string) => void;
}): JSX.Element {
    const [name, setName] = useState<string>(plan.name);
    const [semesters] = useState<Semester[]>(plan.semesters);

    function save() {
        editPlan(plan.id, {
            ...plan,
            name: name || "",
            semesters: semesters || []
        });
        changeEditing();
    }
    return (
        <Container>
            <Row>
                {/*name */}
                <Form.Group controlID="formName" as={Row}>
                    <Form.Label column sm={2}>
                        Name
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={name}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setName(event.target.value)}
                        />
                    </Col>
                </Form.Group>
            </Row>
            {/* Save/Cancel */}
            <Button onClick={save} variant="success" className="me-4">
                Save
            </Button>
            <Button
                onClick={() => deletePlan(plan.name)}
                variant="danger"
                className="me-8"
            >
                Delete
            </Button>
        </Container>
    );
}
