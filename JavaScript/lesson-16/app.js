// const fname = 'Ikhlas'

// const sayHello = new Promise((resolve, reject) => {
//     if (fname === 'Ikhlas') {
//         resolve('Function complated successful!')
//     } else {
//         reject('Your name is not defined!')
//     }
// })

// sayHello
// .then(data => {
//     console.log(data)
// })
// .catch(error => {
//     console.log(error);
// })
// .finally(() => {
//     console.log('Function completed');
// })



// const myfetch = url => 
//     new Promise((resolve, reject) => {
//         if(url) {
//             return resolve({
//                 status: "success",
//                 code: 200,
//                 payload: [],
//             })
//         } else {
//             return reject({
//                 status: "error",
//                 code: 200,
//                 payload: [],
//             })
//         }
//     })

//     myfetch("https://picsum.photos/200")
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.log(err);
//     })


//Method GET
function fetchAllUsers() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => console.log(data))
}
fetchAllUsers()

//Method POST
function createNewTodo() {
    const newTodoData = {
        title: 'Lorem ipsum dolar sit amit!',
        userId: 1,
    }

    fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST', 
        body: JSON.stringify(newTodoData),
    })
    .then(res => res.json())
    .then(data => console.log(data))
}
createNewTodo()

//Method PUT
function updateTodo() {
    fetch('https://jsonplaceholder.typicode.com/todos/2', {
        method: 'PUT',
        body: JSON.stringify({
            title:"New todo"
        }),
    })
    .then(res => res.json())
    .then(data => console.log(data))
}
updateTodo()

//Method DELETE
function deleteTodo() {
    fetch('https://jsonplaceholder.typicode.com/todos/12', {
        method: "DELETE",
    })
    .then(res => res.json())
    .then(data => console.log(data))
}
deleteTodo()