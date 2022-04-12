import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Plan } from "../interfaces/plan";
import { PlanEditor } from "./PlanEditor";
import { RecordControls } from "./RecordControls";
import { SemesterList } from "./SemesterList";

export function PlanView({
    plan,
    deletePlan,
    editPlan
}: {
    plan: Plan;
    deletePlan: (id: string) => void;
    editPlan: (id: string, newPlan: Plan) => void;
}): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);

    function changeEditing() {
        setEditing(!editing);
    }

    return editing ? (
        <PlanEditor
            changeEditing={changeEditing}
            plan={plan}
            editPlan={editPlan}
            deletePlan={deletePlan}
        ></PlanEditor>
    ) : (
        <Container>
            <Row>
                <RecordControls changeEditing={changeEditing}></RecordControls>
                <Col>
                    <h3>{plan.name}</h3>
                    <div className="Semester-list">
                        <SemesterList semesters={plan.semesters}></SemesterList>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
