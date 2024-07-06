import {useSelector} from "react-redux";
import {TodoItem} from "./TodoItem.jsx";

export function TodoList() {
    const todos = useSelector(state => state.todos.items);

    return (
        <div className="todo-list">
            {
                todos.map((todo, index) => (
                    <TodoItem key={index} text={todo.text} />
                ))
            }
        </div>
    );
}

