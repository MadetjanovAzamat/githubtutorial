const categoriesContent = document.querySelector('#categories-content')
const categoryName = document.querySelector('#categoryName')
const mealsContent = document.querySelector('#meals-content')
const input = document.querySelector('#input')

let selectedCategoryName = ''

function fetchAllCategories() {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res => res.json())
        .then(data => renderCategories(data.categories))
}

function renderCategories(categories) {
    categoriesContent.innerHTML = ''
    categories.map(item => {
        categoriesContent.innerHTML += `
            <li
                onclick="setCategoryID('${item.strCategory}')"
                class="text-white font-semibold text-2xl flex items-center gap-4 p-2 mb-4 cursor-pointer rounded-md border active:bg-[rgba(255,255,255,.2)]">
                <img class="w-[60px] h-[60px] rounded-md object-contain" src="${item.strCategoryThumb}" /> 
                ${item.strCategory}
            </li>
        `
    })
}

function setCategoryID(name) {
    selectedCategoryName = name
    categoryName.innerHTML = name

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
        .then(res => res.json())
        .then(data => {
            renderMeals(data.meals)
        })
}

function renderMeals(meals) {
    mealsContent.innerHTML = ''
    meals.map(item => {
        mealsContent.innerHTML += `
            <div class="shadow-md rounded-md p-4">
                <img class="bg-orange rounded-md h-[250px] bg-orange-500" src="${item.strMealThumb}" />
                <h1 class="text-xl font-semibold text-slate-600 text-center mt-4">${item.strMeal}</h1>
            </div>
        `
    })
}

setCategoryID('Beef')
fetchAllCategories()