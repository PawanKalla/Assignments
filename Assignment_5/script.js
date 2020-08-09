
function getWeatherData(val) {
  console.log(val.value);
  fetch("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/" + val.value)
  .then(response => response.json())
  .then(res => {
    console.log(res);
     document.getElementById("current-temperature__value").innerHTML = ${res.title} ${res.consolidated_weather[0].the_temp};
  } );
}
