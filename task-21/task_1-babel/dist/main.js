"use strict";

$(document).ready(function () {
  var $form = $(".js--form");
  var $input = $(".js--form__input");
  var $wrapper = $(".js--todos-wrapper");
  var todos = JSON.parse(localStorage.getItem("todos")) || [];
  function renderTodos() {
    $wrapper.empty();
    todos.forEach(renderTodo);
  }
  function renderTodo(todo, index) {
    var $itemTodo = createTodoElement(todo, index);
    $wrapper.append($itemTodo);
  }
  function createTodoElement(todo, index) {
    var $itemTodo = $("\n            <li class=\"todo-item ".concat(todo.completed ? 'todo-item--checked' : '', "\">\n                <input type=\"checkbox\" ").concat(todo.completed ? "checked" : "", " data-index=\"").concat(index, "\"/>\n                <span class=\"todo-item__description\" data-toggle=\"modal\" data-target=\"#todoModal\" data-index=\"").concat(index, "\">").concat(todo.text, "</span>\n                <button class=\"todo-item__delete\">\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438</button>\n            </li>\n        "));
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
    var todo = todos[index];
    $("#todoText").text(todo.text);
  }
  $form.on("submit", function (event) {
    event.preventDefault();
    var text = $input.val().trim();
    if (text !== "") {
      todos.push({
        text: text,
        completed: false
      });
      saveTodos();
      renderTodos();
      $input.val("");
    }
  });
  $wrapper.on("change", "input[type='checkbox']", function (event) {
    var $checkbox = $(event.target);
    var index = parseInt($checkbox.attr("data-index"));
    todos[index].completed = $checkbox.is(":checked");
    saveTodos();
    renderTodos();
  });
  renderTodos();
});