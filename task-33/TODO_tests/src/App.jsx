import {TodoInput} from "./components/TodoInput.jsx";
import {TodoList} from "./components/TodoList.jsx";
import {Total} from "./components/Total.jsx";
import {Provider} from "react-redux";
import store from "./store/store";

export function App() {

    return (
        <Provider store={store}>
            <div className="app">
                <h1>TODO</h1>
                <TodoInput/>
                <h2>TODOS</h2>
                <TodoList/>
                <Total/>
            </div>
        </Provider>
    );
}

