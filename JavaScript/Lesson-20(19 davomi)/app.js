const categoriesContent = document.querySelector('#categories-content')
const categoryName = document.querySelector('#categoryName')
const mealsContent = document.querySelector('#meals-content')
const input = document.querySelector('#input')
const search = document.querySelector('#search')
const sidebar = document.querySelector('#sidebar')
const toggler = document.querySelector('#toggler')

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
                <img class="w-[60px] h-[60px] rounded-md object-cover w-full" src="${item.strCategoryThumb}" /> 
                ${item.strCategory}
            </li>
        `
    })
}

function setCategoryID(name) {
    animationRender()
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
    mealsContent.classList.remove('lg:grid-cols-1')

if (!meals) {
    mealsContent.classList.add('lg:grid-cols-1')
    mealsContent.innerHTML = `<h1 class="text-xl text-slate-600 text-center">Meals not found! Please choose other category or enter your fovourite meal.</h1>`
}

    meals.map(item => {
        mealsContent.innerHTML += `
            <div class="shadow-md rounded-md p-4">
                <img class="bg-orange rounded-md h-[250px] bg-orange-500 w-full object-cover" src="${item.strMealThumb}" />
                <h1 class="text-xl font-semibold text-slate-600 text-center mt-4">${item.strMeal}</h1>
            </div>
        `
    })
}

function searchMeals(mealName) {
    animationRender()
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
        .then(res => res.json())
        .then(data => renderMeals(data.meals))
}

search.addEventListener('change', () => {
    searchMeals(search.value)
    categoryName.innerHTML = search.value
    search.value = ''
})

toggler.addEventListener('click', () => {
    sidebar.classList.toggle('sm:-left-[150%]')
})

sidebar.addEventListener('click', () => {
    sidebar.classList.toggle('sm:-left-[150%]')
})

const fakeMeals = [1,2,3,4,5,6]
function animationRender() {
    mealsContent.innerHTML = ''
    fakeMeals.map(item => {
        mealsContent.innerHTML += `
        <div role="status" class="w-full p-4 border border-gray-200 rounded shadow animate-pulse md:p-6       dark:border-gray-400">
            <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-400">
                <svg class="w-10 h-10 text-gray-200 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                </svg>
            </div>
            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
        </div>
        `
    })
}
animationRender()

function animationCategories() {
    categoriesContent.innerHTML = ''
    fakeMeals.map(item => {
        categoriesContent.innerHTML +=`
            <div role="status" class="max-w-md p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700 mt-4">
                <div class="flex items-center justify-between">
                    <div>
                        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                        <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                </div>
            </div>
        `
    })
}

animationCategories()


setCategoryID('Beef')
fetchAllCategories()