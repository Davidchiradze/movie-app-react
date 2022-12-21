import { createContext, useCallback, useEffect, useState } from "react";

export const MoviesDataContext = createContext();

export const MoviesDataProvider = ({ children }) => {
  const [moviesData, setMoviesData] = useState();
  const [movieCategories, setMovieCategories] = useState([]);
  const [filteredMoviesData, setFilteredMoviesData] = useState([]);
  const [moviesAmountPerPage, setMoviesAmountPerPage] = useState(3);
  const [chosenPage, setChosenPage] = useState(1);

  const fetchMovies = useCallback(async () => {
    const response = await fetch("http://localhost:3000/movies.json");
    const data = await response.json();
    setMoviesData(data);
  }, [setMoviesData]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  useEffect(() => {
    if (moviesData?.length > 0) {
      const categories = moviesData.map((movie) => movie.genre);
      setMovieCategories([...new Set(categories)]);
    }
  }, [moviesData]);

  const handleDelete = (id) => {
    setMoviesData(moviesData.filter((item) => item.id !== id));
  };

  const handleFavourite = (id) => {
    setMoviesData(
      moviesData.map((item) =>
        item.id === id ? { ...item, favourites: !item.favourites } : item
      )
    );
  };

  return (
    <MoviesDataContext.Provider
      value={{
        moviesData,
        setMoviesData,
        movieCategories,
        setMovieCategories,
        handleDelete,
        handleFavourite,
        moviesAmountPerPage,
        setMoviesAmountPerPage,
        filteredMoviesData,
        setFilteredMoviesData,
        chosenPage,
        setChosenPage,
      }}
    >
      {children}
    </MoviesDataContext.Provider>
  );
};
