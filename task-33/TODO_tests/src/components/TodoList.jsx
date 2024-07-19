import { useDispatch, useSelector } from "react-redux";
import { TodoItem } from "./TodoItem.jsx";
import { useEffect } from "react";

export function TodoList() {
    const todos = useSelector(state => state.todos.items);
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.todos.isLoading);

    useEffect(() => {
        dispatch({ type: "todos/fetchTodos" });
    }, [dispatch]);

    return (
        <div className="todo-list">
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                todos.map((todo, index) => (
                    <TodoItem key={index} index={index} {...todo} />
                ))
            )}
        </div>
    );
}

