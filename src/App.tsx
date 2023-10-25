import { BrowserRouter, Routes, Route } from "react-router-dom";
import WeatherApp from "./components/weatherApp/WeatherApp";
import GithubLinkPage from "./components/githubLinkPage/GithubLinkPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WeatherApp />} />
        <Route path="/github-carbon" element={<GithubLinkPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
