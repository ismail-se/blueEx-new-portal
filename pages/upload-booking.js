import Head from "next/head";
import Layout from "../components/Layout";
import { parseCookies } from "../helpers/";
import { useStateValue } from "../context/StateProvider";
import { actionTypes } from "../context/reducer";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@material-ui/core";
import { useForm } from "react-hook-form";
import useCities from "../hooks/useCities";
import * as XLSX from "xlsx";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import ShipTable from "../components/UploadBooking/ShipTable";
import ErrorTable from "../components/UploadBooking/ErrorTable";
import UploadSuccessfully from "../components/UploadBooking/UploadSuccessfully";

const UploadBooking = ({ data }) => {
  const [{ acno }, dispatch] = useStateValue();
  const res = JSON.parse(data.user);

  const originCity = useCities("PK");

  const [service, setService] = useState("BE");
  const [fragile, setFragile] = useState("N");
  const [origCity, setOrigCity] = useState("KHI");

  const [shipTable, setShipTable] = useState(null);
  const [errorTable, setErrorTable] = useState(null);
  const [uploadTable, setUploadTable] = useState(null);

  const [disabled, setDisabled] = useState(false);

  const [key, setKey] = useState(1);

  const handleKey = (k) => {
    setKey(k);
  };

  useEffect(() => {
    dispatch({
      type: actionTypes.SET_USER,
      acno: res.acno,
      b_usrId: res.b_usrId,
      name: res.name,
      acc_type: res.type,
    });
  }, []);

  const MySwal = withReactContent(Swal);

  // prevent submitting invalid or empty emails
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // handle form submit
  const onSubmit = (data) => {
    const file = data.file[0];
    var fileReader = new FileReader();
    fileReader.onload = function (event) {
      var data = event.target.result;
      var workbook = XLSX.read(data, {
        type: "binary",
      });
      // workbook.SheetNames.forEach((sheet) => {
      let rowObject = XLSX.utils.sheet_to_row_object_array(
        workbook.Sheets["Sheet1"]
      );
      // let jsonObject = JSON.stringify(rowObject);
      // console.log(rowObject);
      setShipTable(rowObject);

      setDisabled(false);
      handleKey(1);
      // }
      // );
    };
    fileReader.readAsBinaryString(file);
  };

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
      `http://benefitx.blue-ex.com/api/customerportal/booking_new.php?prod_value=${d["COD"]}&salediscount=&con_name=${d["Consignee Name"]}&con_add=${d["Consignee Address"]}&con_cont=${d["Consignee Contact No"]}&con_mail=${d["Consignee Email"]}&cbc=Y&orig_city=${origCity}&dest_country=PK&dest_city=${d["Destination"]}&insur=N&coment=${d["Customer Comment"]}&prod_detail=${d["Product Name"]}&service_code=${service}&ptype=N&pcs=${d["Pieces"]}&wgt=${d["Weight"]}&fragile=${fragile}&cust_ref=${d["Customer Reference"]}&shp_name=&shp_add=&shp_cont=&shp_mail=&storeid=${d["Store Id"]}&booking_type=&insur_value=&acno=${res.acno}&status="Save"&message="success"&cnno="5014619681"`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => (resp = result))
      .catch((error) => console.log("error", error));
    return resp;
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
        let errorT = [];
        let uploadT = [];

        for (let d of shipTable) {
          const res = await uploadShipment(d);
          if (res.record[0].stat === "save") {
            uploadT.push({
              cnno: res.record[0].cnno,
              customer: d["Consignee Name"],
              product: d["Product Name"],
              cod: d["COD"],
              from: origCity,
              to: d["Destination"],
              customerRef: d["Customer Reference"],
              remarks: d["Customer Comment"],
            });
          } else {
            errorT.push(d);
          }
        }

        setDisabled(true);
        handleKey(3);

        setUploadTable(uploadT);
        setErrorTable(errorT);
      }
    });
  };

  const addToSuccess = (newRow, res) => {
    let uploadT = [];
    let errorT = [];
    uploadT.push({
      cnno: res.record[0].cnno,
      customer: newRow.name,
      product: newRow.productName,
      cod: newRow.productValue,
      from: origCity,
      to: newRow.destination,
      customerRef: newRow.customerRef,
      remarks: newRow.comments,
    });
    setUploadTable([...uploadTable, ...uploadT]);
    setErrorTable([]);
    handleKey(3);
  };

  return (
    <div>
      <Head>
        <title>
          blueEX Booking App - The one stop shop to access all blueEX services
        </title>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>

      <Layout>
        <h1 className="heading mb-4">Upload Booking</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Card variant="outlined">
            <CardContent className="border-b p-4 flex items-center justify-between ">
              <h2 className="h2">UPLOAD SHIPMENTS</h2>
            </CardContent>
            <CardContent className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <div className="row">
                  <label className="label" htmlFor="file">
                    Booking Upload
                  </label>
                  <div className="flex-1 w-full">
                    <input
                      type="file"
                      accept=".xls,.xlsx"
                      className={`shipmentInput  ${
                        errors.file ? "validate" : "nonValid"
                      } `}
                      {...register("file", { required: true })}
                      id="file"
                    />
                    {errors.file && (
                      <div className="text-red-600 text-xs">
                        The Upload File is required.
                      </div>
                    )}
                  </div>
                </div>
                <div className="row">
                  <label className="label" htmlFor="sevice">
                    Service Code
                  </label>
                  <select
                    id="service"
                    className="shipmentInput nonValid"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                  >
                    <option value="BE">BLUE EDGE</option>
                  </select>
                </div>
                <div className="row">
                  <label className="label" htmlFor="fragile">
                    Fragile
                  </label>
                  <select
                    id="fragile"
                    value={fragile}
                    onChange={(e) => setFragile(e.target.value)}
                    className="shipmentInput nonValid"
                  >
                    <option value="N">No</option>
                    <option value="Y">Yes</option>
                  </select>
                </div>
                <div className="row">
                  <label className="label" htmlFor="originCity">
                    Origin City
                  </label>
                  <select
                    className="shipmentInput nonValid"
                    value={origCity}
                    onChange={(e) => setOrigCity(e.target.value)}
                    name="originCity"
                    id="originCity"
                  >
                    {originCity &&
                      originCity.map((c) => (
                        <option key={c.CITY_CODE} value={c.CITY_CODE}>
                          {c.CITY_NAME}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="row">
                  <label className="label" htmlFor="pickup">
                    Pickup Location
                  </label>
                  <select
                    className="shipmentInput nonValid"
                    {...register("pickup")}
                    name="pickup"
                    id="pickup"
                  >
                    <option value="">Default Pickup Location</option>
                  </select>
                </div>
                <div className="row flex-row-reverse mt-[-2rem]">
                  <div className="bg-[#0047ba] text-white rounded-sm text-xs p-2 ">
                    Add Pickup Location
                  </div>
                </div>
                <div className="row">
                  <label className="label"></label>
                  <div>
                    <button type="submit" className="btnBlueBg">
                      Upload Shipment
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <p className="font-semibold">Uploading Format Information:</p>
                <ul className="list-disc">
                  <div className="ml-6 mt-2 text-sm">
                    <li>Upload the 'xls' Format File !</li>
                    <li>
                      Download Your Uploading File Format Here! <br />
                      <a
                        className="text-[#0047ba] text-xs"
                        href="/files/upload.xls"
                      >
                        Click Here to Download!
                      </a>{" "}
                    </li>
                  </div>
                </ul>
              </div>
            </CardContent>
          </Card>
        </form>
        {/* Upload Shipment - Upload Errors - Upload Successfully */}
        <Card variant="outlined" className="mt-[2rem]">
          <CardContent className="border-b p-4 ">
            <Tabs
              activeKey={key}
              onSelect={handleKey}
              id="uncontrolled-tab-example"
            >
              <Tab
                eventKey={1}
                title={
                  `UPLOAD SHIPMENT LIST ` + (shipTable ? shipTable.length : "")
                }
                disabled={disabled}
              >
                {shipTable !== [] && shipTable !== null && (
                  <div className="mt-4">
                    <button onClick={onShipment} className="btnBlue">
                      Create Shipments
                    </button>
                    <ShipTable data={shipTable} />
                  </div>
                )}
              </Tab>
              <Tab
                eventKey={2}
                title={`UPLOAD ERRORS ` + (errorTable ? errorTable.length : "")}
              >
                {errorTable !== [] && errorTable !== null && (
                  <div className="mt-4">
                    <ErrorTable
                      data={errorTable}
                      cities={originCity}
                      acno={acno}
                      origCity={origCity}
                      fragile={fragile}
                      service={service}
                      addToSuccess={addToSuccess}
                    />
                  </div>
                )}
              </Tab>
              <Tab
                eventKey={3}
                title={
                  `UPLOAD SUCCESSFULLY ` +
                  (uploadTable ? uploadTable.length : "")
                }
              >
                {uploadTable !== [] && uploadTable !== null && (
                  <div className="mt-4">
                    <UploadSuccessfully data={uploadTable} />
                  </div>
                )}
              </Tab>
            </Tabs>
          </CardContent>
        </Card>
      </Layout>
    </div>
  );
};

export default UploadBooking;

UploadBooking.getInitialProps = async ({ req, res }) => {
  const data = parseCookies(req);

  if (res) {
    if (
      (Object.keys(data).length === 0 && data.constructor === Object) ||
      Object(data).user === "undefined"
    ) {
      res.writeHead(301, { Location: "/" });
      res.end();
    }
  }

  return {
    data: data && data,
  };
};
