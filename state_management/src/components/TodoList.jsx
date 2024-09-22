import React, { useState } from "react";
import TodoCard from "./TodoCard";

const TodoList = ({ toDos, deleteTodo, toggleTodoDone }) => {
    return (
        <div className="flex flex-col justify-start items-center h-full w-3/12 mt-8 overflow-y-auto scrollbar-hide pb-8">
            {toDos.length === 0 && <p className="text-white text-lg">No Todos</p>}
            {toDos.map((toDo, key) => {
                return <TodoCard key={key}  title={toDo.title} isDone={toDo.isDone} id={toDo.id} deleteTodo={deleteTodo} toggleTodoDone={toggleTodoDone}></TodoCard>;
            })}
        </div>
    );
};

export default TodoList;
