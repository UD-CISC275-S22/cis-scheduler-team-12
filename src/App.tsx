import React from "react";
import "./App.css";
/* import { Plan } from "./interfaces/plan";
import { Semester } from "./interfaces/semester";
import defaults from "./data/default_plan.json"; */

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                CISC Course Planner (Group 12)
            </header>
            <div className="Welcome-message">
                <p>
                    Welcome to our CISC Course Planner! On this website, you can
                    create plans for your degree. <br></br>
                    Each plan consists of a list of semesters, and each semester
                    consists of a list of courses. <br></br> Each course can be
                    modified to suit your specific requirements.
                </p>
            </div>
            <br></br>
            <div className="Madeby-text">
                <p>Made by Jackson Leadlove, Alex Trexler, and Andrew Woods</p>
            </div>
        </div>
    );
}

export default App;
