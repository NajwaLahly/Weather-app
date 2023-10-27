export async function fetchWeatherData(inputLocation: string) {
  const response = fetch(
    `http://api.weatherapi.com/v1/current.json?key=07c39328eb134ed3add233858230602&q=${inputLocation}&aqi=yes`
  )
    .then(async (response) => {
      if (!response.ok) {
        return response.text().then((text) => {
          throw new Error(text);
        });
      } else {
        return response.json();
      }
    })
    .catch((e) => e);
  return response;
}
