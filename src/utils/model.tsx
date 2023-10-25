export type WeatherData = {
  location: string;
  localtime: Date;
  weatherCondition: string;
  weatherIcon: string;
  temperature: number;
  windKph: number;
  humidity: number;
  isDay: 0 | 1;
};

export type WeatherApiData = {
  location: {
    name: string;
    region: string;
    country: string;
    localtime: Date;
  };
  current: {
    condition: {
      text: string;
      icon: string;
    };
    temp_c: number;
    wind_kph: number;
    humidity: number;
    is_day: 0 | 1;
  };
};
