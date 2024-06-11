$(document).ready(function () {
    const $form = $(".js--form");
    const $input = $(".js--form__input");
    const $wrapper = $(".js--todos-wrapper");

    function getTodos() {
        fetch("http://localhost:5000/api/todos")
            .then(response => response.json())
            .then(todos => {
                $wrapper.empty();
                todos.forEach(renderTodo);
            })
            .catch(error => console.error("Error:", error));
    }

    function renderTodo(todo) {
        const $itemTodo = $(`
            <li class="todo-item ${todo.completed ? 'todo-item--checked' : ''}" data-id="${todo._id}">
                <input type="checkbox" ${todo.completed ? "checked" : ""}/>
                <span class="todo-item__description">${todo.text}</span>
                <button class="todo-item__delete">Видалити</button>
            </li>`);

        $itemTodo.find(".todo-item__delete").on("click", function () {
            deleteTodo(todo._id);
        });

        $itemTodo.find("input[type='checkbox']").on("change", function () {
            updateTodo(todo._id, {completed: $(this).is(":checked")});
        });

        $wrapper.append($itemTodo);
    }

    function createTodo(text) {
        fetch("http://localhost:5000/api/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({text})
        })
            .then(response => response.json())
            .then(() => getTodos())
            .catch(error => console.error("Error:", error));
    }

    function deleteTodo(id) {
        fetch(`http://localhost:5000/api/todos/${id}`, {
            method: "DELETE"
        })
            .then(() => getTodos())
            .catch(error => console.error("Error:", error));
    }

    function updateTodo(id, data) {
        fetch(`http://localhost:5000/api/todos/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(() => getTodos())
            .catch(error => console.error("Error:", error));
    }

    $form.on("submit", function (event) {
        event.preventDefault();

        const text = $input.val().trim();
        if (text !== "") {
            createTodo(text);
            $input.val("");
        }
    });

    getTodos();
});

