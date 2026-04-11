const taskInput = document.getElementById('taskInput')
const taskList = document.getElementById('taskList')

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.text;

        const btn = document.createElement('button');
        btn.textContent = 'X';
        btn.onclick = () => removeTask(index);

        li.appendChild(btn);
        taskList.appendChild(li);
    });
}

function addTask() {
    const tkValue = taskInput.value;

    if (!tkValue) return;

    tasks.push({
        text: tkValue,
        done: false
    });

    saveTasks();
    renderTasks();
}

function removeTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

function toogleTask(index) {
    tasks[index].done = !tasks[index].done;

    saveTasks();
    renderTasks();
}

document.getElementById('addTask').addEventListener('click', addTask);

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

renderTasks();