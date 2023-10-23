import { WeatherData } from "../../model";
import styled from "styled-components";
import LocaltimeDisplay from "../localtimeDisplay/LocaltimeDisplay";

type WeatherDisplayProps = {
  weather: WeatherData;
};

const WeatherContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  gap: 0.5rem;
  @media screen and (max-width: 768px) {
    gap: 1.5rem;
  }
`;

export default function WeatherDisplay({ weather }: WeatherDisplayProps) {
  return (
    <WeatherContent>
      <img
        src={weather.weatherIcon}
        alt="Weather consition icon"
        width="60"
        height="60"
      />
      <p>{weather.temperature}° C</p>
      <p>{weather.location}</p>
      <p>{weather.windKph} Kph</p>
      <p>{weather.humidity} %</p>
      <p>{weather.isDay === 0 ? "day" : "night"}</p>
      <LocaltimeDisplay localtime={weather.localtime} />
    </WeatherContent>
  );
}
