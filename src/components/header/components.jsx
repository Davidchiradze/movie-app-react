import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  background: #f2f2f2;
`;

export const HeaderNavigation = styled.div`
  display: flex;
  margin-left: 50px;
  gap: 20px;
  padding: 5px;
`;

export const HeaderNavigationLink = styled(NavLink)`
  font-size: 16px;
  font-weight: 00;
  text-decoration: none;
  padding: 13px;
  color: #555;
  &.active {
    color: #000;
    font-weight: 500;
  }
`;
