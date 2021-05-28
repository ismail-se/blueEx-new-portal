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

function createData(
  no,
  code,
  sector,
  weight,
  price,
  addWeight,
  addPrice,
  cnCharges
) {
  return { no, code, sector, weight, price, addWeight, addPrice, cnCharges };
}

const rows = [
  createData(1, "BLUE EDGE(BE)", "Other Cities(OC)", "0 - 1", 0, 1, 0, 0),
  createData(2, "BLUE EDGE(BE)", "Other Cities(OC)", "0 - 1", 0, 1, 0, 0),
  createData(3, "BLUE TRUNK(BT)", "Zone C(C)", "0 - 1", 0, 1, 0, 0),
  createData(4, "BLUE EDGE(BE)", "Within City(WC)", "0 - 1", 0, 1, 0, 0),
  createData(4, "BLUE EDGE(BE)", "Same Zone(SZ)", "0 - 1", 0, 1, 0, 0),
  createData(4, "BLUE EDGE(BE)", "Zone to Zone(ZZ)", "0 - 1", 0, 1, 0, 0),
  createData(4, "BLUE EDGE(BE)", "Within City(WC)", "0 - 1", 0, 1, 0, 0),
  createData(4, "BLUE TRUNK(BT)", "Zone A(A)", "0 - 1", 0, 1, 0, 0),
  createData(4, "BLUE TRUNK(BT)", "Zone B(B)", "0 - 1", 0, 1, 0, 0),
  createData(4, "BLUE TRUNK(BT)", "Zone D(D)", "0 - 1", 0, 1, 0, 0),
  createData(4, "BLUE TRUNK(BT)", "Zone E(E)", "0 - 1", 0, 1, 0, 0),
];

export default function TariffRatesTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Service Code</TableCell>
            <TableCell>Sector</TableCell>
            <TableCell>Weight (KG)</TableCell>
            <TableCell>Price (PKR)</TableCell>
            <TableCell>Add Weight (KG)</TableCell>
            <TableCell>Add Price (PKR)</TableCell>
            <TableCell>CN Charges (PKR)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.no}>
              <TableCell component="th" scope="row">
                {row.code}
              </TableCell>
              <TableCell>{row.sector}</TableCell>
              <TableCell>{row.weight}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.addWeight}</TableCell>
              <TableCell>{row.addPrice}</TableCell>
              <TableCell>{row.cnCharges}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
