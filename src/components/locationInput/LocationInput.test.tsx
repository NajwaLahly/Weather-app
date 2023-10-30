import LocationInput from "./LocationInput";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// import { useWeather } from "../../context/WeatherContextProvider";

// const dummyData = {
//   location: {
//     name: "",
//     region: "",
//     country: "",
//     localtime: new Date(),
//   },
//   current: {
//     condition: {
//       text: "",
//       icon: "",
//     },
//     temp_c: 17,
//     wind_kph: 30,
//     humidity: 70,
//     is_day: 0,
//   },
// };

// beforeEach(() => {
//   jest.spyOn(global, "fetch").mockResolvedValue(mockedResponse);
// });

// afterEach(() => {
//   jest.restoreAllMocks();
// });

// const mockedResponse = new Response(JSON.stringify(dummyData), {
//   status: 200,
//   headers: { "Content-Type": "application/json" },
// });

// const mockedFetchWeather = jest.fn();

// jest.mock("../../context/WeatherContextProvider", () => ({
//   useWeather: () => ({
//     fetchWeather: mockedFetchWeather,
//   }),
// }));

// describe("LocationInput component", () => {
//   it("should fetch weather after search button click", async () => {
//     render(<LocationInput />);
//     const input = screen.getByTestId("location-input");
//     userEvent.type(input, "Paris");
//     const button = screen.getByTestId("search-button");
//     userEvent.click(button);
//     expect(mockedFetchWeather).toHaveBeenCalledWith("Paris");
//   });
// });
