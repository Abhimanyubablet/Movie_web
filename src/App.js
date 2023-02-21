import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Components/Home";
import MovieDetails from "./Components/MovieDetails";
import RatedDetails from "./Components/RatedDetails";
import TrendingDetails from "./Components/TrendingDetails";
import FilmDel from "./Components/FilmDel";
import Search from "./Components/Search";
import Form from "./Components/Form";
import Movie from "./Components/Movie";
import TvShow from "./Components/TvShow";
import WebSeries from "./Components/WebSeries";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/MovieDetails:id" element={<MovieDetails/>} /> */}
          <Route path="/Form" element={<Form/>}/>
          <Route path="/Details/:Type/:id" element={<MovieDetails/>} />
          <Route path="/RateDetails/:Type/:id" element={<RatedDetails/>} />
          <Route path="/TrendDetails/:Type/:id" element={<TrendingDetails/>} />
          <Route path="/FilmDetails/:Type/:id" element={<FilmDel/>} />
          <Route path="/Movie" element={<Movie/>} />
          <Route path="/TvShow" element={<TvShow/>}/>
          <Route path="/WebSeries" element={<WebSeries/>} />
          <Route path="/Search" element={<Search/>} />
          {/* <Route path="/TvDetail:id" element={<TvDetail/>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
