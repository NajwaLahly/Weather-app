import { FaSearchLocation } from "react-icons/fa";
import styled from "styled-components";
import { WeatherData } from "../../utils/model";

type WeatherHighlightProps = {
  weather: WeatherData;
};

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

export default function WeatherHighlight({ weather }: WeatherHighlightProps) {
  return (
    <div className="weather-highlight">
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
    </div>
  );
}
