const items = document.querySelectorAll("#menu_item")
const images = document.querySelectorAll("img")

function clearActive() {
    items.forEach(item => item.classList.remove("active"))
    images.forEach(item => item.classList.remove("active"))
}

function setActiveCar(carName) {
    images.forEach(item => {
        if(item.dataset.car === carName) {
            item.classList.add("active")
        }
    })
    items.forEach(item => {
        if(item.dataset.car === carName) {
            item.classList.add("active")
        }
    })
}

items.forEach(item => {
    item.addEventListener("click", () => {
        clearActive()
        setActiveCar(item.dataset.car)
    })
})

setActiveCar("mers")