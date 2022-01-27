const createTodo = require('./addtodo.js');

const tasks = [
  {
    description: 'Hello',
    index: 1,
    completed: false,
  },
];

describe('Add task function', () => {
  test('A task was added', () => {
    document.body.innerHTML = '<div class="todos-list" id="todos-list"></div>';

    const div = document.querySelector('.todos-list');
    let li;

    createTodo(tasks);
    tasks.forEach((element) => {
      li = document.createElement('li');
      li.innerHTML = element.description;
      div.appendChild(li);
    });
    const anotherVar = document.querySelectorAll('.todos-list li');

    expect(anotherVar).toHaveLength(2);
  });

  test('Three tasks were added', () => {
    document.body.innerHTML = '<div class="todos-list" id="todos-list"></div>';

    const div = document.querySelector('.todos-list');
    let li;

    createTodo(tasks);
    createTodo(tasks);
    createTodo(tasks);
    tasks.forEach((element) => {
      li = document.createElement('li');
      li.innerHTML = element.description;
      div.appendChild(li);
    });
    const anotherVar = document.querySelectorAll('.todos-list li');

    expect(anotherVar).toHaveLength(5);
  });
});
