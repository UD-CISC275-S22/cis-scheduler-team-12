import React from "react";
import { render /*, screen */ } from "@testing-library/react";
import { SemesterList } from "./SemesterList";
import defaults from "../data/default_plan.json";
import { Semester } from "../interfaces/semester";

const DEFAULT_SEMESTERS = defaults.map((plan) =>
    plan.semesters.map((semester): Semester => ({ ...semester }))
);

describe("PlanList Component tests", () => {
    beforeEach(() => {
        render(
            <SemesterList
                semesters={DEFAULT_SEMESTERS[0]}
                editSemester={function (
                    id: number,
                    newSemester: Semester
                ): void {
                    console.log(
                        "edited semester with id: " +
                            id +
                            " and replaced it with semester: " +
                            newSemester.quarter +
                            " " +
                            newSemester.year
                    );
                }}
                deleteSemester={function (id: number): void {
                    console.log("deleted semester with id: " + id);
                }}
            />
        );
    });

    //test("Renders the default semester", () => {});

    /*test("", () => {});

    test("", () => {});

    test("", () => {});*/
});
