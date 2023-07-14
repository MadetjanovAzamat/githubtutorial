const form = document.querySelector('form')
const input = document.querySelector('#search-input')
const content = document.querySelector('#content')
const typeInputs = document.getElementsByClassName('type-input')

let searchTxt = 'Avengers'
let selectedType = ''

function getAllMovies(searchText, type) {
    fetch(`https://www.omdbapi.com/?s=${searchText}&type=${type}&apikey=9446507`)
        .then(res => res.json())
        .then(data => renderAllMovies(data.Search))
}

function renderAllMovies(movies) {
    content.innerHTML = ''
    movies.map(item => {
        content.innerHTML += `
            <div class="border shadow-md rounded-sm p-4">
                <img class="rounded-sm mb-4 mx-auto w-full" src="${item.Poster}" />
                    <div>
                        <h2 class="text-xl font-medium text-slate-600">${item.title}</h2>
                        <div class="flex justify-between items-center">
                            <h3 class="text-slate-400 text-md font-medium">${item.Type}</h3>
                            <h3 class="text-slate-400 text-md font-medium">${item.Year}</h3>
                        </div>
                    </div>

            </div>
        `
    })
}

for (let i = 0; i < typeInputs.length; i++) {
    typeInputs[i].addEventListener('change', () => {
        selectedType = typeInputs[i].value
        getAllMovies(searchTxt, typeInputs[i].value)
    })
}

getAllMovies(searchTxt, selectedType)

form.addEventListener('submit', e => {
    e.preventDefault()
    getAllMovies(input.value, selectedType)
    searchTxt = input.value
    input.value = ''
})