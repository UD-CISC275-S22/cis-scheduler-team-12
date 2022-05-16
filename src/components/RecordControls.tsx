import React from "react";
import { Button } from "react-bootstrap";

export function RecordControls({
    changeEditing
}: {
    changeEditing: () => void;
}): JSX.Element {
    return (
        <div>
            <Button
                data-testid="edit"
                className="float-right"
                size="sm"
                onClick={changeEditing}
            >
                Edit
            </Button>
        </div>
    );
}
