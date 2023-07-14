const form = document.querySelector("#form")
const input = document.querySelector("#task-input")
const content = document.querySelector("#content")

let todos = [
    { id: 1, title: "Lorem ipsum dolar sit amit!", completed: false }
]

function renderTodos(array) {
    content.innerHTML = ''

    if (array.length === 0) {
        content.innerHTML = 
        '<h1 class="py-6 flex items-center justify-center bg-slate-100 text-3xl text-slate-600">Tasks not found!</h1>'
    }

    array.map(item => {
        content.innerHTML += `
            <li class="px-4 py-2 bg-slate-100 rounded-md border-2 flex items-center justify-between mb-4 ${item.completed && "opacity-40"}">
                <h2 ondblclick="completeTask(${item.id})" class="text-xl text-slate-700 cursor-pointer">${item.title}</h2>

                <div class="flex items-center gap-4">
                    <button onclick="deleteTodo(${item.id})" class="bg-red-500 text-white px-4 py-2 cursor-pointer border-none outline-none rounded-md shadow-md">Delete</button>
                </div>
            </li>
        `
    })
}

function addTodo(e) {
    e.preventDefault()
    const newTask = {
        id:Date.now(),
        title: input.value,
        completed: false,
    }
    todos.unshift(newTask)
    renderTodos(todos)
    input.value = ""
}

function deleteTodo(id) {
    todos = todos.filter(item => item.id !== id)
    renderTodos(todos)
    Swal.fire({
        title: "Task successful deleted!", 
        icon: "Success",
        text: "You will never see this task again!"
    })
}

function completeTask(id) {
    todos = todos.map(item => {
        if (item.id === id) {
            return {
                ...item,
                completed: !item.completed,
            }
        } else {
            return item
        }
    })

    renderTodos(todos)
}

form.addEventListener("submit", addTodo)
renderTodos(todos)
