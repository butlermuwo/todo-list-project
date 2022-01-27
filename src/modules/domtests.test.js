const Tasks = require('./domtests.js');

document.body.innerHTML = `<main>
<div class="head">
  <h2>Today's To Do</h2>
  <span class="material-icons">autorenew</span>
</div>
<div class="table">
  <form class="add">
    <input
      class="input"
      id="input"
      type="text"
      placeholder="Add to your list"
      required
    />
    <button type="submit" id="add">
      <span class="material-icons">keyboard_return</span>
    </button>
  </form>
  <ul class="list"></ul>
</div>
<div class="clear">Clear all completed</div>
</main>`;
describe('testing edit', () => {
  const tasks = new Tasks();
  tasks.add({ description: 'task 1' });
  const currentTask = tasks.list[0];
  currentTask.description = 'new description';
  test('task 1 description should be new description', () => {
    tasks.edit(currentTask);
    expect(tasks.list[0].description).toBe('new description');
  });
});
describe('testing edit', () => {
  const tasks = new Tasks();
  tasks.add({ description: 'task 2' });
  const currentTask = tasks.list[1];
  currentTask.description = 'new task 2 description';
  test('task 2 description should be new task 2 description', () => {
    tasks.edit(currentTask);
    expect(tasks.list[1].description).toBe('new task 2 description');
  });
});
describe('testing update complete', () => {
  const tasks = new Tasks();
  const currentTask = tasks.list[0];
  currentTask.completed = true;
  test('task 1 should be completed', () => {
    tasks.edit(currentTask);
    expect(tasks.list[0].completed).toBeTruthy();
  });
});
describe('testing clearing completed', () => {
  const tasks = new Tasks();
  const currentTask = tasks.list[0];
  currentTask.completed = true;
  tasks.edit(currentTask);
  test('The list should be empty after clearing', () => {
    tasks.clearCompleted();
    expect(tasks.list.length).toBe(1);
  });
});
describe('testing dom manipulation functions', () => {
  localStorage.clear();
  const tasks = new Tasks();
  test('Deleting an item should delete in the dom', () => {
    expect(tasks.list.length).toBe(0);
  });
});