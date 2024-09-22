import React from "react";

const TodoCard = ({ title, isDone, id, deleteTodo, toggleTodoDone }) => {
    return (
        <div
            className={`flex justify-between items-center p-4  w-full rounded-md mt-3 cursor-pointer
                ${isDone ? "bg-green-400" : "bg-[#d7deff]"}
                `}
            onClick={() => toggleTodoDone(id, isDone)}
        >
            <p
                className={`font-bold text-lg 
                ${isDone ? "line-through" : ""}
                `}
            >
                {title}
            </p>
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    deleteTodo(id);
                }}
                className="text-red-500 font-bold text-sm hover:bg-red-500 hover:text-white p-2 rounded-md transition ease-in-out duration-200 hover:drop-shadow-md"
            >
                Delete
            </button>
        </div>
    );
};

export default TodoCard;
