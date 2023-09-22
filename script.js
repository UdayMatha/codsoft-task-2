document.addEventListener("DOMContentLoaded", function () {
    loadTasks();
});

function loadTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    // Retrieve tasks from local storage
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(function (task, index) {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${task}</span>
            <button class="delete-button" onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const task = taskInput.value.trim();

    if (task !== "") {
        // Retrieve tasks from local storage
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

        // Add the new task
        tasks.push(task);

        // Save tasks to local storage
        localStorage.setItem("tasks", JSON.stringify(tasks));

        // Clear the input field
        taskInput.value = "";

        loadTasks();
    }
}

function deleteTask(index) {
    // Retrieve tasks from local storage
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Remove the task at the specified index
    tasks.splice(index, 1);

    // Save the updated tasks to local storage
    localStorage.setItem("tasks", JSON.stringify(tasks));

    loadTasks();
}
