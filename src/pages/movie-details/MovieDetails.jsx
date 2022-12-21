import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MoviesDataContext } from "../../contexts/moviesData";
import {
  DetailsWrapper,
  MovieDetailsPageWrapper,
  MovieImage,
} from "./components";

const MovieDetails = () => {
  const [chosenMovie, setChosenMovie] = useState({});

  const { moviesData } = useContext(MoviesDataContext);
  const { id } = useParams();
  useEffect(() => {
    setChosenMovie(moviesData.find((movie) => movie?.id?.toString() === id));
  }, [id, moviesData]);

  return (
    <MovieDetailsPageWrapper>
      <DetailsWrapper>
        <div>
          <MovieImage src={chosenMovie.img} />
        </div>
        <div>
          <h2>{chosenMovie.name}</h2>
          <h3>{chosenMovie.genre}</h3>
        </div>
      </DetailsWrapper>
    </MovieDetailsPageWrapper>
  );
};

export default MovieDetails;
