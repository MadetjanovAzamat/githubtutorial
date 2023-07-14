const carBtns = document.querySelectorAll('li')
const mainImg = document.querySelector('#main-img')

carBtns.forEach(item => {
    item.addEventListener('click', () => {
        mainImg.setAttribute('src', item.dataset.img)
        carBtns.forEach(x => x.classList.remove('border-teal-500'))
        item.classList.add('border-teal-500')
    })
})