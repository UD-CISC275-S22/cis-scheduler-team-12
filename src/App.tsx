import React, { useState } from "react";
import "./App.css";
import { Plan } from "./interfaces/plan";
import defaults from "./data/default_plan.json";
import { PlanList } from "./components/PlanList";
import { AddPlanModal } from "./components/AddPlanModal";
import { Button } from "react-bootstrap";

export const DEFAULTS = defaults.map((plan): Plan => ({ ...plan }));

function App(): JSX.Element {
    const [showAddModal, setShowAddModal] = useState(false);
    const [plans, setPlans] = useState<Plan[]>(DEFAULTS);

    function editPlan(id: number, newPlan: Plan) {
        setPlans(
            plans.map((plan: Plan): Plan => (plan.id === id ? newPlan : plan))
        );
    }

    function deletePlan(id: number) {
        setPlans(plans.filter((plan: Plan): boolean => plan.id !== id));
    }

    function addPlan(newPlan: Plan) {
        const existing = plans.find(
            (plan: Plan): boolean => plan.name === newPlan.name
        );
        if (existing === undefined) {
            setPlans([...plans, { ...newPlan, id: plans.length + 1 }]);
        }
    }
    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true);
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
            <div>
                <PlanList
                    plans={plans}
                    editPlan={editPlan}
                    deletePlan={deletePlan}
                ></PlanList>
                <div>
                    <Button
                        variant="success"
                        className="m-4"
                        onClick={handleShowAddModal}
                    >
                        Add New Plan
                    </Button>
                    <AddPlanModal
                        show={showAddModal}
                        handleClose={handleCloseAddModal}
                        addPlan={addPlan}
                    ></AddPlanModal>
                </div>
            </div>
            <div id="Footer">
                <p>Made by Jackson Leadlove, Alex Trexler, and Andrew Woods</p>
            </div>
        </div>
    );
}

export default App;
