import "./WeatherApp.css";
import WeatherDisplay from "../../components/weatherDisplay/WeatherDisplay";
import LocationInput from "../locationInput/LocationInput";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import { useWeather } from "../../context/WeatherContextProvider";

const Wrapper = styled.main`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #f5f7fb;
  color: #626976;
`;

export default function WeatherApp() {
  const { weatherData, isFetching, error } = useWeather();

  return (
    <Wrapper>
      <LocationInput />
      {isFetching && <div className="loader" data-testid="loader" />}
      {error && <div> Error has occured </div>}
      {weatherData && !error && !isFetching && <WeatherDisplay />}
      <Footer />
    </Wrapper>
  );
}
