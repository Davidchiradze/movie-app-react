import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MoviesDataContext } from "../../contexts/moviesData";
import ChooseAmount from "./ChooseAmount";
import { StyledPar, StyledParagraphWrapper } from "./components";
import MoviesTable from "./MoviesTable";
import Pages from "./Pages";
import StyledHeader from "./StyledHeader";

const MoviesList = () => {
  const params = useParams();
  const chosenGenre = params?.genre;
  const {
    moviesData,
    filteredMoviesData,
    setFilteredMoviesData,
    setChosenPage,
  } = useContext(MoviesDataContext);

  useEffect(() => {
    setChosenPage(1);
    if (chosenGenre === "Allgenres") {
      setFilteredMoviesData(moviesData);
    } else {
      setFilteredMoviesData(
        moviesData?.filter((movie) => movie.genre === chosenGenre)
      );
    }
  }, [chosenGenre, moviesData, setFilteredMoviesData, setChosenPage]);

  return (
    <div style={{ width: "600px" }}>
      <StyledParagraphWrapper>
        <StyledPar>{`Showing ${filteredMoviesData?.length} movies in database.`}</StyledPar>
        {/*in this component you can choose 
        how many movies should be visible on per page */}
        <ChooseAmount />
      </StyledParagraphWrapper>
      <StyledHeader />
      <MoviesTable />
      <Pages />
    </div>
  );
};

export default MoviesList;
