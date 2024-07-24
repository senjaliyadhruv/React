import { useState, useCallback, useEffect, useRef } from "react";
import { FiCopy } from "react-icons/fi";

function App() {
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");
    const [copied, setCopied] = useState(false);

    const passwordRef = useRef(null);

    const passwordGenerator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (numberAllowed) str += "01234567890123456789";
        if (charAllowed) str += "!@#$%^&*(){}[]`~_+-=";

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length);
            pass += str.charAt(char);
        }
        setPassword(pass);
        setCopied(false);
    }, [length, numberAllowed, charAllowed]);

    const copyPasswordToClipboard = useCallback(() => {
        if (passwordRef.current) {
            // passwordRef.current?.setSelectionRange(0,5);
            passwordRef.current.select();
            document.execCommand("copy");
            setCopied(true);
        }
    }, [password]);

    useEffect(() => {
        passwordGenerator();
    }, [length, numberAllowed, charAllowed, passwordGenerator]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-800">
            <div className="w-full max-w-md mx-auto shadow-lg rounded-lg p-6 bg-gray-900 text-white">
                <h1 className="text-2xl font-bold text-center mb-6">
                    Password Generator
                </h1>
                <div className="flex items-center shadow rounded-lg overflow-hidden mb-6">
                    <input
                        type="text"
                        value={password}
                        className="outline-none w-full py-2 px-4 bg-gray-700 text-gray-300"
                        placeholder="Password"
                        readOnly
                        ref={passwordRef}
                    />
                    <button
                        onClick={copyPasswordToClipboard}
                        className="outline-none bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 transition-colors flex items-center"
                    >
                        <FiCopy className="mr-2"/>Copy
                    </button>
                </div>
                {copied && (
                    <p className="text-green-500 text-center mb-6">
                        Password copied to clipboard!
                    </p>
                )}
                <div className="flex flex-col space-y-4">
                    <div className="flex items-center justify-between">
                        <label htmlFor="length" className="text-sm">
                            Length: {length}
                        </label>
                        <input
                            type="range"
                            min={6}
                            max={100}
                            value={length}
                            className="cursor-pointer"
                            onChange={(e) => setLength(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="numberInput" className="text-sm">
                            Include Numbers
                        </label>
                        <input
                            type="checkbox"
                            id="numberInput"
                            checked={numberAllowed}
                            onChange={() => setNumberAllowed((prev) => !prev)}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="characterInput" className="text-sm">
                            Include Characters
                        </label>
                        <input
                            type="checkbox"
                            id="characterInput"
                            checked={charAllowed}
                            onChange={() => setCharAllowed((prev) => !prev)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
