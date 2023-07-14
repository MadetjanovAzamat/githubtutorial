const carBtns = document.querySelectorAll('li')
const menuImg = document.querySelector('#menu-img')

carBtns.forEach(item => {
    item.addEventListener('click', () => {
        menuImg.setAttribute('src', item.dataset.img)
        carBtns.forEach(x => x.classList.remove('border-teal-500'))
        item.classList.add('border-teal-500')
    })
})