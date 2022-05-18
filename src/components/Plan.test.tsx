import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

describe("PlanList Component tests", () => {
    beforeEach(() => {
        render(<App />);
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
    test("Can change plan name", () => {
        //changing to plan edit mode
        const editPlan = screen.getAllByText("Edit");
        editPlan[0].click();
        //finding textbox
        const textbox = screen.queryAllByRole("textbox");
        userEvent.type(textbox[0], " test");
        //testing for edited title
        expect(screen.queryByText("Default Plan test")).toBeInTheDocument;
    });
    test("Can delete plan", () => {
        //changing to plan edit mode
        const editPlan = screen.getAllByText("Edit");
        editPlan[0].click();
        //clicking delete button
        const deleteButton = screen.getByTestId("delete-plan");
        deleteButton.click();
        //testing for edited title
        expect(screen.queryByText("Default Plan")).toBeNull;
    });
    test("Can add a plan", () => {
        //clicking add plan
        const addPlan = screen.getByTestId("addmodal");
        addPlan.click();
        //give new plan a name
        const textbox = screen.queryAllByRole("textbox");
        userEvent.type(textbox[0], "New Plan");
        //confirming add plan
        const confirm = screen.getByTestId("save-plan");
        confirm.click();
        //testing if new title is present
        expect(screen.queryByText("New Plan")).toBeInTheDocument;
    });
});
