"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".js--form");
    const input = document.querySelector(".js--form__input");
    const wrapper = document.querySelector(".js--todos-wrapper");

    let todos = JSON.parse(localStorage.getItem("todos")) || [];

    function renderTodos() {
        wrapper.innerHTML = "";
        todos.forEach(renderTodo);
    }

    function renderTodo(todo, index) {
        const itemTodo = createTodoElement(todo, index);
        wrapper.appendChild(itemTodo);
    }

    function createTodoElement(todo, index) {
        const itemTodo = document.createElement("li");
        itemTodo.classList.add("todo-item");

        if (todo.completed) {
            itemTodo.classList.add("todo-item--checked");
        }

        itemTodo.innerHTML = `
            <input type="checkbox" ${todo.completed ? "checked" : ""} data-index="${index}"/>
            <span class="todo-item__description">${todo.text}</span>
            <button class="todo-item__delete">Видалити</button>
        `;

        const deleteButton = itemTodo.querySelector(".todo-item__delete");
        deleteButton.addEventListener("click", () => deleteTodo(index));

        return itemTodo;
    }

    function saveTodos() {
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    function deleteTodo(index) {
        todos.splice(index, 1);

        saveTodos();
        renderTodos();
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const text = input.value.trim();
        if (text !== "") {
            todos.push({text: text, completed: false});

            saveTodos();
            renderTodos();
            input.value = "";
        }
    });

    wrapper.addEventListener("change", (event) => {
        if (event.target.type === "checkbox") {
            const index = parseInt(event.target.getAttribute("data-index"));
            todos[index].completed = event.target.checked;

            saveTodos();
            renderTodos();
        }
    });

    renderTodos();
});
