import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function createData(
  name,
  address,
  contact,
  email,
  productName,
  productValue,
  pieces,
  weight,
  destination,
  customerRef,
  comments,
  storeId
) {
  return {
    name,
    address,
    contact,
    email,
    productName,
    productValue,
    pieces,
    weight,
    destination,
    customerRef,
    comments,
    storeId,
  };
}

let originalRows = [];

export default function ShipTable({ data }) {
  const [rows, setRows] = useState(originalRows);

  const refresh = () => {
    originalRows = [];
    for (let d of data) {
      originalRows.push(
        createData(
          d["Consignee Name"],
          d["Consignee Address"],
          d["Consignee Contact No"],
          d["Consignee Email"],
          d["Product Name"],
          d["COD"],
          d["Pieces"],
          d["Weight"],
          d["Destination"],
          d["Customer Reference"],
          d["Customer Comment"],
          d["Store Id"]
        )
      );
    }
  };

  useEffect(() => {
    console.log("Data", data);
    refresh();
  }, [data]);

  useEffect(() => {
    setRows(originalRows);
  }, [originalRows]);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Customer Name</TableCell>
            <TableCell>Customer Address</TableCell>
            <TableCell>Customer Contact</TableCell>
            <TableCell>Customer Email</TableCell>
            <TableCell>Product Name</TableCell>
            <TableCell>Product Value</TableCell>
            <TableCell>Pieces</TableCell>
            <TableCell>Weight</TableCell>
            <TableCell>Destination</TableCell>
            <TableCell>Customer Refrence</TableCell>
            <TableCell>Comments</TableCell>
            <TableCell>Store ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.contact}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.productName}</TableCell>
              <TableCell>{row.productValue}</TableCell>
              <TableCell>{row.pieces}</TableCell>
              <TableCell>{row.weight}</TableCell>
              <TableCell>{row.destination}</TableCell>
              <TableCell>{row.customerRef}</TableCell>
              <TableCell>{row.comments}</TableCell>
              <TableCell>{row.storeId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
