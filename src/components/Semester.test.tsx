import React from "react";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

describe("Semester tests", () => {
    beforeEach(() => {
        render(<App />);
    });
    afterEach(cleanup);
    test("testing change semester quarter", () => {
        //switching first semester to edit mode
        const edit = screen.getAllByTestId("edit");
        edit[0].click();
        //selecting change quarter to spring
        const changeQuarter = screen.getByTestId("select-quarter");
        fireEvent.change(changeQuarter, { target: { value: "Spring" } });
        //saving semester changes
        const saveSemester = screen.getByTestId("save-semester");
        saveSemester.click();
        //checking semester has changed
        expect(screen.queryByText(/Spring 2022/i)).toBeInTheDocument();
    });
    test("testing change semester year", () => {
        //switching first semester to edit mode
        const edit = screen.getAllByTestId("edit");
        edit[0].click();
        //selecting year textbox
        const textbox = screen.queryAllByRole("textbox");
        userEvent.type(textbox[0], "2025");
        //saving semester changes
        const saveSemester = screen.getByTestId("save-semester");
        saveSemester.click();
        //checking semester has changed
        expect(screen.queryByText(/Fall 20222025/i)).toBeInTheDocument();
    });
    test("testing delete a semester", () => {
        //testing first semester exists
        expect(screen.queryByText(/Fall 2022/i)).toBeInTheDocument();
        //switching first semester to edit mode
        const edit = screen.getAllByTestId("edit");
        edit[0].click();
        //deleting semester
        userEvent.click(screen.getByTestId("delete-semester"));
        //checking semester is gone
        expect(screen.queryByText(/Fall 2022/i)).toBeNaN;
    });
    test("testing add a semester", () => {
        //testing first semester exists
        expect(screen.queryAllByText(/Fall 2022/i).length).toBe(1);
        //switching first semester to edit mode
        const addSemester = screen.getByTestId("add-sem");
        addSemester.click();
        //checking semester is gone
        expect(screen.queryAllByText(/Fall 2022/i).length).toBe(2);
    });
});
