import React, { useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import { Plan } from "../interfaces/plan";

export function AddPlanModal({
    show,
    handleClose,
    showPlanNameError,
    addPlan
}: {
    show: boolean;
    handleClose: () => void;
    showPlanNameError: boolean;
    addPlan: (newPlan: Plan) => void;
}) {
    const [name, setName] = useState<string>("New Plan");
    function saveChanges() {
        if (showPlanNameError === true) {
            console.log("showPlanNameError is READ AS true");
        } else {
            console.log("showPlanNameError is READ AS false");
            addPlan({
                id: 0,
                name: name,
                semesters: []
            });
            handleClose();
        }
    }

    return (
        <div>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Plan</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Title */}
                    <Form.Group controlId="formId" as={Row}>
                        <Form.Label column sm={3}>
                            Plan:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={name}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setName(event.target.value)}
                            />
                        </Col>
                        {showPlanNameError && (
                            <div>Plan name already exists.</div>
                        )}
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={saveChanges}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
