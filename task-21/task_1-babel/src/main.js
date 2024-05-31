$(document).ready(function () {
    const $form = $(".js--form");
    const $input = $(".js--form__input");
    const $wrapper = $(".js--todos-wrapper");

    let todos = JSON.parse(localStorage.getItem("todos")) || [];

    function renderTodos() {
        $wrapper.empty();
        todos.forEach(renderTodo);
    }

    function renderTodo(todo, index) {
        const $itemTodo = createTodoElement(todo, index);
        $wrapper.append($itemTodo);
    }

    function createTodoElement(todo, index) {
        const $itemTodo = $(`
            <li class="todo-item ${todo.completed ? 'todo-item--checked' : ''}">
                <input type="checkbox" ${todo.completed ? "checked" : ""} data-index="${index}"/>
                <span class="todo-item__description" data-toggle="modal" data-target="#todoModal" data-index="${index}">${todo.text}</span>
                <button class="todo-item__delete">Видалити</button>
            </li>
        `);

        $itemTodo.find(".todo-item__delete").on("click", function () {
            deleteTodo(index);
        });

        $itemTodo.find(".todo-item__description").on("click", function () {
            showTodoModal(index);
        });

        return $itemTodo;
    }

    function saveTodos() {
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    function deleteTodo(index) {
        todos.splice(index, 1);
        saveTodos();
        renderTodos();
    }

    function showTodoModal(index) {
        const todo = todos[index];
        $("#todoText").text(todo.text);
    }

    $form.on("submit", function (event) {
        event.preventDefault();
        const text = $input.val().trim();
        if (text !== "") {
            todos.push({text: text, completed: false});
            saveTodos();
            renderTodos();
            $input.val("");
        }
    });

    $wrapper.on("change", "input[type='checkbox']", function (event) {
        const $checkbox = $(event.target);
        const index = parseInt($checkbox.attr("data-index"));
        todos[index].completed = $checkbox.is(":checked");
        saveTodos();
        renderTodos();
    });

    renderTodos();
});
