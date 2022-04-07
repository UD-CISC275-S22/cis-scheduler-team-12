/* eslint-disable @typescript-eslint/no-unused-vars */ // DELETE ME LATER!!!!!!!!!!!import React from "react";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Plan } from "../interfaces/plan";
import { PlanEditor } from "./PlanEditor";

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
        // Should link to an "editing plan state" component somehow
        setEditing(!editing);
    }

    return <></>;
}
