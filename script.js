document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todoInput');
    const addButton = document.getElementById('addButton');
    const todoList = document.getElementById('todoList');

    addButton.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });

    // Add a placeholder task on loading
    addPlaceholderTask();

    function addTodo() {
        const taskText = todoInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');

            const task = document.createElement('span');
            task.textContent = taskText;

            const doneButton = document.createElement('button');
            doneButton.textContent = 'Done';
            doneButton.classList.add('done-button');
            doneButton.addEventListener('click', () => {
                li.classList.toggle('completed');
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete-button');
            deleteButton.addEventListener('click', () => {
                todoList.removeChild(li);
            });

            li.appendChild(task);
            li.appendChild(doneButton);
            li.appendChild(deleteButton);
            todoList.appendChild(li);

            todoInput.value = '';
            todoInput.focus();
        }
    }

    function addPlaceholderTask() {
        const placeholderTask = 'This is a placeholder task';
        const li = document.createElement('li');

        const task = document.createElement('span');
        task.textContent = placeholderTask;

        const doneButton = document.createElement('button');
        doneButton.textContent = 'Done';
        doneButton.classList.add('done-button');
        doneButton.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(li);
        });

        li.appendChild(task);
        li.appendChild(doneButton);
        li.appendChild(deleteButton);
        todoList.appendChild(li);
    }
});
