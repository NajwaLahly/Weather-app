import { WeatherData } from "../../utils/model";
import LocaltimeDisplay from "../localtimeDisplay/LocaltimeDisplay";
import WeatherContent from "./WeatherContent";
import WeatherHighlight from "./WeatherHighlight";
import "./WeatherDisplay.css";

type WeatherDisplayProps = {
  weather: WeatherData;
};

export default function WeatherDisplay({ weather }: WeatherDisplayProps) {
  return (
    <div>
      <WeatherHighlight weather={weather} />
      <WeatherContent weather={weather} />
      <LocaltimeDisplay localtime={weather.localtime} />
    </div>
  );
}
