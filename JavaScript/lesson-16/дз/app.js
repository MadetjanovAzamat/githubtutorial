let todos =[]
function getAllUsers() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
            todos = data
            renderTasks(todos)
        })
}

function renderTasks(array) {
    document.querySelector('ul').innerHTML = ''
    array.map(item => {
        document.querySelector('ul').innerHTML += `
            <li class="px-6 py-3 rounded-md text-xl border-4 border-sky-200 m-3 flex items-center justify-between gap-5">
            ${item.title} 
            <button onclick="deleteTasks(${item.id})" class="px-4 py-2 rounded-md bg-red-500 text-2xl text-white border-2 border-sky-500 cursor-pointer active:scale-90">Delete</button>
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