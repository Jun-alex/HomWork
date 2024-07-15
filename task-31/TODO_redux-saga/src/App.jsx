import { TodoInput } from "./components/TodoInput.jsx";
import { TodoList } from "./components/TodoList.jsx";
import { Total } from "./components/Total.jsx";

export function App() {

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

