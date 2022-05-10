import React from "react";
import { render, screen } from "@testing-library/react";
import { PlanList } from "./PlanList";
import defaults from "../data/default_plan.json";
import { Plan } from "../interfaces/plan";

describe("PlanList Component tests", () => {
    beforeEach(() => {
        render(
            <PlanList
                plans={defaults}
                deletePlan={function (id: number): void {
                    console.log("deleted plan with id: " + id);
                }}
                editPlan={function (id: number, newPlan: Plan): void {
                    console.log(
                        "edited plan with id: " +
                            id +
                            " and replaced it with plan: " +
                            newPlan.name
                    );
                }}
            />
        );
    });

    test("Renders the default plan", () => {
        const defaultPlanTitle = screen.getByText(/Default Plan/i);
        const f22 = screen.getByText(/Fall 2022/i);
        const s23 = screen.getByText(/Spring 2023/i);
        const w23 = screen.getByText(/Winter 2023/i);
        const u23 = screen.getByText(/Summer 2023/i);
        expect(defaultPlanTitle).toBeInTheDocument();
        expect(f22).toBeInTheDocument();
        expect(s23).toBeInTheDocument();
        expect(w23).toBeInTheDocument();
        expect(u23).toBeInTheDocument();
    });

    /*test("", () => {});

    test("", () => {});

    test("", () => {});*/
});
