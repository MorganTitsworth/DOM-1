import React from "react";
import { useForm } from "../hooks/FormContext";

export default function Confirmation() {
    const { state } = useForm();
    const { name, email, details } = state.userData;

    return (
        <div>
            <h2>Confirmation</h2>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Details: {details}</p>
        </div>
    );
}
