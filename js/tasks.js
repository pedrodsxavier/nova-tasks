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

        const span = document.createElement('span');
        span.textContent = task.text;

        if (task.done) {
            span.style.textDecoration = 'line-through';
        }

        span.onclick = () => toogleTask(index);

        const btn = document.createElement('button');
        btn.textContent = 'X';
        btn.onclick = () => removeTask(index);

        li.appendChild(span);
        li.appendChild(btn);
        taskList.appendChild(li);
    });
}

function addTask() {
    const tkValue = taskInput.value.trim();

    if (!tkValue) return;

    tasks.push({
        text: tkValue,
        done: false
    });

    taskInput.value = '';

    saveTasks();
    renderTasks();
}

function removeTask(index) {
    tasks.splice(index, 1);
    
    saveTasks();
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