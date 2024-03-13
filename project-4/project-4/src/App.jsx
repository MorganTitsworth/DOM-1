import { useState } from "react";
import "./App.css";
import Button1 from "./components/button1/Button1";
import Button2 from "./components/button2/Button2";

function App() {
    const [show, setShow] = useState(true);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    return (
        <>
            {show === true ? (
                <Button1
                    count={count1}
                    handleClick={() => setCount1(count1 + 1)}
                    handleChange={() => setShow(!show)}
                />
            ) : (
                <Button2
                    count={count2}
                    handleClick={() => setCount2(count2 + 1)}
                    handleChange={() => setShow(!show)}
                />
            )}
        </>
    );
}

export default App;
