import React from "react";
import { useForm } from "../hooks/FormContext";

export default function StepOneComponent() {
    const { state, dispatch } = useForm();
    const { name, email } = state.userData;

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
                name='name'
                value={name}
                onChange={handleChange}
                placeholder='Name'
            />
            <input
                name='email'
                value={email}
                onChange={handleChange}
                placeholder='Email'
            />
            <button
                onClick={() => {
                    dispatch({ type: "SET_STEP", payload: 2 });
                }}
            >
                Next Step
            </button>
        </form>
    );
}
