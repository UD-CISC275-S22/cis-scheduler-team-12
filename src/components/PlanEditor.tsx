/* eslint-disable @typescript-eslint/no-unused-vars */
/* ^^^^ DELETE ME LATER ^^^^ */
import React, { useState } from "react";
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

    const [semesters, setSemesters] = useState<Semester[]>(plan.semesters);

    function save() {
        editPlan(plan.id, {
            ...plan,
            name: name,
            semesters: semesters
        });
        changeEditing();
    }

    function cancel() {
        changeEditing();
    }

    return <></>;
}
