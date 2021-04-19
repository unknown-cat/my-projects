const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUl = document.getElementById('todos');

const todos = JSON.parse(localStorage.getItem('todos'));

if (todos) {
  todos.forEach(todo => addTodos(todo))
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  addTodos()
});

function addTodos(todo) {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todoEl = document.createElement('li');

    todoEl.innerText = todoText;

    if (todo && todo.completed) {
      todoEl.classList.add('completed')
    }

    todoEl.addEventListener('click', () => {
      todoEl.classList.toggle('completed');

      updateLS();
    });

    todoEl.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      todoEl.remove();

      updateLS();
    });

    todosUl.appendChild(todoEl);

    input.value = '';

    updateLS();
  }
}

function updateLS() {
  const todosEl = document.querySelectorAll('li');

  const todos = [];

  todosEl.forEach(todoEl => {
    todos.push({
      text: todoEl.innerText,
      complete: todoEl.classList.contains('completed')
    })
  });

  localStorage.setItem('todos', JSON.stringify(todos))
}
