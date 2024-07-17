class Todo {
    constructor(id, text, isDone = false) {
        this.id = id;
        this.text = text;
        this.isDone = isDone;
    }
}

class TodoList {
    constructor() {
        this.todos = [];
    }

    addTodo() {
        const todoInput = document.getElementById("newTodo")
        const text = todoInput.value
        if (text === "") {
            return
        }
    
        const Todo = {
            id: Date.now(),
            text: text,
            isDone: false
        }
        todos.push(Todo)
        todoInput.value = ""
        renderTodos()
    }

    clearTodoInput() {
        const todoInput = document.getElementById("newTodo")
        todoInput.value = ""
    }

    deleteTodo(id){
        todos = todos.filter(Todo => Todo.id !== id)
        renderTodos()
    }

    filterTodos(){
        const filterTodo = document.getElementById("filter")
        const filterStatus = filterTodo.value
        renderTodos(filterStatus)
    }

    editTodoText(id){
        const todo = todos.find(todo => todo.id === id)
        if (todo){
            const newText = prompt('Edit todo:',todo.text)
            if (newText !== null){
                todo.text = newText
            }
        }
        renderTodos()
    }

    toggleTodo(id, currentFilter) {
        for (let index in todos) {
            if (id === todos[index].id) {
                todos[index].isDone = !todos[index].isDone
            }
        }
        renderTodos(currentFilter)
    }

    renderTodos(filter = 'all') {
        const todoList = document.getElementById('todoList');
        todoList.innerHTML = '';
    
        let filteredTodos = todos;
        if (filter === 'done') {
            filteredTodos = todos.filter(todo => todo.isDone)
        } else if (filter === 'undone') {
            filteredTodos = todos.filter(todo => !todo.isDone)
        }
    
        filteredTodos.forEach(todo => {
            const todoItem = document.createElement('li');
            todoItem.className = 'todo-item';
    
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = todo.isDone;
            checkbox.onchange = () => toggleTodo(todo.id, filter);
    
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
    
            todoItem.appendChild(checkbox);
            todoItem.appendChild(text);
            todoItem.appendChild(editTodoBtn);
            todoItem.appendChild(deleteTodoBtn);
            todoList.appendChild(todoItem);
        })
    }
}

const todoList = new TodoList();

// Event listeners for the buttons
document.getElementById("addTodoBtn").addEventListener("click", () => todoList.addTodo());
document.getElementById("filter").addEventListener("change", () => todoList.filterTodos());