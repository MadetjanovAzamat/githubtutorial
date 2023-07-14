// // DOM
// const h1Elements = document.getElementById('text')
// const h1WithClass = document.getElementsByClassName('box')
// const allH1 = document.getElementsByTagName('h1')

// const h1 = document.querySelector('#text')
// h1Elements.innerHTML = `<b class="text">Hello js</b>`


// const h1Element = document.querySelector('.container .box h1')
// h1Element.classList.add('active')
// h1Element.classList.remove('post-title')
// h1Element.classList.toggle('active')
// console.log(h1Element.classList);

// const container = document.querySelector(".container")

// const post = [
//     {
//         id:1,
//         title: 'Lorem ipsum dolar sit amit',
//         image: 'https://picsum.photos/200',
//     },
//     {
//         id:2,
//         title: 'Lorem ipsum dolar sit amit',
//         image: 'https://picsum.photos/201',
//     },
// ]

// post.map(item => {
//     container.innerHTML +=`
//     <div>
//         <img src="${item.image}" />
//         <h1>${item.title}</h1>
//     </div>
// `
// })

//events
const btn = document.querySelector('#btn')

function logHello() {
    btn.classList.toggle('btn-primary')
}

btn.addEventListener('click', logHello)