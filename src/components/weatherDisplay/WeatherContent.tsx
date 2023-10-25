import {
  FaTemperatureLow,
  FaWind,
  FaWater,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import { WeatherData } from "../../utils/model";

type WeatherContentProps = {
  weather: WeatherData;
};

export default function WeatherContent({ weather }: WeatherContentProps) {
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
          {weather.temperature}° C
        </span>
        <span>
          <FaWind />
          {weather.windKph} Kph
        </span>
        <span>
          <FaWater />
          {weather.humidity} %
        </span>
        {weather.isDay ? (
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
