import React, { useState } from "react";
import { Plan } from "../interfaces/plan";
import { PlanEditor } from "./PlanEditor";
import { SemesterList } from "./SemesterList";
import defaults from "../data/default_plan.json";
import { Semester } from "../interfaces/semester";
import { Button } from "react-bootstrap";

const DEFAULT_SEMESTERS = defaults.map((plan) =>
    plan.semesters.map((semester): Semester => ({ ...semester }))
);
const DEFAULT_SEMESTER: Semester = {
    quarter: "Fall",
    id: 0,
    year: "2022",
    courses: []
};
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
    const [minimized, setMinimized] = useState<boolean>(false);
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
    }

    function deleteSemester(id: number) {
        setSemesters(
            semesters.filter(
                (semester: Semester): boolean => semester.id !== id
            )
        );
    }
    function addSemester() {
        if (semesters.length !== 0) {
            setSemesters(
                semesters.concat({
                    ...DEFAULT_SEMESTER,
                    id: semesters[semesters.length - 1].id + 1
                })
            );
        } else setSemesters([{ ...DEFAULT_SEMESTER }]);
    }
    function changeEditing() {
        setEditing(!editing);
    }
    function changeMinimized() {
        setMinimized(!minimized);
    }

    return minimized ? (
        <div className="Plan">
            <div className="Plan-header">
                <h3>{plan.name}</h3>
                <div className="Minimize-button">
                    <div>
                        <Button
                            className="float-right"
                            size="sm"
                            onClick={changeMinimized}
                        >
                            ➕
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    ) : editing ? (
        <div>
            <PlanEditor
                changeEditing={changeEditing}
                plan={plan}
                editPlan={editPlan}
                deletePlan={deletePlan}
            ></PlanEditor>
            <div className="Semester-list">
                <SemesterList
                    semesters={semesters}
                    editSemester={editSemester}
                    deleteSemester={deleteSemester}
                    addSemester={addSemester}
                ></SemesterList>
            </div>
            <Button data-testid="add-sem" onClick={() => addSemester()}>
                Add Semester
            </Button>
        </div>
    ) : (
        <div className="Plan">
            <div className="Plan-header">
                <h3>{plan.name}</h3>
                <div className="Edit-button">
                    <div>
                        <Button
                            className="float-right"
                            size="sm"
                            onClick={changeEditing}
                        >
                            Edit
                        </Button>
                    </div>
                </div>
                <div className="Minimize-button">
                    <div>
                        <Button
                            className="float-right"
                            size="sm"
                            onClick={changeMinimized}
                        >
                            ➖
                        </Button>
                    </div>
                </div>
            </div>
            <div className="Semester-list">
                <SemesterList
                    semesters={semesters}
                    editSemester={editSemester}
                    deleteSemester={deleteSemester}
                    addSemester={addSemester}
                ></SemesterList>
            </div>
            <Button data-testid="add-sem" onClick={() => addSemester()}>
                Add Semester
            </Button>
        </div>
    );
}
