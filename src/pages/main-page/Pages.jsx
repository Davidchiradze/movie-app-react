import React, { useContext, useEffect, useState } from "react";
import { MoviesDataContext } from "../../contexts/moviesData";
import { PageNumber, PaginationWrapper } from "./components";

const Pages = () => {
  const [pagesArray, setPagesArray] = useState();
  const { chosenPage, setChosenPage, filteredMoviesData, moviesAmountPerPage } =
    useContext(MoviesDataContext);
  useEffect(() => {
    let arr = [];
    let pagesArrayLength = 0;
    if (filteredMoviesData?.length % moviesAmountPerPage === 0) {
      pagesArrayLength = filteredMoviesData?.length / moviesAmountPerPage;
    } else {
      pagesArrayLength = Math.floor(
        filteredMoviesData?.length / moviesAmountPerPage + 1
      );
    }
    for (let i = 0; i < pagesArrayLength; i++) {
      arr.push(i + 1);
    }
    setPagesArray(arr);
  }, [filteredMoviesData, moviesAmountPerPage]);

  const handlePagination = (index) => {
    setChosenPage(index);
  };
  return (
    <PaginationWrapper>
      {pagesArray?.map((item, index) => (
        <PageNumber
          key={index}
          active={index + 1 === chosenPage}
          onClick={() => handlePagination(index + 1)}
        >
          {index + 1}
        </PageNumber>
      ))}
    </PaginationWrapper>
  );
};

export default Pages;
