import React from "react";
import { useForm } from "../hooks/FormContext";
import StepOneComponent from "./StepOneComponent";
import StepTwoComponent from "./StepTwoComponent";
import Confirmation from "./Confirmation";
// ...
// ...

export default function FormComponent() {
    const { state, dispatch } = useForm();
    const { step } = state;

    return (
        <div>
            <h1>this is step {step} of 3</h1>
            {step === 1 && <StepOneComponent />}
            {step === 2 && <StepTwoComponent />}
            {step === 3 && <Confirmation />}
            <button
                onClick={() => {
                    dispatch({ type: "SET_STEP", payload: 1 });
                    dispatch({ type: "RESET" });
                }}
            >
                Start Over
            </button>
        </div>
    );
}
