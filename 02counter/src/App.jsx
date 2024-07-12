import "./App.css";
import { useState } from "react";

function App() {
    let [counter, setCounter] = useState(0);
    // let counter = 0;
    const addValue = () => {
        if (counter < 50) {
            setCounter(counter=>counter + 1);
            setCounter(counter=>counter + 1);
            setCounter(counter=>counter + 1);
            setCounter(counter=>counter + 1);
            // setCounter(counter + 1);
        }
    };
    const removeValue = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    };
    return (
        <>
            <h2>Counter value: {counter}</h2>

            <button onClick={addValue}>Add value</button>
            <br />
            <button onClick={removeValue}>remove value</button>
        </>
    );
}

export default App;
