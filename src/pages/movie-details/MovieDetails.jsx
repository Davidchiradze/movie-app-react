import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MoviesDataContext } from "../../contexts/moviesData";

const MovieDetails = () => {
  const [chosenMovie, setChosenMovie] = useState({});

  const { moviesData } = useContext(MoviesDataContext);
  const { id } = useParams();
  useEffect(() => {
    setChosenMovie(moviesData.find((movie) => movie?.id?.toString() === id));
  }, [id, moviesData]);

  return <div>{chosenMovie.name}</div>;
};

export default MovieDetails;
