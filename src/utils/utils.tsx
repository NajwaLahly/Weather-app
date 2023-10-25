import { WeatherData, WeatherApiData } from "./model";

// Debounce function to limit API requests
export function debounce<T extends (...args: any[]) => void>(
    func: T,
    delay: number
  ): () => void {
    let timeout: NodeJS.Timeout;
    return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), delay);
    };
  }
  
export function processData(data: WeatherApiData): WeatherData {
    return {
      location: `${data.location.name}, ${data.location.region}, ${data.location.country}`,
      localtime: data.location.localtime,
      weatherCondition: data.current.condition.text,
      weatherIcon: data.current.condition.icon,
      temperature: data.current.temp_c,
      windKph: data.current.wind_kph,
      humidity: data.current.humidity,
      isDay: data.current.is_day,
    };
  }