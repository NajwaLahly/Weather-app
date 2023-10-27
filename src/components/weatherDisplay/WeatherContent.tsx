import {
  FaTemperatureLow,
  FaWind,
  FaWater,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import { useWeather } from "../../context/WeatherContextProvider";

export default function WeatherContent() {
  const { weatherData } = useWeather();

  return (
    <div className="weather-data">
      <IconContext.Provider
        value={{
          style: {
            color: "rgb(112, 104, 88)",
            fontSize: "22px",
            width: "30%",
            textAlign: "center",
            marginRight: "40px",
          },
        }}
      >
        <span>
          <FaTemperatureLow />
          {weatherData.temperature}° C
        </span>
        <span>
          <FaWind />
          {weatherData.windKph} Kph
        </span>
        <span>
          <FaWater />
          {weatherData.humidity} %
        </span>
        {weatherData.isDay ? (
          <span>
            <FaSun />
            Day
          </span>
        ) : (
          <span>
            <FaMoon />
            Night
          </span>
        )}
      </IconContext.Provider>
    </div>
  );
}
