import React, { useContext, useEffect } from "react";
import FavouriteMoviesTable from "./FavouriteMoviesTable";
import { MoviesDataContext } from "../../contexts/moviesData";
import {
  FavouritesPageWrapper,
  FavouritesTableWrapper,
} from "../main-page/components";
import StyledHeader from "../main-page/StyledHeader";

const FavouritesPage = () => {
  const { moviesData, setFilteredMoviesData, chosenGenre } =
    useContext(MoviesDataContext);
  useEffect(() => {
    setFilteredMoviesData(moviesData?.filter((movie) => movie.favourites));
  }, [chosenGenre, moviesData, setFilteredMoviesData]);
  return (
    <FavouritesPageWrapper>
      <FavouritesTableWrapper>
        <StyledHeader />
        <FavouriteMoviesTable />
      </FavouritesTableWrapper>
    </FavouritesPageWrapper>
  );
};

export default FavouritesPage;
