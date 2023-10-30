import { render, screen } from "@testing-library/react";
import WeatherApp from "./WeatherApp";
import { BrowserRouter } from "react-router-dom";
import { WeatherContextValue } from "../../context/WeatherContextProvider";
import { WeatherData } from "../../utils/model";
// import { useWeather } from "../../context/WeatherContextProvider";

var mockedUseWeather = jest.fn<() => WeatherContextValue, []>();

jest.mock("../../context/WeatherContextProvider", () => ({
  useWeather: mockedUseWeather.mockReturnValueOnce(() => ({
    weatherData: {} as WeatherData,
    fetchWeather: () => {},
    isFetching: true,
    error: null,
  })),
}));

// jest.mock("../../context/WeatherContextProvider", () => ({
//   useWeather: mockedUseWeather,
// }));

describe("WeatherApp component", () => {
  it.only("should display loader when data is loading", () => {
    // mockedUseWeather.mockReturnValue(() => ({
    //   weatherData: {} as WeatherData,
    //   fetchWeather: () => {},
    //   isFetching: true,
    //   error: null,
    // }));

    render(
      <BrowserRouter>
        <WeatherApp />
      </BrowserRouter>
    );
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });
});
