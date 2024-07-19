import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo, removeTodo, toggleTodo } from "../redux/slices/todosSlice";

export function TodoItem({text, completed, index}) {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(text);

    const handleItem = () => {
        if (isEditing && newText.trim()) {
            dispatch(editTodo({index, text: newText}));
        }
        setIsEditing(!isEditing);
    }

    return (
        <div className={`todo-item ${completed ? "completed" : ""}`}>
            {isEditing ? (
                <input
                    type="text"
                    value={newText}
                    onChange={(event) => setNewText(event.target.value)}
                />
            ) : (
                <div>
                    <input
                        type="checkbox"
                        checked={completed}
                        onChange={() => dispatch(toggleTodo(index))}
                    />
                    <span onClick={() => dispatch(toggleTodo(index))}>{text}</span>
                </div>
            )}
            <button onClick={() => dispatch(removeTodo(index))}>Удалить</button>
            <button onClick={handleItem}>{isEditing ? "Сохранить" : "Редактировать"}</button>
        </div>
    );
}

