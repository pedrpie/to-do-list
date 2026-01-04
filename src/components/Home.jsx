import { useState } from "react"
import { FaRegTrashAlt } from "react-icons/fa";

export default function Home() {
    
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState("");

    function addTask() {
        if (inputValue.trim() === "") {
            alert("Fill the field")
        } else{
            setTasks([...tasks, inputValue])
            setInputValue("") 
        }
    }

    function removeTask(index) {
        setTasks(tasks.filter((_, i) => i !== index))
    }
    
    return(
        <div className="flex flex-col gap-4 text-white">
            <h1 className="text-6xl">To Do List</h1>
            <p className="text-2xl">Organize your tasks right now, right here.</p>

            <div className="flex justify-center gap-3" >
                <input
                    type="text" 
                    value={inputValue}
                    placeholder="enter task here"
                    onChange={(e) => setInputValue(e.target.value)} 
                    className="border border-black bg-gray-800 text-white rounded-sm w-120 p-2" 
                />
                <button
                    onClick={() => addTask()} 
                    className="border border-black bg-blue-600 text-white w-20 p-2 rounded-sm cursor-pointer hover:bg-blue-500 active:bg-blue-400">
                    Add
                </button>
            </div>

            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button
                            onClick={() => removeTask(index)}
                            className="bg-red-600 w-10 h-10 rounded-sm pl-1.75 cursor-pointer hover:bg-red-500 active:bg-red-400">
                            <FaRegTrashAlt />
                        </button>
                    </li>
                ))}
            </ul>
            
        </div>
    )
}