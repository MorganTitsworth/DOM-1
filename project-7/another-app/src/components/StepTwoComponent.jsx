import React from "react";
import { useForm } from "../hooks/FormContext";

export default function StepTwoComponent() {
    const { state, dispatch } = useForm();
    const { details } = state.userData;

    const handleChange = (e) => {
        dispatch({
            type: "SET_USER_DATA",
            payload: {
                field: e.target.name,
                value: e.target.value,
            },
        });
    };

    return (
        <form>
            <input
                name='details'
                value={details}
                onChange={handleChange}
                placeholder='Details'
            />
            <button
                onClick={() => {
                    dispatch({ type: "SET_STEP", payload: 3 });
                }}
            >
                Next Step
            </button>
        </form>
    );
}
