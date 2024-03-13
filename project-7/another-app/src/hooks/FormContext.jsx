import React, { createContext, useContext, useReducer } from "react";

const FormContext = createContext();

const initialState = {
    step: 1,
    userData: {
        name: "",
        email: "",
        details: "",
    },
};

const formReducer = (state, action) => {
    switch (action.type) {
        case "SET_STEP":
            return {
                ...state,
                step: action.payload,
            };
        case "SET_USER_DATA":
            return {
                ...state,
                userData: {
                    ...state.userData,
                    [action.payload.field]: action.payload.value,
                },
            };
        case "RESET":
            return initialState;
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

export const FormProvider = ({ children }) => {
    const [state, dispatch] = useReducer(formReducer, initialState);

    return (
        <FormContext.Provider value={{ state, dispatch }}>
            {children}
        </FormContext.Provider>
    );
};

export const useForm = () => useContext(FormContext);
