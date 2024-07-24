import { useState } from "react";

function App() {
    const [color, setColor] = useState("bg-indigo-800");
    const [textColor, setTextColor] = useState("text-white");

    const colorOptions = [
        { name: "Red", value: "bg-red-500 hover:bg-red-600" },
        { name: "Green", value: "bg-green-500 hover:bg-green-600" },
        { name: "Blue", value: "bg-blue-500 hover:bg-blue-600" },
        { name: "Cyan", value: "bg-cyan-500 hover:bg-cyan-600" },
        { name: "Purple", value: "bg-purple-500 hover:bg-purple-600" },
        { name: "Gray", value: "bg-gray-500 hover:bg-gray-600" },
        { name: "Yellow", value: "bg-yellow-500 hover:bg-yellow-600" },
        { name: "Pink", value: "bg-pink-500 hover:bg-pink-600" },
        { name: "Orange", value: "bg-orange-500 hover:bg-orange-600" },
        { name: "Teal", value: "bg-teal-500 hover:bg-teal-600" },
        { name: "White", value: "bg-white text-gray-800 hover:bg-gray-200" },
        { name: "Black", value: "bg-black text-white hover:bg-black-800" },
    ];

    const changeColor = (newColor) => {
        setColor(newColor);
        if (newColor.includes("bg-white")) {
            setTextColor("text-black");
        } else {
            setTextColor("text-white");
        }
    };

    return (
        <div className={`min-h-screen ${color}`}>
            <div className="flex flex-col items-center justify-center h-full">
                <h1 className={`text-4xl font-bold mb-6 ${textColor}`}>
                    Colorful App
                </h1>
                <div className="flex flex-wrap justify-center gap-4 w-full max-w-lg">
                    {colorOptions.map((option, index) => (
                        <button
                            key={index}
                            className={`py-3 px-4 rounded-lg focus:outline-none shadow-lg transition duration-300 ${option.value}`}
                            style={{ flex: "1 0 30%" }}
                            onClick={() => changeColor(option.value)}
                        >
                            {option.name}
                        </button>
                    ))}
                </div>
                <p className={`text-xl mt-8 font-bold ${textColor}`}>
                    Made with ❤️ by Dhruv Senjaliya
                </p>
            </div>
        </div>
    );
}

export default App;
