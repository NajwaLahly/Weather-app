import { useEffect, useState } from "react";
import { useWeather } from "../../context/WeatherContextProvider";

export default function LocaltimeDisplay() {
  const { weatherData } = useWeather();
  const localtime = weatherData.localtime;

  const [time, setTime] = useState(new Date(localtime));

  const tick = () => setTime((prevTime) => new Date(prevTime.getTime() + 1000));

  useEffect(() => {
    setTime(new Date(localtime));
  }, [localtime]);

  useEffect(() => {
    const intervalId = setInterval(tick, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <p>{time.toString()}</p>;
}
