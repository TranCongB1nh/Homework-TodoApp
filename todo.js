var todos = []

function addTodo(){
    const todoInput = document.getElementById("newTodo")
    const text = todoInput.value


    const Todo = {
        id: Date.now(),
        text: text,
        isDone: false
    }
    todos.push(Todo) 
    todoInput.value = ""
    renderTodos()
}

function deleteTodo(id){
    renderTodos()
}

function filterTodos(){
    renderTodos()
}

function editTodoText(id){
    renderTodos()
}

function toggleTodo(id){
    renderTodos()
}

function renderTodos(){
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';

    let filteredTodos = todos;


    filteredTodos.forEach(todo =>{
        const todoItem = document.createElement('li');
        todoItem.className = 'todo-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.isDone;
        checkbox.onchange = ()=> toggleTodo(todo.id)

        const text = document.createElement('input');
        text.type = 'text';
        text.value = todo.text;
        text.readOnly = true;

        const editTodoBtn = document.createElement('button');
        editTodoBtn.textContent = 'Edit';
        editTodoBtn.onclick = () => editTodoText(todo.id);

        const deleteTodoBtn = document.createElement('button');
        deleteTodoBtn.textContent = 'Delete';
        deleteTodoBtn.onclick = () => deleteTodo(todo.id);

        todoList.appendChild(checkbox);
        todoList.appendChild(text);
        todoList.appendChild(editTodoBtn);
        todoList.appendChild(editTodoBtn);
        todoList.appendChild(todoItem);
    })
}