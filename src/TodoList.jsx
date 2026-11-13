import { useState } from 'react';
import { SquareX, SquareArrowDown, SquareArrowUp, StickyNotePlus } from 'lucide-react';

function ToDoList(){

    const [task, setTask] = useState(["Drink a full glass of water.",
                                      "Go for a 20-minute walk.",
                                      "Restock household essentials",
                                      "Clean up your digital workspace."]);
    const [newTask, setNewTask] = useState([""]);

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
        setTask(t => [...t, newTask]);
        setNewTask("");
        }
    }

    function deleteTask(index){
        const updatedTasks = task.filter((_, i) => i !== index);
        setTask(updatedTasks);
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...task];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTask(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if(index < task.length - 1){
            const updatedTasks = [...task];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTask(updatedTasks);
        }
    }


        return (
        <div className="min-h-screen p-4 flex items-start justify-center">
            
            <div className="w-full max-w-md bg-[#333333] text-[#f5f5dc] p-6 rounded-md font-sans">

                <h1 className="text-2xl my-4 font-bold">To-Do-List</h1>

                <div className="flex gap-2 my-8">
                    <input 
                        type="text"
                        placeholder="Enter your task . . ."
                        value={newTask}
                        onChange={handleInputChange}
                        maxLength={30}
                        className="w-full bg-transparent border-b-2 border-transparent focus:outline-none focus:border-[#f5f5dc]"
                    />
                    <button
                        onClick={addTask}
                        className="bg-[#ff7f50] hover:bg-[#ff7f50]/50 px-4 py-2 rounded-md cursor-pointer shrink-0">
                        <StickyNotePlus className="w-5 h-5" />   
                    </button>
                </div>
                
                {/* Display Tasks */}
                <ol>
                    {task.map((item, index) => (
                        <li 
                            key={index} 
                            className="mb-4 bg-[#555555] p-4 rounded-tl-md rounded-br-md border-b-2 border-black flex items-center justify-between gap-3"
                        >
                            <span className="flex-1 min-w-0 break-all break-words">{item}</span>
                            
                            <div className="flex items-center gap-2 shrink-0">
                                <button 
                                    onClick={() => deleteTask(index)}
                                    className="inline-flex items-center cursor-pointer bg-[#cd5c5c] hover:bg-[#cd5c5c]/50 p-1.5 rounded-md"
                                >
                                    <SquareX className="w-5 h-5" />
                                </button>
                                
                                <button
                                    onClick={() => moveTaskUp(index)}
                                    className="inline-flex items-center cursor-pointer bg-[#5072a7] hover:bg-[#5072a7]/50 p-1.5 rounded-md"
                                >
                                    <SquareArrowUp className="w-5 h-5" />
                                </button>

                                <button
                                    onClick={() => moveTaskDown(index)}
                                    className="inline-flex items-center cursor-pointer bg-[#2e8b57] hover:bg-[#2e8b57]/50 p-1.5 rounded-md"
                                >
                                    <SquareArrowDown className="w-5 h-5" />
                                </button>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>   

        </div>
    );


}

export default ToDoList