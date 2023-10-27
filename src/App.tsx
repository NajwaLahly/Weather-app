import { BrowserRouter, Routes, Route } from "react-router-dom";
import WeatherApp from "./components/weatherApp/WeatherApp";
import GithubLinkPage from "./components/githubLinkPage/GithubLinkPage";
import WeatherContextProvider from "./context/WeatherContextProvider";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WeatherContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WeatherApp />} />
            <Route path="/github-carbon" element={<GithubLinkPage />} />
          </Routes>
        </BrowserRouter>
      </WeatherContextProvider>
    </QueryClientProvider>
  );
}

export default App;
