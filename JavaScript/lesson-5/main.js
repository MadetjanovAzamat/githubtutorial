// const person = {
//     name: '',
//     age: null,
//     isMarried: null,
// }
// person.name = prompt('Enter your name!')
// person.age = prompt('Enter your age!')
// person.isMarried = prompt('Are you married!')
// console.log(person)

// const person = {
//     name: 'Jasur',
//     age: 19,
//     isMarried: true,
//     hobbies: {
//         studing: "YouTube tutorials",
//         sport: "Running, Swimming",
//     },
// }

// // shallow clone 
// const newPerson = person
// const newPerson2 = person
// newPerson.name = 'John Doe'
// newPerson2.name = 'Bazarbay'
// console.log(person);
// console.log(newPerson);

// //deep clone
// const newPerson = JSON.parse(JSON.stringify(person))
// newPerson.name = "John"
// newPerson.hobbies.sport = "Yugirish"
// console.log(person);
// console.log(newPerson);
// ??// const newJSON = JSON.stringify(person)
// ??// console.log(JSON.parse(newJSON));


//string methods
const fname = "Azamat Madetjanov"
// console.log(fname.toUpperCase())
// console.log(fname.length)
// console.log(fname.split('a'))

// const newStrArr = fname.split(' ')
// console.log(newStrArr)
// console.log(newStrArr.join(', '))

// console.log(fname.charAt())
// console.log(fname.replace('a', 'j'))
// console.log(fname.replaceAll('a', 'j'))
// console.log(fname.indexOf('m'))
// console.log(fname.includes('a'))
// console.log(fname.lastIndexOf('m'))
// console.log(fname.slice(0, 7));
// console.log(fname.concat(' John'))
// console.log(fname.toLowerCase())

// const number = 1198768
// console.log(number.toLocaleString());

// setTimeout(() => {
//     alert('hello world!')
// }, 1000)

const timeContent = document.querySelector('#time')

setInterval(() => {
    const date = new Date()

    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    timeContent.innerHTML = `${hours}:${minutes}:${(seconds<10) ? '0' + seconds : seconds}`
}, 1000)