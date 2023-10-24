import { WeatherData } from "../../model";
import styled from "styled-components";
import LocaltimeDisplay from "../localtimeDisplay/LocaltimeDisplay";
import {
  FaTemperatureLow,
  FaWind,
  FaWater,
  FaMoon,
  FaSun,
  FaSearchLocation,
} from "react-icons/fa";
import { IconContext } from "react-icons";

type WeatherDisplayProps = {
  weather: WeatherData;
};

const WeatherContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
`;

const WeatherText = styled.span`
  width: 100%;
  display: table-cell;
  vertical-align: middle;
  white-space: nowrap;
`;

const Temperature = styled.span`
  font-size: 4rem;
  font-weight: 100;
  small {
    font-size: 50%;
    vertical-align: super;
  }
`;

const Location = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
`;

const WeatherHighlight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

export default function WeatherDisplay({ weather }: WeatherDisplayProps) {
  return (
    <>
      <WeatherHighlight>
        <img
          src={weather.weatherIcon}
          alt="Weather icon"
          width="80"
          height="80"
        />
        <Temperature>{weather.temperature}°C</Temperature>
        <Location>
          <FaSearchLocation style={{ marginRight: "1rem" }} />
          {weather.location}
        </Location>
      </WeatherHighlight>
      <WeatherContent>
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
          <WeatherText>
            <FaTemperatureLow />
            {weather.temperature}° C
          </WeatherText>
          <WeatherText>
            <FaWind />
            {weather.windKph} Kph
          </WeatherText>
          <WeatherText>
            <FaWater />
            {weather.humidity} %
          </WeatherText>
          {weather.isDay ? (
            <WeatherText>
              <FaSun />
              Day
            </WeatherText>
          ) : (
            <WeatherText>
              <FaMoon />
              Night
            </WeatherText>
          )}
        </IconContext.Provider>
      </WeatherContent>
      <LocaltimeDisplay localtime={weather.localtime} />
    </>
  );
}
