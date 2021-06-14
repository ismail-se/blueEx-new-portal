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
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PrintIcon from "@material-ui/icons/Print";
import AdjustIcon from "@material-ui/icons/Adjust";
import TrackDetailModal from "./Modals/TrackDetailModal/TrackDetailModal";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useStateValue } from "../context/StateProvider";
import CancelShipment from "../functions/cancelShipment";
import CreatePickup from "../functions/createPickup";
import Dropdown from "react-bootstrap/Dropdown";
import RoomIcon from "@material-ui/icons/Room";
import CancelIcon from "@material-ui/icons/Cancel";

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
  { label: "Ship Date", key: "shipDate" },
  { label: "Arrival Date", key: "arrDate" },
  { label: "Customer", key: "customer" },
  { label: "Address", key: "address" },
  { label: "Contact", key: "contact" },
  { label: "Customer Ref", key: "custRef" },
  { label: "Product", key: "product" },
  { label: "COD", key: "cod" },
  { label: "Shipper Name", key: "shpName" },
  { label: "Shipper Address", key: "shpAddress" },
  { label: "Shipper Contact", key: "shpContact" },
  { label: "Booking WGT", key: "bookingWgt" },
  { label: "Arrival WGT", key: "ArrivalWgt" },
  { label: "Pieces", key: "pieces" },
  { label: "From To", key: "fromTo" },
  { label: "Comment", key: "comment" },
  { label: "Status", key: "status" },
  { label: "FPS Code", key: "fps" },
  { label: "CHQNO", key: "chqno" },
];

