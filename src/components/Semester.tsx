import React, { useState } from "react";
import { Semester } from "../interfaces/semester";

export function SemesterComponent(initialSemester: Semester): JSX.Element {
    const [semester] = useState<Semester>(initialSemester);

    return (
        <div className="Semester">
            <h4>
                {semester.quarter} + {semester.year}
            </h4>
        </div>
    );
}
