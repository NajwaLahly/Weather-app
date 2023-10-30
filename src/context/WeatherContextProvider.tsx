import { createContext, useState, ReactNode, useContext } from "react";
import { WeatherData } from "../utils/model";
import { processData } from "../utils/utils";
import { WeatherApiData } from "../utils/model";
import { fetchWeatherData } from "../api/fetcher";
import { useQuery } from "react-query";

export type WeatherContextValue = {
  weatherData: WeatherData;
  fetchWeather: (Location: string) => void;
  isFetching: boolean;
  error: any;
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
  const [location, setLocation] = useState<string>("");

  const fetchData = async (location: string) => {
    if (!location) {
      return;
    }
    return fetchWeatherData(location).then((data) =>
      processData(data as WeatherApiData)
    );
  };

  const useWeatherData = (location: string) => {
    return useQuery(["weather", location], () => fetchData(location), {
      enabled: !!location,
      initialData: JSON.parse(localStorage.getItem("weather")!),
      onSuccess: (data) => {
        if (data) {
          localStorage.setItem("weather", JSON.stringify(data));
        }
      },
    });
  };

  const {
    refetch,
    data: weatherData,
    isFetching,
    error,
  } = useWeatherData(location);

  const fetchWeather = (location: string) => {
    setLocation(location);
    refetch();
  };

  return (
    <weatherContext.Provider
      value={{ weatherData, fetchWeather, isFetching, error }}
    >
      {children}
    </weatherContext.Provider>
  );
}

export const useWeather = () => {
  return useContext(weatherContext);
};
