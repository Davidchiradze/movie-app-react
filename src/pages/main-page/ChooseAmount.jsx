import React, { useContext } from "react";
import { MoviesDataContext } from "../../contexts/moviesData";

const ChooseAmount = () => {
  const { moviesAmountPerPage, setMoviesAmountPerPage } =
    useContext(MoviesDataContext);
  return (
    <div>
      Movies per page{" "}
      <select
        defaultValue={moviesAmountPerPage}
        onChange={(e) => setMoviesAmountPerPage(e.target.value)}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
    </div>
  );
};

export default ChooseAmount;
