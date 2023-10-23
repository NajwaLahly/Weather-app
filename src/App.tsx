import "./App.css";
import WeatherDisplay from "./components/weatherDisplay/WeatherDisplay";
import Container from "./components/container/Container";
import { WeatherData, WeatherApiData } from "./model";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: end;
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

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData>();
  const [inputLocation, setInputLocation] = useState<string>();

  const handleApiCall = async () => {
    if (inputLocation === "") {
      return;
    }

    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=07c39328eb134ed3add233858230602&q=${inputLocation}&aqi=yes`
      );
      const data = await response.json();
      setWeatherData(processData(data as WeatherApiData));
    } catch (error) {
      throw error;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputLocation(e.target.value);
  };

  return (
    <Wrapper>
      <h1>React Weather App</h1>
      <Container
        handleChange={handleChange}
        handleApiCall={debounce(handleApiCall, 500)}
      />
      {weatherData && <WeatherDisplay weather={weatherData} />}
    </Wrapper>
  );
}

export default App;
