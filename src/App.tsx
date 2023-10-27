import { BrowserRouter, Routes, Route } from "react-router-dom";
import WeatherApp from "./components/weatherApp/WeatherApp";
import GithubLinkPage from "./components/githubLinkPage/GithubLinkPage";
import WeatherContextProvider from "./context/WeatherContextProvider";

function App() {
  return (
    <WeatherContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WeatherApp />} />
          <Route path="/github-carbon" element={<GithubLinkPage />} />
        </Routes>
      </BrowserRouter>
    </WeatherContextProvider>
  );
}

export default App;
