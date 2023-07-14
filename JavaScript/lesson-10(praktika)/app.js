const wrapper = document.querySelector('.wrapper')
const colorPicker = document.querySelector('color-picker')
const colorInput = document.querySelector('color-input')
const randomBtn = document.querySelector('#random-btn')

function setBodyColor(color) {
    wrapper.style.backgroundColor = color
}

colorPicker.addEventListener('change', e => {
    setBodyColor(e.target.value)
})

colorInput.addEventListener('input', e => {
    setBodyColor(e.target.value)
})

function getRandomColor() {
    let letters = '0123456789ABCDEF'
    let color = '#'

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random()*16)]
    }

    return color
}

setInterval(() => {
    setBodyColor(getRandomColor())
},1000)

randomBtn.addEventListener('click', () => {
    setBodyColor(getRandomColor())
})