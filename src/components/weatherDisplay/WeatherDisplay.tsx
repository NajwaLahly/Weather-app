import LocaltimeDisplay from "../localtimeDisplay/LocaltimeDisplay";
import WeatherContent from "./WeatherContent";
import WeatherHighlight from "./WeatherHighlight";
import "./WeatherDisplay.css";

export default function WeatherDisplay() {
  return (
    <div>
      <WeatherHighlight />
      <WeatherContent />
      <LocaltimeDisplay />
    </div>
  );
}
