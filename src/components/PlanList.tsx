import React from "react";
import { Plan } from "../interfaces/plan";
import { Stack } from "react-bootstrap";
import { PlanView } from "./PlanView";

export function PlanList({
    plans,
    deletePlan,
    editPlan
}: {
    plans: Plan[];
    deletePlan: (id: number) => void;
    editPlan: (id: number, newPlan: Plan) => void;
}): JSX.Element {
    return (
        <div>
            <Stack gap={3}>
                {plans.map((plan: Plan) => (
                    <div key={plan.id} className="bg-light border m-2 p-2">
                        <PlanView
                            plan={plan}
                            deletePlan={deletePlan}
                            editPlan={editPlan}
                        ></PlanView>
                    </div>
                ))}
            </Stack>
        </div>
    );
}
