import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    return (
        <div className="w-full flex justify-center items-center mt-8">
            <input
                type="text"
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
                className="mr-8 py-2 px-4 outline-none rounded-md border-2 border-[#0099ff] border-solid bg-[#dee5e6]"
            />
            <button
                className="py-2 px-8 bg-[#0099ff] text-white rounded-md font-bold"
                onClick={() => {
                    if (title != "") {
                        addTodo(title);
                        setTitle("");
                    } else {
                        window.alert("Title can't be empty!");
                    }
                }}
            >
                Add
            </button>
        </div>
    );
};

export default TodoForm;
