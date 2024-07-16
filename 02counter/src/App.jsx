import "./App.css";
import { useState } from "react";

function App() {
    const [counter, setCounter] = useState(0);

    const addValue = () => {
        if (counter < 50) {
            setCounter((counter) => counter + 1);
             // setCounter(counter=>counter + 1);
            // setCounter(counter=>counter + 1);
            // setCounter(counter=>counter + 1);
            // setCounter(counter + 1);
        }
    };

    const add5Value = () => {
        if (counter < 50) {
            setCounter((counter) => counter + 5);
        }
    };

    const removeValue = () => {
        if (counter > 0) {
            setCounter((counter) => counter - 1);
        }
    };

    const remove5Value = () => {
        if (counter > 0) {
            setCounter((counter) => counter - 5);
        }
    };

    return (
        <div className="app">
            <h1 className="title">React Counter</h1>
            <div className="counter-container">
                <h2 className="counter-value">Counter value: {counter}</h2>
                <div className="buttons">
                    <button className="button add" onClick={addValue}>Add value</button>
                    <button className="button add" onClick={add5Value}>Add +5</button>
                    <button className="button remove" onClick={removeValue}>Remove value</button>
                    <button className="button remove" onClick={remove5Value}>Remove -5</button>
                </div>
            </div>
        </div>
    );
}

export default App;
