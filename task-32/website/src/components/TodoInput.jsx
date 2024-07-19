import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo } from "../redux/slices/todosSlice.js";
export function TodoInput() {
    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch();

    const addTodoItem = () => {
        if (inputValue.trim()) {
            dispatch(addTodo(inputValue));
            setInputValue("");
        }
    };

    return (
        <div className="container">
            <input
                type="text"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
            />
            <button onClick={addTodoItem}>Добавить</button>
        </div>
    );
}
