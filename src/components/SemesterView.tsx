import React, { useState } from "react";
import { Semester } from "../interfaces/semester";
import { SemesterEditor } from "./SemesterEditor";
import { Container, Row } from "react-bootstrap";
import { RecordControls } from "./RecordControls";

export function SemesterView({
    semester,
    deleteSemester,
    editSemester
}: {
    semester: Semester;
    deleteSemester: (id: number) => void;
    editSemester: (id: number, newSemester: Semester) => void;
}): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);

    function changeEditing() {
        setEditing(!editing);
    }

    return editing ? (
        <SemesterEditor
            changeEditing={changeEditing}
            semester={semester}
            editSemester={editSemester}
            deleteSemester={deleteSemester}
        ></SemesterEditor>
    ) : (
        <Container className="Semester-view">
            <div key={semester.id} className="Semester">
                <Row>
                    <div className="col">
                        <div className="Semester-header">
                            <h4>
                                {semester.quarter} {semester.year}
                            </h4>
                            <div className="Edit-button">
                                <RecordControls
                                    changeEditing={changeEditing}
                                ></RecordControls>
                            </div>
                        </div>
                    </div>
                </Row>
            </div>
        </Container>
    );
}
