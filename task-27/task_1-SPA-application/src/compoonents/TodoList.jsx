import {useEffect, useState} from "react";

export function TodoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
        setTodos(savedTodos)
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos]);

    const addTodo = (event) => {
        event.preventDefault();
        if (inputValue.trim()) {
            setTodos([...todos, {text: inputValue, completed: false}]);
            setInputValue("");
        }
    };

    const removeTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    const toggleComplete = (index) => {
        const newTodos = todos.map((todo, i) =>
            i === index ? {...todo, completed: !todo.completed} : todo
        );

        setTodos(newTodos);
    };


    return (
        <div className="container">
            <h1>ToDo Список</h1>

            <form className = "form js--form" onClick={addTodo}>
                <input
                    className = "form__input js--form__input"
                    name="value"
                    required
                    autoComplete = "off"
                    type = "text"
                    value = {inputValue}
                    onChange = {(event) => setInputValue(event.target.value)}
                />

                <button className="form__btn">Добавить</button>
            </form>

            <ul className="js--todos-wrapper">
                {
                    todos.map((todo, index) => (
                        <li
                            key={index}
                            className={`todo-item ${todo.completed ? "todo-item--checked" : ""}`}>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => toggleComplete(index)}
                            />
                            <span className="todo-item__description">{todo.text}</span>
                            <button className="todo-item__delete"
                                    onClick={() => removeTodo(index)}>Удалить
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );

}

