import React from "react";
import { TableComponent, TableRow } from "./components";

const StyledHeader = () => {
  const header = ["Title", "Genre", "Stock", "Rate"];

  return (
    <TableRow>
      {header.map((item) => (
        <TableComponent key={item} style={{ fontWeight: 700 }}>
          {item}
        </TableComponent>
      ))}
    </TableRow>
  );
};

export default StyledHeader;
