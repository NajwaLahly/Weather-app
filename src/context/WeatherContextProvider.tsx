import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import { WeatherData } from "../utils/model";
import { processData } from "../utils/utils";
import { WeatherApiData } from "../utils/model";
import { fetchWeatherData } from "../api/fetcher";

type WeatherContextValue = {
  weatherData: WeatherData;
  isLoading: boolean;
  fetchWeather: (location: string) => void;
};

type WeatherContextProviderProps = {
  children: ReactNode;
};

const weatherContext = createContext<WeatherContextValue>(
  {} as WeatherContextValue
);

export default function WeatherContextProvider({
  children,
}: WeatherContextProviderProps) {
  const [weatherData, setWeatherData] = useState<WeatherData>(
    JSON.parse(localStorage.getItem("weather")!)
  );
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem("weather", JSON.stringify(weatherData));
  }, [weatherData]);

  const fetchWeather = async (location: string) => {
    setLoading(true);
    if (!location) {
      return;
    }
    fetchWeatherData(location)
      .then((data) => setWeatherData(processData(data as WeatherApiData)))
      .then(() => setLoading(false))
      .catch((error) => console.log(error));
  };

  return (
    <weatherContext.Provider value={{ weatherData, isLoading, fetchWeather }}>
      {children}
    </weatherContext.Provider>
  );
}

export const useWeather = () => {
  return useContext(weatherContext);
};
