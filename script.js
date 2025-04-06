let taskList = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
  const list = document.getElementById('taskList');
  list.innerHTML = '';
  taskList.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${task}</span>
      <button onclick="deleteTask(${index})">Delete</button>
    `;
    list.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById('taskInput');
  if (input.value.trim()) {
    taskList.push(input.value.trim());
    localStorage.setItem('tasks', JSON.stringify(taskList));
    input.value = '';
    renderTasks();
  }
}

function deleteTask(index) {
  taskList.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(taskList));
  renderTasks();
}

window.onload = renderTasks;
