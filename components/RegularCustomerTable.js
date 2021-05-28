import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(no, cod, rate) {
  return { no, cod, rate };
}

const rows = [
  createData(
    1,
    "With NIL COD Value",
    "Rs.30 Fixed charges (claim settlement to the Maximum value of Rs 2,000/-)"
  ),
  createData(2, "Rs. 01 TO Rs. 2,000", "Rs. 30 Fixed charges"),
  createData(3, "Rs. 2,001 TO Rs. 10,000", "1.50% of COD amount"),
  createData(4, "Over Rs. 10,00", "2.00% of COD amount"),
];

export default function RegularCustomerTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>NO#</TableCell>
            <TableCell>ON COD AMOUNT</TableCell>
            <TableCell>PREMIUM RATE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.no}>
              <TableCell component="th" scope="row">
                {row.no}
              </TableCell>
              <TableCell>{row.cod}</TableCell>
              <TableCell>{row.rate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
