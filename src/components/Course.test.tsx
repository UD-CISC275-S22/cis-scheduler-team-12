import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "../App";
import { cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Edit, Add, and Remove Courses Tests", () => {
    beforeEach(() => {
        render(<App />);
    });
    afterEach(cleanup);
    test("tesing edit a course", () => {
        const edit = screen.getAllByTestId("edit");
        //selecting fall2022
        edit[1].click();
        //changing course code to CISC275 of first course
        const textbox = screen.queryAllByRole("textbox");
        userEvent.type(textbox[1], "CISC367");
        //saving semester
        const saveSem = screen.getByTestId("save-semester");
        saveSem.click();
        //checking to see if default name is in...successful adding of course
        expect(screen.queryByText(/CISC367/i)).toBeInTheDocument();
    });
    test("tesing add a course", () => {
        const edit = screen.getAllByTestId("edit");
        //changing fall2022
        edit[1].click();
        const addCourse = screen.getByTestId("add-course");
        //adding blank course
        addCourse.click();
        //saving semester
        const saveSem = screen.getByTestId("save-semester");
        saveSem.click();
        //checking to see if default name is in...successful adding of course
        expect(screen.queryByText(/new course/i)).toBeInTheDocument();
    });
    test("tesing remove a course", () => {
        const edit = screen.getAllByTestId("edit");
        //changing fall2022
        edit[1].click();
        const delCourse = screen.getAllByTestId("delete-course");
        //deleting first course
        delCourse[0].click();
        //deleting semester
        const saveSem = screen.getByTestId("save-semester");
        saveSem.click();
        const edit2 = screen.getAllByTestId("edit");
        //changing fall2022
        edit2[1].click();
        const delCourse2 = screen.getAllByTestId("delete-course");
        //checking to see if default name is in...successful adding of course
        const length = delCourse2.length;
        expect(length === 1);
    });
});
