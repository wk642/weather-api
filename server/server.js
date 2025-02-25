appendFile.get("/weather", (req, res) => {
  const city = req.query.cityName;
  const apiKey = process.env.WEATHER_API_KEY;
  const params = new URLSearchParams({
    q: req.query.cityName,
    appleid: process.env.WEATHER_API_KEY,
    units: "imperial",
  });
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Nashville&appid=${apiKey}`
  
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      res.send({data});
    })
    .catch((err) => {
      console.log(err);
    });
});