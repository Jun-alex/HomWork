import {useEffect, useState} from "react";
import {useFormik} from "formik";
import * as Yup from "yup";

export function TodoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
        setTodos(savedTodos)
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos]);


    const formatedAddFormik = useFormik({
        initialValues: {
            todo: "",
        },
        validationSchema: Yup.object({
            todo: Yup.string()
                .min(5, "не меньше 5 символов, Минимум!!!")
                .required("Обязательное поле!!!")
        }),
        onSubmit: (values, {resetForm}) => {
            setTodos([...todos, {text: values.todo, completed: false}]);
            resetForm();
        },
    });


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

            <form className="form js--form" onSubmit={formatedAddFormik.handleSubmit}>
                <input
                    className="form__input js--form__input"
                    name="todo"
                    required
                    autoComplete="off"
                    type="text"
                    value={formatedAddFormik.values.todo}
                    onChange={formatedAddFormik.handleChange}
                    onBlur={formatedAddFormik.handleBlur}
                />

                <button type="submit" className="form__btn">Добавить</button>
            </form>

            {formatedAddFormik.touched.todo && formatedAddFormik.errors.todo
                ? (
                    <div className="form__error">{formatedAddFormik.errors.todo}</div>
                )
                : null
            }

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

