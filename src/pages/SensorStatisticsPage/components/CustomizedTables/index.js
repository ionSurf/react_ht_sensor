import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(ID, humidity, temperature, timestamp) {
  return { ID, humidity, temperature, timestamp };
}

const rows = [
  createData(1, 18, 65, 1),
  createData(2, 10.2, 68.3, 2),
  createData(3, 15.1, 61, 3),
  createData(4, 16, 60.7, 4),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="right">humidity</StyledTableCell>
            <StyledTableCell align="right">temperature</StyledTableCell>
            <StyledTableCell align="right">timestamp</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.ID}>
              <StyledTableCell>{row.ID}</StyledTableCell>
              <StyledTableCell align="right">{row.humidity}</StyledTableCell>
              <StyledTableCell align="right">{row.temperature}</StyledTableCell>
              <StyledTableCell align="right">{row.timestamp}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
