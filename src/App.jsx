import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import Player from "./Pages/Player";
import Movies from "./Pages/Movies/Movies";
import TvShows from "./Pages/TvShows/TvShows";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/movies" element={<Movies />} />
        <Route exact path="/tvshows" element={<TvShows/>}/>
        <Route exact path="/player" element={<Player />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
