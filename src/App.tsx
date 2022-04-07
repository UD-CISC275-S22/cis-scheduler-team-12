import React from "react";
import "./App.css";
import { Plan } from "./interfaces/plan";
import { Semester } from "./interfaces/semester";
import defaults from "./data/default_plan.json";

const DEFAULTS = defaults;

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                CISC Course Planner (Group 12)
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <ul>
                <li>Jackson Leadlove, Alex Trexler, Andrew Woods</li>
            </ul>
        </div>
    );
}

export default App;
