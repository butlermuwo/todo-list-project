const removeTask = require('./deletetodo')

const tasks = [
    {
      description: 'Hello',
      completed: false,
      index: 0,
    },
    {
        description: 'Hello',
        completed: false,
        index: 1,
      },
      {
        description: 'Hello',
        completed: false,
        index: 2,
      },
      {
        description: 'Hello',
        completed: false,
        index: 3,
      },
  ];

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
  
describe('testing remove function', () => {
    test('Should delete item from localstorage', () => {
    const currentLength = tasks.length;
    expect(removeTask(tasks, 0).length).toBe(currentLength - 1);
  });

  test('Should delete two items from localstorage', () => {
    const currentLength = tasks.length + 3;
    expect(removeTask(tasks, 4).length).toBe(currentLength - 3);
  });
})