const headings = [
  [
    "CN#",
    "Ship Date",
    "Arrival Date",
    "Customer",
    "Address",
    "Contact",
    "Customer Ref",
    "Product",
    "COD",
    "Shipper Name",
    "Shipper Address",
    "Shipper Contact",
    "Booking WGT",
    "Arrival WGT",
    "Pieces",
    "From To",
    "Comment",
    "Status",
    "FPS Code",
    "CHQNO",
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
  ship,
  arrival,
  customer,
  address,
  contact,
  customerRef,
  product,
  cod,
  shipperName,
  shipperAddress,
  shipperContact,
  weight,
  aweight,
  pieces,
  fromTo,
  comment,
  status,
  fps,
  chqno,
  act
) {
  return {
    cn,
    ship,
    arrival,
    customer,
    address,
    contact,
    customerRef,
    product,
    cod,
    shipperName,
    shipperAddress,
    shipperContact,
    weight,
    aweight,
    pieces,
    fromTo,
    comment,
    status,
    fps,
    chqno,
    act,
  };
}

const headCells = [
  { id: "cn", numeric: false, disablePadding: false, label: "CN#" },
  { id: "ship", numeric: true, disablePadding: false, label: "Ship Date" },
  {
    id: "arrival",
    numeric: true,
    disablePadding: false,
    label: "Arrival Date",
  },
  { id: "customer", numeric: true, disablePadding: false, label: "Customer" },
  { id: "address", numeric: true, disablePadding: false, label: "Address" },
  { id: "contact", numeric: true, disablePadding: false, label: "Contact" },
  {
    id: "customerRef",
    numeric: true,
    disablePadding: false,
    label: "Customer Ref",
  },
  { id: "product", numeric: true, disablePadding: false, label: "Product" },
  { id: "cod", numeric: true, disablePadding: false, label: "COD" },
  {
    id: "shipperName",
    numeric: true,
    disablePadding: false,
    label: "Shipper Name",
  },
  {
    id: "shipperAddress",
    numeric: true,
    disablePadding: false,
    label: "Shipper Address",
  },
  {
    id: "shipperContact",
    numeric: true,
    disablePadding: false,
    label: "Shipper Contact",
  },
  {
    id: "weight",
    numeric: true,
    disablePadding: false,
    label: "Booking Weight",
  },
  {
    id: "aweight",
    numeric: true,
    disablePadding: false,
    label: "Arrival Weight",
  },
  { id: "pieces", numeric: true, disablePadding: false, label: "Pieces" },
  { id: "fromTo", numeric: true, disablePadding: false, label: "From To" },
  { id: "comment", numeric: true, disablePadding: false, label: "Comment" },
  { id: "status", numeric: true, disablePadding: false, label: "Status" },
  { id: "fps", numeric: true, disablePadding: false, label: "FPS Code" },
  { id: "chqno", numeric: true, disablePadding: false, label: "CHQNO" },
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
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all desserts" }}
          />
        </TableCell>
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

let bookedCn = [];

export default function DeliveriesTable({ data, reload }) {
  const [{ acno, b_usrId }, dispatch] = useStateValue();
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [originalRows, setOriginalRows] = useState([]);

  const [modalShow, setModalShow] = React.useState(false);
  const [modalId, setModalId] = React.useState();

  const printShipments = () => {
    selectedCodes();
    MySwal.fire({
      title: "WARNING:",
      text: "Are you sure you want to Print this Shipments?",
      icon: "warning",
      showCancelButton: true,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        document.querySelector("#deliveryPrint").click();
      }
      if (result.isCanceled) {
      }
    });
  };

  const check = () => {
    let warn = false;
    for (let booked of bookedCn) {
      for (let sel of selected) {
        if (sel === booked) {
          warn = true;
          return warn;
        }
      }
    }
    return warn;
  };

  const cancelShip = () => {
    if (check()) {
      MySwal.fire({
        text: "Please select only booked shipments",
      }).then(async (result) => {
        if (result.isConfirmed) {
        }
      });
    } else {
      MySwal.fire({
        title: "WARNING:",
        text: "Are you sure you want to Cancel this Shipment?",
        icon: "warning",
        showCancelButton: true,
      }).then(async (result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          const res = await CancelShipment(b_usrId, acno, selected);
          if (res.detail[0].status === "1") {
            MySwal.fire({
              text: "Successfully! Your Shipment has been canceled",
            });
            reload();
          } else {
            MySwal.fire({
              text: "Error! Your Shipment has not been canceled",
            });
          }
        }
        if (result.isCanceled) {
        }
      });
    }
  };

  const cancelShipOne = (cn) => {
    MySwal.fire({
      title: "WARNING:",
      text: "Are you sure you want to Cancel this Shipment?",
      icon: "warning",
      showCancelButton: true,
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        let cnar = [];
        cnar.push(cn);
        const res = await CancelShipment(b_usrId, acno, cnar);
        if (res.detail[0].status === "1") {
          MySwal.fire({
            text: "Successfully! Your Shipment has been canceled",
          });
          reload();
        } else {
          MySwal.fire({
            text: "Error! Your Shipment has not been canceled",
          });
        }
      }
      if (result.isCanceled) {
      }
    });
  };

  const createPick = () => {
    if (check()) {
      MySwal.fire({
        text: "Please select only booked shipments",
      }).then(async (result) => {
        if (result.isConfirmed) {
        }
      });
    } else {
      MySwal.fire({
        title: "WARNING:",
        text: "Are you sure you want to Create Pickup?",
        icon: "warning",
        showCancelButton: true,
      }).then(async (result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          const res = await CreatePickup(b_usrId, acno, selected);
          if (res.success === "1") {
            MySwal.fire({
              text: "New Pickup Sheet is Successfully Created",
            });
            reload();
          } else {
            MySwal.fire({
              text: "Error! Pickup sheet not created",
            });
          }
        }
        if (result.isCanceled) {
        }
      });
    }
  };

  const createPickOne = (cn) => {
    MySwal.fire({
      title: "WARNING:",
      text: "Are you sure you want to Create Pickup?",
      icon: "warning",
      showCancelButton: true,
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        let cnar = [];
        cnar.push(cn);
        const res = await CreatePickup(b_usrId, acno, cnar);
        if (res.success === "1") {
          MySwal.fire({
            text: "New Pickup Sheet is Successfully Created",
          });
          reload();
        } else {
          MySwal.fire({
            text: "Error! Pickup sheet not created",
          });
        }
      }
      if (result.isCanceled) {
      }
    });
  };

  useEffect(() => {
    if (data !== []) {
      setOriginalRows([]);

      csvData = [];
      let newRows = [];
      let cp = `CN#\t\tShip Date\t\tArival Date\t\t\tCustomer\t\tAddress\t\tContact\t\tCustomer Ref\t\tProduct\t\tCOD\t\tShipper Name\t\tShipper Address\t\tShipper Contact\t\tBooking WGT\t\tArrival WGT\t\tPieces\t\tFrom To\t\tComment\t\tStatus\t\tFPS Code\t\tCHQNO\n`;
      for (let i = 0; i < data.length; i++) {
        if (data[i].STAT_MSG.toLowerCase() !== "booked") {
          bookedCn.push(data[i].CNNO);
        }
        let ro = createData(
          data[i].CNNO,
          data[i].CN_DATE,
          data[i].ARRIVAL_DATE,
          data[i].CON_NAME,
          data[i].CON_ADD,
          data[i].CON_CONT,
          data[i].CUST_REF,
          data[i].PROD_DETAIL,
          data[i].PROD_VALUE,
          data[i].SHP_NAME,
          data[i].SHP_ADD,
          data[i].SHP_CONT,
          `${data[i].WGT} Kg`,
          `${data[i].AWGT} Kg`,
          data[i].PCS,
          `${data[i].ORIG_CITY} - ${data[i].DEST_CITY}`,
          data[i].COMENT === "" ? "-" : data[i].COMENT,
          <div
            className={`rounded-full w-[8rem] text-white flex justify-center items-center text-center p-[0.5rem] text-[0.7rem] cursor-pointer min-w-[8rem] max-w-full ${
              data[i].STAT_MSG.toLowerCase() === "booked" ? "bg-[#00adef]" : ""
            }  ${
              data[i].STAT_MSG.toLowerCase() === "delivered"
                ? "bg-[#c6d53f]"
                : ""
            } ${
              data[i].STAT_MSG.toLowerCase() === "in-transit"
                ? "bg-[#ffc212]"
                : ""
            } ${
              data[i].STAT_MSG.toLowerCase() === "arrival" ? "bg-[#7e5e7b]" : ""
            } ${
              data[i].STAT_MSG.toLowerCase() === "ready for pickup"
                ? "bg-[#03a596]"
                : ""
            }
              `}
          >
            {data[i].STAT_MSG.toUpperCase()}
          </div>,
          data[i].FPS_CODE === "" ? "-" : data[i].FPS_CODE,
          data[i].CHQNO === "" ? "-" : data[i].FPS_CODE,
          <div className="flex flex-col ">
            {data[i].STAT_MSG.toLowerCase() === "booked" && (
              <IconButton>
                <Dropdown>
                  <Dropdown.Toggle
                    as={CustomToggle}
                    id="dropdown-custom-components"
                  >
                    <MoreHorizIcon />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={() => createPickOne(data[i].CNNO)}
                      eventKey="1"
                    >
                      <RoomIcon /> Create a Pickup
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => cancelShipOne(data[i].CNNO)}
                      eventKey="2"
                    >
                      <CancelIcon /> Cancel
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </IconButton>
            )}
            <IconButton
              onClick={() => {
                setModalId(data[i].CNNO);
                setModalShow(true);
              }}
            >
              <AdjustIcon />
            </IconButton>
            <IconButton>
              <a
                href={`http://benefit.blue-ex.com/customerportal/inc/cnprncust.php?${data[i].CNNO}`}
                target="_blank"
              >
                <PrintIcon />
              </a>
            </IconButton>
          </div>
        );
        newRows.push(ro);

        cp += `${data[i].CNNO}\t${data[i].CN_DATE}\t${data[i].ARRIVAL_DATE}\t${
          data[i].CON_NAME
        }\t${data[i].CON_ADD}\t${data[i].CON_CONT}\t${data[i].CUST_REF}\t${
          data[i].PROD_DETAIL
        }\t${data[i].PROD_VALUE}\t${data[i].SHP_NAME}\t${data[i].SHP_ADD}\t${
          data[i].SHP_CONT
        }\t${data[i].WGT} Kg\t${data[i].AWGT} Kg\t${data[i].PCS}\t${
          data[i].ORIG_CITY
        } - ${data[i].DEST_CITY}\t${
          data[i].COMENT === "" ? "-" : data[i].COMENT
        }\t${data[i].STAT_MSG.toUpperCase()}\t${
          data[i].FPS_CODE === "" ? "-" : data[i].FPS_CODE
        }\t${data[i].CHQNO === "" ? "-" : data[i].CHQNO}\n`;

        csvData.push({
          cn: data[i].CNNO,
          shipDate: data[i].CN_DATE,
          arrDate: data[i].ARRIVAL_DATE,
          customer: data[i].CON_NAME,
          address: data[i].CON_ADD,
          contact: data[i].CON_CONT,
          custRef: data[i].CUST_REF,
          product: data[i].PROD_DETAIL,
          cod: data[i].PROD_VALUE,
          shpName: data[i].SHP_NAME,
          shpAddress: data[i].SHP_ADD,
          shpContact: data[i].SHP_CONT,
          bookingWgt: `${data[i].WGT} Kg`,
          ArrivalWgt: `${data[i].AWGT} Kg`,
          pieces: data[i].PCS,
          fromTo: `${data[i].ORIG_CITY} - ${data[i].DEST_CITY}`,
          comment: data[i].COMENT,
          status: data[i].STAT_MSG.toUpperCase(),
          fps: data[i].FPS_CODE,
          chqno: data[i].CHQNO,
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
        {selected.length > 0 && (
          <div className="flex gap-2 mb-4 flex-col sm:flex-row">
            <button className="btnBlue" onClick={createPick}>
              CREATE A PICKUP
            </button>
            <button className="btnBlue" onClick={cancelShip}>
              CANCEL SHIPMENT
            </button>
            <button className="btnBlue" onClick={printShipments}>
              PRINT SHIPMENTS
            </button>
          </div>
        )}

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
              fileName={"deliveries"}
              headings={headings}
            />
            <CSVLink
              data={csvData}
              headers={headers}
              filename={"deliveries.csv"}
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
              printShipments={printShipments}
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
                      <TableCell padding="checkbox">
                        <Checkbox
                          onClick={(event) => handleClick(event, row.cn)}
                          checked={isItemSelected}
                          inputProps={{ "aria-labelledby": labelId }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.cn}
                      </TableCell>
                      <TableCell align="right">{row.ship}</TableCell>
                      <TableCell align="right">{row.arrival}</TableCell>
                      <TableCell align="right">{row.customer}</TableCell>
                      <TableCell align="right">{row.address}</TableCell>
                      <TableCell align="right">{row.contact}</TableCell>
                      <TableCell align="right">{row.customerRef}</TableCell>
                      <TableCell align="right">{row.product}</TableCell>
                      <TableCell align="right">{row.cod}</TableCell>
                      <TableCell align="right">{row.shipperName}</TableCell>
                      <TableCell align="right">{row.shipperAddress}</TableCell>
                      <TableCell align="right">{row.shipperContact}</TableCell>
                      <TableCell align="right">{row.weight}</TableCell>
                      <TableCell align="right">{row.aweight}</TableCell>
                      <TableCell align="right">{row.pieces}</TableCell>
                      <TableCell align="right">{row.fromTo}</TableCell>
                      <TableCell align="right">{row.comment}</TableCell>
                      <TableCell align="right">{row.status}</TableCell>
                      <TableCell align="right">{row.fps}</TableCell>
                      <TableCell align="right">{row.chqno}</TableCell>
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
      </Paper>
      <TrackDetailModal
        cn={modalId}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      {/* Print */}
      <form
        method="post"
        action={`http://benefitx.blue-ex.com/customerportal/inc/cnpdfcs.php`}
        target="_blank"
      >
        <input type="hidden" name="usrid" value={b_usrId} />
        <input
          type="hidden"
          name="password"
          value={localStorage.getItem("password")}
        />
        <input type="hidden" name="codes" value={codes} />
        <button type="submit" id="deliveryPrint"></button>
      </form>
    </div>
  );
}
