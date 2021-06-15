import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import { CSVLink } from "react-csv";
import CurrencyFormat from "react-currency-format";
import { ExportXls } from "./ExportXls";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SearchBar from "material-ui-search-bar";
import Alert from "@material-ui/lab/Alert";
import { CircularProgress } from "@material-ui/core";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useStateValue } from "../context/StateProvider";
import CancelShipment from "../functions/cancelShipment";
import CreatePickup from "../functions/createPickup";
import EmailIcon from "@material-ui/icons/Email";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </a>
));

const MySwal = withReactContent(Swal);

const headers = [
  { label: "CN#", key: "cn" },
  { label: "Return Date", key: "retDate" },
  { label: "Customer", key: "customer" },
  { label: "Address", key: "address" },
  { label: "Contact", key: "contact" },
  { label: "COD", key: "cod" },
  { label: "Customer Ref", key: "custRef" },
  { label: "From To", key: "fromTo" },
  { label: "Status", key: "status" },
];

const headings = [
  [
    "CN#",
    "Return Date",
    "Customer",
    "Address",
    "Contact",
    "COD",
    "Customer Ref",
    "From To",
    "Status",
  ],
];

let csvData = [];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function createData(
  cn,
  returnDate,
  customer,
  address,
  contact,
  cod,
  cstRef,
  fromTo,
  status,
  act
) {
  return {
    cn,
    returnDate,
    customer,
    address,
    contact,
    cod,
    cstRef,
    fromTo,
    status,
    act,
  };
}

const headCells = [
  { id: "cn", numeric: false, disablePadding: false, label: "CN#" },
  {
    id: "returnDate",
    numeric: true,
    disablePadding: false,
    label: "Return Date",
  },

  { id: "customer", numeric: true, disablePadding: false, label: "Customer" },
  { id: "address", numeric: true, disablePadding: false, label: "Address" },
  { id: "contact", numeric: true, disablePadding: false, label: "Contact" },
  { id: "cod", numeric: true, disablePadding: false, label: "COD" },
  {
    id: "cstRef",
    numeric: true,
    disablePadding: false,
    label: "Customer Ref",
  },
  { id: "fromTo", numeric: true, disablePadding: false, label: "From To" },
  { id: "status", numeric: true, disablePadding: false, label: "Status" },
  { id: "act", numeric: true, disablePadding: false, label: "Actions" },
];

function EnhancedTableHead(props) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: "1 1 100%",
  },
}));

// const EnhancedTableToolbar = (props) => {
//   const classes = useToolbarStyles();
//   const { numSelected, printShipments } = props;

//   return (
//     <>
//       {numSelected > 0 && (
//         <div className="flex gap-2">
//           <button className="btnBlue">CREATE A PICKUP</button>
//           <button className="btnBlue">CANCEL SHIPMENT</button>
//           <button className="btnBlue" onClick={printShipments}>
//             PRINT SHIPMENTS
//           </button>
//         </div>
//       )}
//     </>
//   );
// };

// EnhancedTableToolbar.propTypes = {
//   numSelected: PropTypes.number.isRequired,
// };

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}));

export default function ReturnSummaryTable({ data, reload }) {
  const [{ acno, b_usrId }, dispatch] = useStateValue();
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [originalRows, setOriginalRows] = useState([]);

  useEffect(() => {
    if (data !== [] && data !== null) {
      setOriginalRows([]);
      csvData = [];
      let newRows = [];
      let cp = `CN#\t\tReturn Date\t\tCustomer\t\tAddress\t\tContact\t\tCOD\t\tCST REF\t\tFrom To\t\tStatus\n`;
      for (let d of data) {
        let ro = createData(
          d.CNNO,
          d.RET_DATE,
          d.CON_NAME,
          d.CON_ADD,
          d.CON_CEL,
          d.COD_AMT,
          d.CUST_REF,
          `${d.ORIG_CITY} - ${d.DEST_CITY}`,
          d.STAT_MSG,
          <EmailIcon />
        );
        newRows.push(ro);

        cp += `${d.CNNO}\t${d.RET_DATE}\t${d.CON_NAME}\t${d.CON_ADD}\t${d.CON_CEL}\t${d.COD_AMT}\t${d.CUST_REF}\t${d.PROD_DETAIL}\t${d.ORIG_CITY} - ${d.DEST_CITY}\t${d.STAT_MSG}\t\n`;

        csvData.push({
          cn: d.CNNO,
          retDate: d.RET_DATE,
          customer: d.CON_NAME,
          address: d.CON_ADD,
          contact: d.CON_CEL,
          cod: d.COD_AMT,
          custRef: d.CUST_REF,
          fromTo: `${d.ORIG_CITY} - ${d.DEST_CITY}`,
          status: d.STAT_MSG,
        });
      }
      setOriginalRows(newRows);
      setCopyText(cp);
    }
  }, [data]);

  useEffect(() => {
    setRows(originalRows);
  }, [originalRows]);

  const [searched, setSearched] = useState("");

  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  }, [copied]);
  const [copyText, setCopyText] = useState("");

  const [rows, setRows] = useState(originalRows);

  const requestSearch = (searchedVal) => {
    const filteredRows = originalRows.filter((row) => {
      return row.cn.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };
  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.cn);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const [codes, setCodes] = React.useState("");

  const selectedCodes = () => {
    var CNOBJ = new Array();
    var str = String(selected);
    var str_array = str.split(",");
    for (var i = 0; i < str_array.length; i++) {
      var code = str_array[i].replace(/^\s*/, "").replace(/\s*$/, "");
      var code_array = code.split("_");
      CNOBJ[i] = code_array[0];
    }
    setCodes(CNOBJ.join());
  };

  React.useEffect(() => {
    selectedCodes();
  }, [selected]);

  const handleClick = (event, cn) => {
    const selectedIndex = selected.indexOf(cn);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, cn);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (cn) => selected.indexOf(cn) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper elevation={0} className={classes.paper}>
        {copied && <Alert severity="success">Table Copied to clipboard</Alert>}
        {/* <EnhancedTableToolbar numSelected={selected.length} /> */}

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
                  fileName={"returnSummary"}
                  headings={headings}
                />
                <CSVLink
                  data={csvData}
                  headers={headers}
                  filename={"returnSummary.csv"}
                >
                  <button className="csvButton">CSV</button>
                </CSVLink>
              </div>
            </div>
            <TableContainer>
              <Table
                className={classes.table}
                aria-labelledby="tableTitle"
                size={"medium"}
                aria-label="enhanced table"
              >
                <EnhancedTableHead
                  classes={classes}
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={handleSelectAllClick}
                  onRequestSort={handleRequestSort}
                  rowCount={rows.length}
                />
                <TableBody>
                  {stableSort(rows, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      const isItemSelected = isSelected(row.cn);
                      const labelId = `enhanced-table-checkbox-${index}`;

                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={row.cn}
                          selected={isItemSelected}
                        >
                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="none"
                          >
                            {row.cn}
                          </TableCell>
                          <TableCell align="right">{row.returnDate}</TableCell>
                          <TableCell align="right">{row.customer}</TableCell>
                          <TableCell align="right">{row.address}</TableCell>
                          <TableCell align="right">{row.contact}</TableCell>
                          <TableCell align="right">{row.cod}</TableCell>
                          <TableCell align="right">{row.cstRef}</TableCell>
                          <TableCell align="right">{row.fromTo}</TableCell>
                          <TableCell align="right">{row.status}</TableCell>
                          <TableCell align="right">{row.act}</TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </>
        ) : (
          <Alert severity="info">There is no data in Return Summary</Alert>
        )}
      </Paper>
    </div>
  );
}
