import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { Semester } from "../interfaces/semester";
import { Course } from "../interfaces/course";

export function SemesterEditor({
    changeEditing,
    semester,
    editSemester,
    deleteSemester
}: {
    changeEditing: () => void;
    semester: Semester;
    editSemester: (id: number, newSemester: Semester) => void;
    deleteSemester: (id: number) => void;
}): JSX.Element {
    const [quarter, setQuarter] = useState<string>(semester.quarter);
    const [year, setYear] = useState<number>(semester.year);

    function save() {
        editSemester(semester.id, {
            ...semester,
            year: year || 2022,
            courses: courses || []
        });
    }
    return <></>;
}
