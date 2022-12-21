import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MainPageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 50px;
`;

export const CategorysWrapper = styled.ul`
  width: 150px;
  display: flex;
  flex-direction: column;
`;
export const CategorysNavLink = styled(NavLink)`
  text-decoration: none;
  list-style: none;
  padding: 10px;
  background: #fff;
  color: #555;
  width: 100%;
  border-bottom: 1px solid rgba(1, 1, 1, 0.1);
  border-right: 1px solid rgba(1, 1, 1, 0.1);
  border-left: 1px solid rgba(1, 1, 1, 0.1);
  &:first-child {
    border-top: 1px solid rgba(1, 1, 1, 0.1);
  }
  &.active {
    background: #0a6ae9;
    color: #fff;
  }
`;
export const MoviesListWrapper = styled.div``;

export const StyledPar = styled.p``;

export const TableRow = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid rgba(1, 1, 1, 0.1);
  padding: 15px;
  :hover {
    background: #e4e3e3;
  }
`;
export const TableComponent = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
`;

export const StyledButton = styled.button`
  border: unset;
  background: #c34040;
  color: #fff;
  padding: 5px 10px;
  cursor: pointer;
`;

export const PageNumber = styled.div`
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border: 1px solid rgba(1, 1, 1, 0.1);
  background: ${(props) => (props.active ? "#0a6ae9" : "#fff;")};
  color: ${(props) => (props.active ? "#fff" : "#0a6ae9;")};
  cursor: pointer;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const StyledParagraphWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FavouritesPageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const FavouritesTableWrapper = styled.div`
  width: 600px;
`;
