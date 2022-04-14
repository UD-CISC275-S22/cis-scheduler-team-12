import React, { useState } from "react";
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
    deletePlan: (id: number) => void;
    editPlan: (id: number, newPlan: Plan) => void;
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
        <div className="Plan">
            <div className="Plan-header">
                <h3>{plan.name}</h3>
                <div className="Edit-button">
                    <RecordControls
                        changeEditing={changeEditing}
                    ></RecordControls>
                </div>
            </div>
            <div className="Semester-list">
                <SemesterList semesters={plan.semesters}></SemesterList>
            </div>
        </div>
    );
}
