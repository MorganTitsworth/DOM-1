import "./App.css";
import React, { useReducer, useContext } from "react";

function App() {
    return (
        <>
            <div className='container'>
                <div className='top'>
                    <div className='addTaskContainer'>
                        <AddTask />
                        <ThemeChanger />
                    </div>
                </div>
                <div className='bottom'>
                    <List />
                </div>
                <List></List>
            </div>
        </>
    );
}

export default App;
