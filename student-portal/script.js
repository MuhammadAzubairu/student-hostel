function getWeather() {
  const city = document.getElementById('city').value;

  fetch(`/weather?city=${city}`)
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        document.getElementById('weather-info').textContent = data.error;
      } else {
        const weatherInfo = `${data.location}: ${data.weather}, ${data.temperature}°C`;
        document.getElementById('weather-info').textContent = weatherInfo;
      }
    })
    .catch(error => console.error('Error:', error));
}



