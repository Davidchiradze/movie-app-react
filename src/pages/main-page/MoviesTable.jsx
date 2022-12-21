import React, { useContext } from "react";
import { HeaderNavigationLink } from "../../components/header/components";
import { MoviesDataContext } from "../../contexts/moviesData";
import { StyledButton, TableComponent, TableRow } from "./components";

const MoviesTable = () => {
  const {
    chosenPage,
    filteredMoviesData,
    moviesAmountPerPage,
    handleDelete,
    handleFavourite,
  } = useContext(MoviesDataContext);

  return filteredMoviesData
    ?.map(
      (item, ind) =>
        (chosenPage - 1) * moviesAmountPerPage <= ind &&
        ind + 1 <= chosenPage * moviesAmountPerPage && (
          <TableRow key={item.id}>
            <TableComponent style={{ color: "#386adb" }}>
              <HeaderNavigationLink
                to={`/movie/${item.id}`}
                style={{ color: "#386adb" }}
              >
                {item.name}
              </HeaderNavigationLink>
            </TableComponent>
            <TableComponent>{item.genre}</TableComponent>
            <TableComponent>{item.stock}</TableComponent>
            <TableComponent>{item.rate}</TableComponent>
            <TableComponent style={{ gap: "30px" }}>
              <ion-icon
                style={{ cursor: "pointer" }}
                name={item.favourites ? "heart" : "heart-outline"}
                onClick={() => handleFavourite(item.id)}
              ></ion-icon>
              <StyledButton onClick={() => handleDelete(item.id)}>
                Remove
              </StyledButton>
            </TableComponent>
          </TableRow>
        )
    )
    .filter((item) => item);
};

export default MoviesTable;
