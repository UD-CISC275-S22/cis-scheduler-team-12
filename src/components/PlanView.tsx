import React, { useState } from "react";
import { Plan } from "../interfaces/plan";
import { PlanEditor } from "./PlanEditor";
import { RecordControls } from "./RecordControls";
import { SemesterList } from "./SemesterList";
import defaults from "../data/default_plan.json";
import { Semester } from "../interfaces/semester";

const DEFAULT_SEMESTERS = defaults.map((plan) =>
    plan.semesters.map((semester): Semester => ({ ...semester }))
);

export function PlanView({
    plan,
    deletePlan,
    editPlan
}: {
    plan: Plan;
    deletePlan: (id: number) => void;
    editPlan: (id: number, newPlan: Plan) => void;
}): JSX.Element {
    console.log(DEFAULT_SEMESTERS);
    console.log(DEFAULT_SEMESTERS[0]);
    const [editing, setEditing] = useState<boolean>(false);
    const [semesters, setSemesters] = useState<Semester[]>(
        DEFAULT_SEMESTERS[0]
    );

    function editSemester(id: number, newSemester: Semester) {
        setSemesters(
            semesters.map(
                (semester: Semester): Semester =>
                    semester.id === id ? newSemester : semester
            )
        );
        console.log("Edited semester");
    }

    function deleteSemester(id: number) {
        setSemesters(
            semesters.filter(
                (semester: Semester): boolean => semester.id !== id
            )
        );
        console.log("Deleted semester");
    }

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
                <SemesterList
                    semesters={semesters}
                    editSemester={editSemester}
                    deleteSemester={deleteSemester}
                ></SemesterList>
            </div>
        </div>
    );
}
