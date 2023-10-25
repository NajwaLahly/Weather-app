import "./WeatherApp.css";
import WeatherDisplay from "../../components/weatherDisplay/WeatherDisplay";
import LocationInput from "../locationInput/LocationInput";
import { WeatherData, WeatherApiData } from "../../utils/model";
import { debounce, processData } from "../../utils/utils";
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
      <LocationInput
        handleChange={handleChange}
        handleApiCall={debounce(handleApiCall, 200)}
      />
      {loading ? (
        <div className="loader"></div>
      ) : (
        weatherData && <WeatherDisplay weather={weatherData} />
      )}
      <Footer />
    </Wrapper>
  );
}
