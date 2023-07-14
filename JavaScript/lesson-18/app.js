const input = document.querySelector('#input')
const content = document.querySelector('#content')

function getWeatherData(cityName) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=a045a1a5356155dc5712ab1318762afa`
    )
        .then(res => res.json())
        .then(data => renderWeatherData(data))
        .catch(() => {
            content.innerHTML = `<h1 class="text-center text-[40px] font-semibold my-[30px] text-slate-600">Country is not found!</h1>`
        })
}

getWeatherData('Nukus')

function renderWeatherData(data){
    content.innerHTML = ''
    content.innerHTML = `
        <h1 class="text-3xl font-semibold text-slate-700">${data.name} ${data.sys.country}</h1>
        <div class="text-3xl flex gap-4 items-center">
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            <h1 class="text-3xl text-slate-600">${data.weather[0].main}</h1>
        </div>
        <h1 class="text-[90px] font-medium text-white">${data.main.temp}°C</h1>
        <div>
            <h2 class="text-slate-700 text-[40px]">Min: <span class="text-white font-semibold">${data.main.temp_min}°C</span></h2>
            <h2 class="text-slate-700 text-[40px]">Max: <span class="text-white font-semibold">${data.main.temp_max}°C</span></h2>
        </div>
    `
}

input.addEventListener('change', () => {
    getWeatherData(input.value)
    input.value = ''
})

