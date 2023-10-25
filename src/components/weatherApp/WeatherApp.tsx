import "./WeatherApp.css";
import WeatherDisplay from "../../components/weatherDisplay/WeatherDisplay";
import Container from "../locationInput/LocationInput";
import { WeatherData, WeatherApiData } from "../../model";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";

const Wrapper = styled.main`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #f5f7fb;
  color: #626976;
`;

// Debounce function to limit API requests
function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number
): () => void {
  let timeout: NodeJS.Timeout;
  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

function processData(data: WeatherApiData): WeatherData {
  return {
    location: `${data.location.name}, ${data.location.region}, ${data.location.country}`,
    localtime: data.location.localtime,
    weatherCondition: data.current.condition.text,
    weatherIcon: data.current.condition.icon,
    temperature: data.current.temp_c,
    windKph: data.current.wind_kph,
    humidity: data.current.humidity,
    isDay: data.current.is_day,
  };
}

export default function WeatherApp() {
  const [weatherData, setWeatherData] = useState<WeatherData>(
    JSON.parse(localStorage.getItem("weather")!)
  );
  const [inputLocation, setInputLocation] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem("weather", JSON.stringify(weatherData));
  }, [weatherData]);

  const handleApiCall = async () => {
    setLoading(true);
    if (!inputLocation) {
      return;
    }
    fetch(
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
      .then((data) => setWeatherData(processData(data as WeatherApiData)))
      .then(() => setLoading(false))
      .catch((error) => console.log(error));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputLocation(e.target.value);
  };

  return (
    <Wrapper>
      <Container
        handleChange={handleChange}
        handleApiCall={debounce(handleApiCall, 200)}
      />
      {loading ? (
        <div className="loader"></div>
      ) : (
        <WeatherDisplay weather={weatherData} />
      )}
      <Footer />
    </Wrapper>
  );
}
