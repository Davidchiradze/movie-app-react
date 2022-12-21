import React, { useContext } from "react";
import { MoviesDataContext } from "../../contexts/moviesData";
import {
  TableRow,
  StyledButton,
  TableComponent,
} from "../main-page/components";

const FavouriteMoviesTable = () => {
  const { filteredMoviesData, handleDelete, handleFavourite } =
    useContext(MoviesDataContext);
  return filteredMoviesData?.map((item) => (
    <TableRow key={item.id}>
      <TableComponent style={{ color: "#386adb" }}>{item.name}</TableComponent>
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
  ));
};

export default FavouriteMoviesTable;
