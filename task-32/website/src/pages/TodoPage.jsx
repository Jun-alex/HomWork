import { TodoInput } from "../components/TodoInput";
import { TodoList } from "../components/TodoList";
import { Total } from "../components/Total";

export function TodoPage() {
    return (
        <div className="app">
            <h1>TODO</h1>
            <TodoInput />
            <h2>TODOS</h2>
            <TodoList />
            <Total />
        </div>
    );
}

