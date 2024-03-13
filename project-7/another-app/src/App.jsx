import "./App.css";
import { FormProvider } from "./hooks/FormContext";
import FormComponent from "./components/FormComponent";

function App() {
    return (
        <>
            <FormProvider>
                <FormComponent />
            </FormProvider>
        </>
    );
}

export default App;
