var apiKey = "d4dbd406439d567485abdbaaa5c46db6";
async function getWeatherData(city) {
  // Apı'a istek at
  var response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  );
  // Json verisini javascript nesnesine çevir
  var data = await response.json();

  return data;
}

getWeatherData("Paris");