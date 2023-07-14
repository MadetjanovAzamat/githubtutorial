const allItems = document.querySelectorAll('.title')
const allContents = document.querySelectorAll('.content')

allItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        allContents.forEach((content, i) => {
            if (index !== i) {
                content.classList.remove('active')
            }
        })
        allContents[index].classList.toggle('active')
    })
})

window.addEvents