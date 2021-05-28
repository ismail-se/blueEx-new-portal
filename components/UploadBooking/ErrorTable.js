import React, { useEffect, useState, useRef } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

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

const Row = ({ therow, handleInputChange, index, cities }) => {
  const name = useRef();
  const address = useRef();
  const contact = useRef();
  const email = useRef();
  const productName = useRef();
  const productValue = useRef();
  const pieces = useRef();
  const weight = useRef();
  const destination = useRef();
  const customerRef = useRef();
  const comments = useRef();
  const storeId = useRef();

  return (
    <TableRow key={index}>
      <TableCell component="th" scope="row">
        <input
          type="text"
          className="border p-1"
          ref={name}
          value={therow.name}
          onChange={(e) => {
            handleInputChange(e, index, "name");
          }}
        />
      </TableCell>
      <TableCell>
        <input
          type="text"
          className="border p-1"
          ref={address}
          value={therow.address}
          onChange={(e) => {
            handleInputChange(e, index, "address");
          }}
        />
      </TableCell>
      <TableCell>
        <input
          type="text"
          className="border p-1"
          ref={contact}
          value={therow.contact}
          onChange={(e) => {
            handleInputChange(e, index, "contact");
          }}
        />
      </TableCell>
      <TableCell>
        <input
          type="text"
          className="border p-1"
          ref={email}
          value={therow.email}
          onChange={(e) => {
            handleInputChange(e, index, "email");
          }}
        />
      </TableCell>
      <TableCell>
        <input
          type="text"
          className="border p-1"
          ref={productName}
          value={therow.productName}
          onChange={(e) => {
            handleInputChange(e, index, "productName");
          }}
        />
      </TableCell>
      <TableCell>
        <input
          type="text"
          className="border p-1"
          ref={productValue}
          value={therow.productValue}
          onChange={(e) => {
            handleInputChange(e, index, "productValue");
          }}
        />
      </TableCell>
      <TableCell>
        <input
          type="text"
          className="border p-1"
          ref={pieces}
          value={therow.pieces}
          onChange={(e) => {
            handleInputChange(e, index, "pieces");
          }}
        />
      </TableCell>
      <TableCell>
        <input
          type="text"
          className="border p-1"
          ref={weight}
          value={therow.weight}
          onChange={(e) => {
            handleInputChange(e, index, "weight");
          }}
        />
      </TableCell>
      <TableCell>
        <select
          // value={therow.destination}
          ref={destination}
          className="border p-1"
          onChange={(e) => {
            handleInputChange(e, index, "destination");
          }}
        >
          {cities &&
            cities.map((c) => (
              <option key={c.CITY_CODE} value={c.CITY_CODE}>
                {c.CITY_NAME}
              </option>
            ))}
        </select>
      </TableCell>
      <TableCell>
        <input
          type="text"
          className="border p-1"
          value={therow.customerRef}
          ref={customerRef}
          onChange={(e) => {
            handleInputChange(e, index, "customerRef");
          }}
        />
      </TableCell>
      <TableCell>
        <input
          type="text"
          className="border p-1"
          ref={comments}
          value={therow.comments}
          onChange={(e) => {
            handleInputChange(e, index, "comments");
          }}
        />
      </TableCell>
      <TableCell>
        <input
          type="text"
          className="border p-1"
          ref={storeId}
          value={therow.storeId}
          onChange={(e) => {
            handleInputChange(e, index, "storeId");
          }}
        />
      </TableCell>
    </TableRow>
  );
};

export default function ErrorTable({
  data,
  cities,
  acno,
  origCity,
  service,
  fragile,
  addToSuccess,
}) {
  const [rows, setRows] = useState(originalRows);

  const uploadShipment = async (d) => {
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "PHPSESSID=bavlsqfreb30l7ahhib1ls9uf6");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };

    let resp;
    await fetch(
      `http://benefitx.blue-ex.com/api/customerportal/booking_new.php?prod_value=${d.productValue}&salediscount=&con_name=${d.name}&con_add=${d.address}&con_cont=${d.contact}&con_mail=${d.email}&cbc=Y&orig_city=${origCity}&dest_country=PK&dest_city=${d.destination}&insur=N&coment=${d.comments}&prod_detail=${d.productName}&service_code=${service}&ptype=N&pcs=${d.pieces}&wgt=${d.weight}&fragile=${fragile}&cust_ref=${d.customerRef}&shp_name=&shp_add=&shp_cont=&shp_mail=&storeid=${d.storeId}&booking_type=&insur_value=&acno=${acno}&status="Save"&message="success"&cnno="5014619681"`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => (resp = result))
      .catch((error) => console.log("error", error));
    return resp;
  };

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

  const MySwal = withReactContent(Swal);

  useEffect(() => {
    refresh();
  }, [data]);

  useEffect(() => {
    setRows([...originalRows]);
  }, [originalRows]);

  const handleRows = () => {
    setRows([...originalRows]);
  };

  const handleInputChange = (e, index, cname) => {
    originalRows[index][cname] = e.target.value;
    handleRows();
  };

  const onShipment = () => {
    MySwal.fire({
      icon: "warning",
      title: "WARNING:",
      text: `Are you sure you want to Create these Shipments?`,
      showCancelButton: true,
      // confirmButtonText: "Try Again",
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        for (let d of originalRows) {
          const res = await uploadShipment(d);
          if (res.record[0].stat === "save") {
            addToSuccess(d, res);
          } else {
            MySwal.fire({ text: `Error! Pease Check All the Fields` });
          }
        }
      }
    });
  };

  return (
    <TableContainer component={Paper}>
      <button className="btnBlue" onClick={onShipment}>
        Create Error Shipments
      </button>
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
          {rows.map((row, index) => (
            <Row
              cities={cities}
              therow={row}
              index={index}
              key={index}
              handleInputChange={handleInputChange}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
