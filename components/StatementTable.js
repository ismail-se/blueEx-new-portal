import React, { useState } from "react";
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
import { CircularProgress } from "@material-ui/core";
import { useEffect } from "react";
import { useStateValue } from "../context/StateProvider";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Alert from "@material-ui/lab/Alert";
import { CSVLink } from "react-csv";
import CurrencyFormat from "react-currency-format";
import { ExportXls } from "./ExportXls";

const headers = [
  { label: "Ref. No", key: "ref" },
  { label: "Date", key: "date" },
  { label: "Period", key: "period" },
  { label: "COD", key: "cod" },
];

const headings = [["Ref. No", "Date", "Period", "COD"]];

let csvData = [];

const dateChanger = (date) => {
  let d = date.split("-");
  var month = [
    "0",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${d[0]}-${month[+d[1]]}`;
};
const dateFormat = (date) => {
  let d = date.split("-");
  var month = [
    "0",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${d[0]}-${month[+d[1]]}-${d[2]}`;
};

const columns = [
  { id: "ref", label: "Ref. No", minWidth: 100 },
  { id: "date", label: "Date", minWidth: 100 },
  {
    id: "period",
    label: "Period",
    minWidth: 100,

    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "cod",
    label: "COD",
    minWidth: 100,

    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "print",
    label: "Print Statement",
    minWidth: 170,

    format: (value) => value.toFixed(2),
  },
];

function createData(ref, date, period, cod, print) {
  return { ref, date, period, cod, print };
}

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function StatementTable() {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const [{ acno, b_usrId }, dispatch] = useStateValue();
  const [data, setData] = useState(null);
  const [originalRows, setOriginalRows] = useState([]);
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  }, [copied]);

  const [copyText, setCopyText] = useState("");

  useEffect(() => {
    const url = `http://benefitx.blue-ex.com/api/customerportal/statement.php?acno=${acno}&hashkey=KaPdSgVkYp3s6v9y`;
    fetch(url)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log("error", error));
  }, [acno]);

  useEffect(() => {
    if (data !== null) {
      let newRows = [];
      let cp = `Ref.No\tDate\t\tPeriod\t\t\tCOD\n`;
      data.map((d) => {
        let ro = createData(
          d.FPS_CODE,
          dateFormat(d.DATE),
          dateChanger(d.SDATE) + " to " + dateChanger(d.EDATE),
          <CurrencyFormat
            renderText={(value) => <>{value}</>}
            value={d.CODAMOUNT}
            displayType={"text"}
            thousandSeparator={true}
            decimalScale={2}
            prefix={"PKR "}
          />,
          <div key={d.FPS_CODE} className="flex gap-2">
            <form
              method="post"
              action={`http://benefitx.blue-ex.com/fnsum-cusprn.php`}
              target="_blank"
            >
              <input type="hidden" name="FPS_CODE" value={d.FPS_CODE} />
              <input type="hidden" name="usrid" value={b_usrId} />
              <input
                type="hidden"
                name="password"
                value={localStorage.getItem("password")}
              />
              <button type="submit">
                <img src="/icons/acrobat.svg" width="16px" />
              </button>
            </form>{" "}
            <form
              method="post"
              action={`http://benefitx.blue-ex.com/fortnight.php`}
              target="_blank"
            >
              <input type="hidden" name="fps_code" value={d.FPS_CODE} />
              <input type="hidden" name="usrid" value={b_usrId} />
              <input
                type="hidden"
                name="password"
                value={localStorage.getItem("password")}
              />
              <button type="submit">
                <img src="/icons/file.svg" width="16px" />
              </button>
            </form>
          </div>
        );
        newRows.push(ro);
        cp += `${d.FPS_CODE}\t${dateFormat(d.DATE)}\t${dateChanger(
          d.SDATE
        )} to ${dateChanger(d.EDATE)}\tPKR ${d.CODAMOUNT}\n`;
        csvData.push({
          ref: d.FPS_CODE,
          date: dateFormat(d.DATE),
          period: `${dateChanger(d.SDATE)} to ${dateChanger(d.EDATE)}`,
          cod: `PKR ${d.CODAMOUNT}`,
        });
      });
      setOriginalRows(newRows);

      setCopyText(cp);
      setIsLoading(false);
    }
  }, [data]);

  const [rows, setRows] = useState(originalRows);
  useEffect(() => {
    setRows(originalRows);
  }, [originalRows]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [searched, setSearched] = useState("");

  const requestSearch = (searchedVal) => {
    const filteredRows = originalRows.filter((row) => {
      return row.ref.toLowerCase().includes(searchedVal.toLowerCase());
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

  return (
    <Paper elevation={0} className={classes.root}>
      {copied && <Alert severity="success">Table Copied to clipboard</Alert>}
      {originalRows.length !== 0 ? (
        <>
          <div className="flex justify-between items-center mb-[1rem]">
            <SearchBar
              value={searched}
              onChange={(searchVal) => requestSearch(searchVal)}
              onCancelSearch={() => cancelSearch()}
            />
            <div className="space-x-2 hidden sm:block">
              <CopyToClipboard
                text={copyText}
                onCopy={() => setCopied({ copied: true })}
              >
                <button className="csvButton">Copy</button>
              </CopyToClipboard>

              <ExportXls
                csvData={csvData}
                fileName={"statements"}
                headings={headings}
              />
              <CSVLink
                data={csvData}
                headers={headers}
                filename={"statemnetlist.csv"}
              >
                <button className="csvButton">CSV</button>
              </CSVLink>
            </div>
          </div>
          <TableContainer className={classes.container}>
            {isLoading ? (
              <div className="flex justify-center items-center">
                <CircularProgress />
              </div>
            ) : (
              <Table id="statementTable" stickyHeader aria-label="sticky table">
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
            )}
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
        <Alert severity="info">There is no data in Statement List</Alert>
      )}
    </Paper>
  );
}
