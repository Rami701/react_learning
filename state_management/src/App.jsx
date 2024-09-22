import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
    const [toDos, setToDos] = useState([]);

    const addTodo = (title) => {
        setToDos((currentToDos) => {
            return [
                ...currentToDos,
                {
                    id: crypto.randomUUID(),
                    title: title,
                    isDone: false,
                },
            ];
        });
    };

    const deleteTodo = (id) => {
        setToDos((currentToDos) => {
            return currentToDos.filter((todo) => {
                return todo.id !== id;
            });
        });
    };

    const toggleTodoDone = (id, isDone) => {
        setToDos((currentToDos) => {
            return currentToDos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        isDone: !isDone,
                    };
                }
                return todo;
            });
        });
    };

    useEffect(() => {
        const savedToDos = JSON.parse(localStorage.getItem("toDos"));
        if (savedToDos) {
            setToDos(savedToDos);
        }
    }, []);

    useEffect(() => {
        if (toDos.length > 0) {
            localStorage.setItem("toDos", JSON.stringify(toDos));
        } else {
            localStorage.removeItem("toDos");
        }
    }, [toDos]);

    return (
        <div className="pageContainer flex flex-col justify-start items-center w-screen h-screen bg-[#222222]">
            <h1 className="text-white font-bold text-3xl mt-8">Todo app</h1>
            <TodoForm addTodo={addTodo}></TodoForm>
            <TodoList
                toDos={toDos}
                deleteTodo={deleteTodo}
                toggleTodoDone={toggleTodoDone}
            ></TodoList>
        </div>
    );
}

export default App;
