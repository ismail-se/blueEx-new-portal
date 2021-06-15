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
import UpdatePickupLocation from "./UpdatePickupLocation";
import Alert from "@material-ui/lab/Alert";

const columns = [
  { id: "name", label: "Name", minWidth: 100 },
  { id: "contact", label: "Contact No", minWidth: 100 },
  {
    id: "email",
    label: "Email",
    minWidth: 100,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "origin",
    label: "Origin",
    minWidth: 100,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "address",
    label: "Address",
    minWidth: 100,
    format: (value) => value.toFixed(2),
  },
  {
    id: "action",
    label: "Action",
    minWidth: 100,
    format: (value) => value.toFixed(2),
  },
];

function createData(name, contact, email, origin, address, action) {
  return { name, contact, email, origin, address, action };
}

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function PickupLocationTable({ acno }) {
  const [originalRows, setOriginalRows] = React.useState(null);
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState(originalRows);
  const [searched, setSearched] = React.useState("");
  //   Modal
  const [show, setShow] = React.useState(false);
  const [modalData, setModalData] = React.useState("");

  const requestSearch = (searchedVal) => {
    const filteredRows = originalRows.filter((row) => {
      return row.name.toLowerCase().includes(searchedVal.toLowerCase());
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

  const reload = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    await fetch(
      `http://benefitx.blue-ex.com/api/customerportal/pickuplocationdata.php?id=all&acno=${acno}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(async () => {
    await reload();
  }, [acno]);

  const deletePickupLocation = async (id) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    await fetch(
      `http://benefitx.blue-ex.com/api/customerportal/deletepickuploc.php?id=${id}&acno=${acno}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "1") reload();
      })
      .catch((error) => console.log("error", error));
  };

  const makeDefauiltPickup = async (id) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    console.log(
      `http://benefitx.blue-ex.com/api/customerportal/defaultpickuploc.php?id=${id}&acno=${acno}`
    );
    await fetch(
      `http://benefitx.blue-ex.com/api/customerportal/defaultpickuploc.php?id=${id}&acno=${acno}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "1") reload();
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    if (data !== null && data.detail !== null) {
      let newRows = [];
      for (let i = 0; i < data.detail.length; i++) {
        let ro = createData(
          <div>
            {data.detail[i].NAME}{" "}
            {data.detail[i].DEFAULT === "Y" && (
              <div className="rounded-full w-[8rem] text-white flex justify-center items-center text-center p-[0.5rem] bg-[#00adef] text-[0.7rem] cursor-pointer min-w-[8rem] max-w-full">
                DEFAULT
              </div>
            )}
          </div>,
          data.detail[i].CONTACT,
          data.detail[i].EMAIL,
          data.detail[i].ORI_CITY,
          data.detail[i].LOCATION,
          <div>
            <span
              className="underline cursor-pointer"
              onClick={() => {
                setModalData(data.detail[i]);
                setShow(true);
              }}
            >
              Edit
            </span>{" "}
            <span
              className="underline cursor-pointer"
              onClick={() => deletePickupLocation(data.detail[i].ID)}
            >
              Delete
            </span>{" "}
            {data.detail[i].DEFAULT === "N" && (
              <span
                className="underline cursor-pointer"
                onClick={() => makeDefauiltPickup(data.detail[i].ID)}
              >
                Make As Default
              </span>
            )}
          </div>
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
    <Paper elevation={0}>
      {originalRows !== null &&
        rows !== null &&
        (originalRows.length !== 0 ? (
          <>
            <div className="flex justify-between items-center mb-[1rem]">
              <SearchBar
                value={searched}
                onChange={(searchVal) => requestSearch(searchVal)}
                onCancelSearch={() => cancelSearch()}
              />
              <div className="space-x-2 hidden sm:block"></div>
            </div>
            <TableContainer>
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
                          key={row.contact}
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

            <UpdatePickupLocation
              show={show}
              onHide={() => setShow(false)}
              newData={modalData}
              reload={reload}
            />
          </>
        ) : (
          <Alert severity="info">
            There is no data in Pickup Location List
          </Alert>
        ))}
    </Paper>
  );
}
