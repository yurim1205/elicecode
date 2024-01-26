const cityForm = document.querySelector('form')
const details = document.querySelector('.details') // details 클래스에 접근
const card = document.querySelector('.card')

const updateUI = (data)=>{
    const cityInfo = data.cityInfo
    const weather = data.weather

    if(weather.IsDayTime) {
        details.innerHTML = `
            <img class="card-img-top" src="./img/dayimage.png" alt="" />
            <h5 class="my-3">${cityInfo.EnglishName}</h5>
            <div class="my-3">${weather.WeatherText}</div>
            <div class="display-4 my-4">
                <span>${weather.Temperature.Metric.Value}</span>
                <span>&deg;C</span>
            </div>
        ` 
    } else {
        details.innerHTML = `
            <img class="card-img-top" src="./img/nightimage.png" alt="" />
            <h5 class="my-3">${cityInfo.EnglishName}</h5>
            <div class="my-3">${weather.WeatherText}</div>
            <div class="display-4 my-4">
                <span>${weather.Temperature.Metric.Value}</span>
                <span>&deg;C</span>
            </div>
        ` 
    }

    // classList: 설정해놓은 레퍼런스 태그들을 가져오는 것
    // 만약 display-none 키워드를 가지고 있다면 classList에서 display-none을 제거함
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none')
    }
}

// 받아온 도시명을 처리해주는 함수 (검색후 업데이트 해주는 함수))
const updateCity=async(city)=>{
    const cityInfo = await getCity(city) // 검색한 도시를 getCity에 넣어줌
    const weather = await getWeather(cityInfo.Key)

    return {
        cityInfo: cityInfo,
        weather: weather
    }
}

cityForm.addEventListener('submit',e=>{
    e.preventDefault(); 

    const city=cityForm.city.value; // 도시명을 받아옴

    updateCity(city).then(data=>updateUI(data)); // updateUI로 데이터 결과를 보냄
})