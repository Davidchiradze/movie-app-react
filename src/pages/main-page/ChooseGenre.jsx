import React, { useContext } from "react";
import { MoviesDataContext } from "../../contexts/moviesData";
import { CategorysNavLink, CategorysWrapper } from "./components";

const ChooseGenre = () => {
  const { movieCategories } = useContext(MoviesDataContext);

  return (
    <CategorysWrapper>
      <CategorysNavLink to={"/movies/Allgenres"}>
        {"All Genres"}
      </CategorysNavLink>
      {movieCategories?.map((genre) => (
        <CategorysNavLink key={genre} to={`/movies/${genre}`}>
          {genre}
        </CategorysNavLink>
      ))}
    </CategorysWrapper>
  );
};

export default ChooseGenre;
