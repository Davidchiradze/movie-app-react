import React from "react";
import {
  HeaderNavigation,
  HeaderWrapper,
  HeaderNavigationLink,
} from "./components";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderNavigation>
        <HeaderNavigationLink to={"/movies/Allgenres"}>
          Movies
        </HeaderNavigationLink>
        <HeaderNavigationLink to={"/favourites"}>
          Favourites
        </HeaderNavigationLink>
      </HeaderNavigation>
    </HeaderWrapper>
  );
};

export default Header;
