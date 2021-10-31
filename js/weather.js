const API_KEY = "1ce389c14c3b2010749c7f52e7aba611";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
            .then((response)=>response.json())
            .then(data =>{
                const weatherContainter = document.querySelector("#weather span:first-child");
                weatherContainter.innerText = `${data.main.temp}℃ ${data.name}`;
            });
}

function onGeoError(){
    alert("위치 정보를 찾을수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);