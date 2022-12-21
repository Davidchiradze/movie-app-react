import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ChooseGenre from "./ChooseGenre";
import { MainPageWrapper } from "./components";
import MoviesList from "./MoviesList";

const MainPage = () => {
  const { genre } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    !genre && navigate("Allgenres");
  }, [navigate, genre]);

  return (
    <MainPageWrapper>
      <ChooseGenre />
      <MoviesList />
    </MainPageWrapper>
  );
};

export default MainPage;
