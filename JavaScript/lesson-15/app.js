// API

let todos = []
function getAllUsers() {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(data => {
            todos = data 
            renderTasks(data)
        })
}

function renderTasks(array) {
    document.querySelector('ul').innerHTML = ''
    array.map(item => {
        document.querySelector('ul').innerHTML += `
            <li class="px-8 py-4 rounded-md text-2xl border-2 m-6 flex items-center justify-between gap-6">${item.title}<button onclick = "deleteTasks(${item.id})" class="px-4 py-2 rounded-md bg-red-500 text-white">Delete</button>
            </li>
        `
    })
}

function deleteTasks(id) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'DELETE',
    }).then(res => {
        todos = todos.filter(item => item.id !== id)
        renderTasks(todos)
    })
}

getAllUsers()

