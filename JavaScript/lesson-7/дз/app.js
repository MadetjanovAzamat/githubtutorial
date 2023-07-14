const menuBtn = document.querySelector('.menu-btn')
const dropMenu = document.querySelector('.dropmenu')

menuBtn.onclick = function () {
    dropMenu.classList.toggle('open')
}