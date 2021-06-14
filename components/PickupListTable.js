import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import SearchBar from "material-ui-search-bar";
import FormData from "form-data";
import { useStateValue } from "../context/StateProvider";
import Alert from "@material-ui/lab/Alert";

const columns = [
  { id: "sheetNo", label: "Sheet No #", minWidth: 170 },
  { id: "date", label: "Date", minWidth: 100 },
  {
    id: "shipments",
    label: "Shipments",
    minWidth: 170,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "print",
    label: "Print\u00a0Load\u00a0Sheet",
    minWidth: 170,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "printCn",
    label: "Print\u00a0CNs",
    minWidth: 170,
    format: (value) => value.toFixed(2),
  },
];

function createData(sheetNo, date, shipments, print, printCn) {
  return { sheetNo, date, shipments, print, printCn };
}

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function PickupListTable() {
  const [{ acno, b_usrId }, dispatch] = useStateValue();
  const [originalRows, setOriginalRows] = React.useState([]);
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState(originalRows);
  const [searched, setSearched] = React.useState("");

  const requestSearch = (searchedVal) => {
    const filteredRows = originalRows.filter((row) => {
      return row.sheetNo.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };
  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [data, setData] = React.useState(null);
  var formdata = new FormData();
  formdata.append("request", `{"acno":"${acno}"}`);

  var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  useEffect(() => {
    fetch(
      "http://benefitx.blue-ex.com/api/customerportal/getloadsheet.php",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log("error", error));
  }, [acno]);

  useEffect(() => {
    if (data !== null) {
      let newRows = [];
      for (let i = 0; i < data.detail.length; i++) {
        let ro = createData(
          data.detail[i].sheet_no,
          data.detail[i].sheet_date,
          data.detail[i].shipment,
          <form
            method="post"
            action={`http://benefitx.blue-ex.com/customerportal/inc/prnt_load_sht_cs.php`}
            target="_blank"
          >
            <input type="hidden" name="usrid" value={b_usrId} />
            <input type="hidden" name="acno" value={acno} />
            <input type="hidden" name="shtno" value={data.detail[i].sheet_no} />
            <button className="underline" type="submit">
              Print
            </button>
          </form>,
          <form
            method="post"
            action={`http://benefitx.blue-ex.com/customerportal/inc/cnprn_cusls.php`}
            target="_blank"
          >
            <input type="hidden" name="usrid" value={b_usrId} />
            <input type="hidden" name="acno" value={acno} />
            <input type="hidden" name="shtno" value={data.detail[i].sheet_no} />
            <button className="underline" type="submit">
              Print CN
            </button>
          </form>
        );
        newRows.push(ro);
      }
      setOriginalRows(newRows);
    }
  }, [data]);

  useEffect(() => {
    setRows(originalRows);
  }, [originalRows]);

  return (
    <Paper elevation={0} className={classes.root}>
      {originalRows.length !== 0 ? (
        <>
          <div className="flex justify-between items-center mb-[1rem]">
            <SearchBar
              value={searched}
              onChange={(searchVal) => requestSearch(searchVal)}
              onCancelSearch={() => cancelSearch()}
            />
            <div className="space-x-2 hidden sm:block"></div>
          </div>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </>
      ) : (
        <Alert severity="info">There is no data in Pickup List</Alert>
      )}
    </Paper>
  );
}
