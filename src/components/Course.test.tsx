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
        //changing course code to CISC367 of first course
        const textbox = screen.queryAllByRole("textbox");
        userEvent.type(textbox[1], "CISC367");
        //saving semester
        const saveSem = screen.getByTestId("save-semester");
        saveSem.click();
        //checking to see if course code is now CISC275CISC367...success
        expect(screen.queryByText(/CISC367/i)).toBeInTheDocument();
    });
    test("tesing add a course", () => {
        const edit = screen.getAllByTestId("edit");
        // console.log(edit);
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
    test("Renders the default plan", () => {
        const f22 = screen.getAllByText(/Course Code/i);
        const s23 = screen.getAllByText(/Course Name/i);
        const w23 = screen.getAllByText(/Credits/i);
        const u23 = screen.getAllByText(/Prereqs/i);
        const x23 = screen.getAllByText(/Completed/i);
        const y23 = screen.getAllByText(/Required/i);
        expect(f22[0]).toBeInTheDocument();
        expect(s23[0]).toBeInTheDocument();
        expect(w23[0]).toBeInTheDocument();
        expect(u23[0]).toBeInTheDocument();
        expect(x23[0]).toBeInTheDocument();
        expect(y23[0]).toBeInTheDocument();
    });
    // test("tesing to see if courses are listed", () => {
    //     //checking to see if default fields are even listed
    //     const titles = screen.getAllByText(/Course Code/i);
    //     console.log(titles[1]);
    //     expect(titles[1].children).toEqual("Course Code");
    //     // expect(titles[1]);
    //     // console.log(screen.queryAllByText(/Course Code/i));
    //     // expect(screen.findAllByText(/Course Code/i)).toBeInTheDocument();
    //     expect(screen.queryAllByText(/Course Name/i)).toBeTruthy();
    //     expect(screen.queryAllByText(/Credits/i)).toBeTruthy();
    //     expect(screen.queryAllByText(/Prereqs/i)).toBeTruthy();
    //     expect(screen.queryAllByText(/Completed/i)).toBeTruthy();
    //     expect(screen.queryAllByText(/Required/i)).toBeTruthy();
    // });
    test("tesing remove a course", () => {
        const edit = screen.getAllByTestId("edit");
        //changing fall2022
        edit[1].click();
        const delCourse = screen.getAllByTestId("delete-course");
        //deleting first course
        delCourse[0].click();
        //save changes
        const saveSem = screen.getByTestId("save-semester");
        saveSem.click();
        const edit2 = screen.getAllByTestId("edit");
        //changing fall2022
        edit2[1].click();
        const delCourse2 = screen.getAllByTestId("delete-course");
        //checking to see if default name is in...successful removal of course
        const length = delCourse2.length;
        expect(length === 1);
    });
});
