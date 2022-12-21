import React, { useEffect } from "react";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import MainPage from "../pages/main-page/MainPage";
import Header from "./header/Header";
import FavouritesPage from "../pages/favourites-page/FavouritesPage";
import MovieDetails from "../pages/movie-details/MovieDetails";
const AuthorizedComponent = () => {
  const userInfo = localStorage.getItem("user");
  const redirect = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (!params["*"] || params["*"] === "movies" || params["*"] === "movies/") {
      redirect("/movies/Allgenres");
    }
  }, [params, redirect]);

  useEffect(() => {
    if (!userInfo) {
      redirect("/login");
    }
  }, [redirect, userInfo]);
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/movies/:genre" element={<MainPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
    </React.Fragment>
  );
};

export default AuthorizedComponent;
