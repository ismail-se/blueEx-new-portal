import Head from "next/head";
import Layout from "../components/Layout";
import { useStateValue } from "../context/StateProvider";
import { actionTypes } from "../context/reducer";
import { parseCookies } from "../helpers/";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Switch,
} from "@material-ui/core";
import useCountries from "../hooks/useCountries";
import useCities from "../hooks/useCities";
import CurrencyFormat from "react-currency-format";
import createShipment from "../functions/createShipment";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import AddPickupLocation from "../components/Modals/AddPickupLocation";

const CreateShipment = ({ data }) => {
  const [{ acno }, dispatch] = useStateValue();
  const res = JSON.parse(data.user);


  const MySwal = withReactContent(Swal);

  const [selectedCountry, setSelectedCountry] = useState("PK");
  const [selectedCity, setSelectedCity] = useState("KHI");
  const country = useCountries();
  const city = useCities(selectedCountry);
  const originCity = useCities("PK");
  const [prodValue, setProdValue] = useState("0");
  const [saleDiscount, setSaleDiscount] = useState("");
  const [cbc, setCbc] = useState("Y");
  const [origCity, setOrigCity] = useState("KHI");
  const [destCountry, setDestCountry] = useState("");
  const [destCity, setDestCity] = useState("KHI");
  const [insur, setInsur] = useState("N");
  const [coment, setComent] = useState("");
  const [serviceCode, setServiceCode] = useState("");
  const [ptype, setPtype] = useState("N");
  const [fragile, setFragile] = useState("N");
  const [shpName, setShpName] = useState("");
  const [shpAdd, setShpAdd] = useState("");
  const [shpCont, setShpCont] = useState("");
  const [shpMail, setShpMail] = useState("");
  const [storeId, setStoreId] = useState("");
  const [bookingType, setBookingType] = useState("");
  const [insurValue, setInsurValue] = useState("");
  const [inputColor, setInputColor] = useState("nonValid");

  const [status, setStatus] = useState("Save");
  const [message, setMessage] = useState("success");
  const [cnno, setCnno] = useState("5014619681");

  // Modal
  const [show, setShow] = useState(false);

  // prevent submitting invalid or empty emails
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // handle form submit
  const onSubmit = async (data) => {
    console.log("Orig City ", origCity);
    console.log("Dest City ", destCity);
    const res = await createShipment(
      prodValue,
      saleDiscount,
      data.conName,
      data.conAdd,
      data.conCont,
      data.conMail,
      cbc,
      origCity,
      destCountry,
      destCity,
      insur,
      coment,
      data.prodDetail,
      serviceCode,
      ptype,
      data.pcs,
      data.wgt,
      fragile,
      data.custRef,
      shpName,
      shpAdd,
      shpCont,
      shpMail,
      storeId,
      bookingType,
      insurValue,
      acno,
      status,
      message,
      cnno
    );
    console.log(res);
    if (res.stat === "save") {
      MySwal.fire({
        icon: "success",
        title: "SUCCESS:",
        text: `Your CN ${res.cnno} has been created successfully.`,
        showCancelButton: true,
        confirmButtonText: "Print CN",
        cancelButtonText: "Ok Create Another",
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
        }
        if (result.isCanceled) {
        }
      });
    } else {
      MySwal.fire({
        icon: "error",
        title: "ERROR:",
        text: `Please try Again`,
        confirmButtonText: "Try Again",
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
        }
      });
    }
  };

  const [cbcChecked, setCbcChecked] = useState(false);
  const toggleCbc = () => {
    if (cbcChecked) {
      setCbc("N");
    } else {
      setCbc("Y");
    }
    setCbcChecked((prev) => !prev);
  };

  const [fragileChecked, setFragileChecked] = useState(false);
  const toggleFragile = () => {
    if (fragileChecked) {
      setFragileChecked(false);
      setFragile("N");
    } else {
      setFragileChecked(true);
      setFragile("Y");
    }
  };

  const [insurChecked, setInsurChecked] = useState(false);
  const toggleInsur = () => {
    if (insurChecked) {
      setInsurChecked(false);
      setInsur("N");
    } else {
      setInsurChecked(true);
      setInsur("Y");
    }
  };

  const handlePtype = (e) => {
    setPtype(e.target.value);
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

  return (
    <div>
      <Head>
        <title>
          blueEX Booking App - The one stop shop to access all blueEX services
        </title>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Layout>
          <h1 className="heading mb-4">Create Shipment</h1>
          <div className="flex flex-col xl:flex-row gap-8">
            <div className="flex-1 ">
              <Card variant="outlined">
                <CardContent className="border-b p-4 flex items-center justify-between ">
                  <h2 className="h2">Customer Details</h2>
                </CardContent>
                <CardContent className="">
                  <div className="row">
                    <label className="label" htmlFor="fullName">
                      Full Name <span className="text-red-600">*</span>
                    </label>
                    <div className="flex-1 w-full">
                      <input
                        className={`shipmentInput  ${
                          errors.conName ? "validate" : "nonValid"
                        } `}
                        {...register("conName", { required: true })}
                        type="text"
                        id="fullName"
                        placeholder="Enter your Full Name"
                      />
                      {errors.conName && (
                        <div className="text-red-600 text-xs">
                          This field is required.
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <label className="label" htmlFor="address">
                      Address <span className="text-red-600">*</span>
                    </label>
                    <div className="flex-1 w-full">
                      <input
                        className={`shipmentInput ${
                          errors.conAdd ? "validate" : "nonValid"
                        } `}
                        {...register("conAdd", { required: true })}
                        type="text"
                        id="address"
                        placeholder="Enter your Address"
                      />
                      {errors.conAdd && (
                        <div className="text-red-600 text-xs">
                          This field is required.
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <label className="label" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="shipmentInput nonValid"
                      {...register("conMail")}
                      type="text"
                      id="email"
                      placeholder="Enter your Email"
                    />
                  </div>
                  <div className="row">
                    <label className="label" htmlFor="phone">
                      Phone <span className="text-red-600">*</span>
                    </label>
                    <div className="flex-1 w-full">
                      <input
                        className={`shipmentInput ${
                          errors.conCont ? "validate" : "nonValid"
                        } `}
                        {...register("conCont", { required: true })}
                        type="text"
                        id="phone"
                        placeholder="Enter your Phone"
                      />
                      {errors.conCont && (
                        <div className="text-red-600 text-xs">
                          This field is required.
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <label className="label" htmlFor="country">
                      Destination Country{" "}
                      <span className="text-red-600">*</span>
                    </label>

                    <select
                      className="shipmentInput nonValid"
                      value={selectedCountry}
                      onChange={(e) => setSelectedCountry(e.target.value)}
                      name="country"
                      id="country"
                    >
                      {country &&
                        country.map((c) => (
                          <option key={c.country_code} value={c.country_code}>
                            {c.country_name}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className="row">
                    <label className="label" htmlFor="city">
                      Destination City <span className="text-red-600">*</span>
                    </label>
                    <select
                      className="shipmentInput nonValid"
                      value={destCity}
                      onChange={(e) => setDestCity(e.target.value)}
                      name="city"
                      id="city"
                    >
                      {city &&
                        city.map((c) => (
                          <option key={c.CITY_CODE} value={c.CITY_CODE}>
                            {c.CITY_NAME}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className="row">
                    <label className="label" htmlFor="service">
                      Service <span className="text-red-600">*</span>
                    </label>

                    <select
                      className="shipmentInput nonValid"
                      value="BE"
                      onChange={(e) => setServiceCode(e.target.value)}
                      name="service"
                      id="service"
                    >
                      <option value="BE">BLUE EDGE</option>
                    </select>
                  </div>
                </CardContent>
              </Card>
              <Card variant="outlined">
                <CardContent className="border-b p-4 flex items-center justify-between ">
                  <h2 className="h2">Shipper Detail</h2>
                </CardContent>
                <CardContent className="">
                  <div className="row">
                    <label className="label" htmlFor="originCity">
                      Origin City <span className="text-red-600">*</span>
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
                    <div
                      onClick={() => setShow(true)}
                      className="bg-[#0047ba] text-white rounded-sm text-xs p-2 cursor-pointer"
                    >
                      Add Pickup Location
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card variant="outlined">
                <CardContent className="border-b p-4 flex items-center justify-between ">
                  <h2 className="h2">Shipment Detail</h2>
                </CardContent>
                <CardContent>
                  <div className="row">
                    <label className="label" htmlFor="productName">
                      Product Name <span className="text-red-600">*</span>
                    </label>
                    <div className="flex-1 w-full">
                      <input
                        className={`shipmentInput ${
                          errors.prodDetail ? "validate" : "nonValid"
                        } `}
                        {...register("prodDetail", { required: true })}
                        type="text"
                        id="productName"
                        placeholder="Blue T-shirt"
                      />
                      {errors.prodDetail && (
                        <div className="text-red-600 text-xs">
                          This field is required.
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <label className="label" htmlFor="pieces">
                      Pieces <span className="text-red-600">*</span>
                    </label>
                    <div className="flex-1 w-full">
                      <input
                        className={`shipmentInput ${
                          errors.pcs ? "validate" : "nonValid"
                        } `}
                        {...register("pcs", { required: true })}
                        type="number"
                        id="pieces"
                        placeholder="1"
                      />
                      {errors.pcs && (
                        <div className="text-red-600 text-xs">
                          This field is required.
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <label className="label" htmlFor="weight">
                      Weight (KG) <span className="text-red-600">*</span>
                    </label>
                    <div className="flex-1 w-full">
                      <input
                        className={`shipmentInput ${
                          errors.wgt ? "validate" : "nonValid"
                        } `}
                        {...register("wgt", { required: true })}
                        type="number"
                        id="weight"
                        placeholder="0.5"
                      />
                      {errors.wgt && (
                        <div className="text-red-600 text-xs">
                          This field is required.
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <label className="label" htmlFor=""></label>
                    <p className="flex-1 text-xs text-gray-600">
                      NOTE: This is not the final weight. Subject to the
                      confirmation at Blue-Ex Operations.
                    </p>
                  </div>
                  <div className="row">
                    <label className="label" htmlFor="value">
                      Product Value (Rs.){" "}
                      <span className="text-red-600">*</span>
                    </label>
                    <div className="flex-1 w-full">
                      <input
                        className={`shipmentInput ${
                          errors.prodValue ? "validate" : "nonValid"
                        } `}
                        {...register("prodValue", { required: true })}
                        value={prodValue}
                        onChange={(e) => setProdValue(e.target.value)}
                        type="number"
                        id="value"
                        placeholder="1500"
                      />
                      {errors.prodValue && (
                        <div className="text-red-600 text-xs">
                          This field is required.
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <label className="label" htmlFor="ref">
                      Product Ref
                    </label>
                    <input
                      className="shipmentInput nonValid"
                      {...register("custRef")}
                      type="text"
                      id="ref"
                      placeholder="S-90091"
                    />
                  </div>
                  <div className="row">
                    <label className="label" htmlFor="service">
                      Remarks{" "}
                    </label>
                    <textarea
                      style={{ resize: "none" }}
                      className="shipmentInput nonValid"
                      value={coment}
                      onChange={(e) => setComent(e.target.value)}
                      name="coment"
                      id="coment"
                      cols="30"
                      rows="3"
                      placeholder="This is exchange product, size Medium"
                    ></textarea>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="xl:min-w-[20rem]">
              <Card variant="outlined">
                <CardContent className="border-b p-4 flex items-center justify-between ">
                  <h2 className="h2">Shipment Options</h2>
                </CardContent>
                <CardContent className="border-b border-dashed p-4 flex flex-col ">
                  <div className="">Services *</div>
                  <div className="bg-[#0047ba] text-white text-sm w-[4.5rem] mt-2 p-2 rounded-full flex justify-center items-center">
                    COD
                  </div>
                </CardContent>
                <CardContent className="border-b border-dashed p-4 flex flex-col ">
                  <div className="">
                    <FormControl component="fieldset">
                      <RadioGroup
                        aria-label="document"
                        name="document"
                        value={ptype}
                        onChange={handlePtype}
                      >
                        <FormControlLabel
                          value="D"
                          control={<Radio color="primary" />}
                          label="Document"
                        />
                        <FormControlLabel
                          value="N"
                          control={<Radio color="primary" />}
                          label="Parcel"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between items-center">
                      <div className="text-sm">Cash Collection</div>
                      <div className="">
                        <Switch
                          checked={cbcChecked}
                          onClick={toggleCbc}
                          color="primary"
                          name="cbc"
                          inputProps={{ "aria-label": "primary checkbox" }}
                        />
                      </div>
                    </div>
                    {cbcChecked && (
                      <p className="w-[15rem] text-red-600 text-xs my-4">
                        Product Value can not be Rs. if Cash Collection is
                        turned on.
                      </p>
                    )}
                  </div>
                  <div className="">
                    <div className="flex justify-between items-center">
                      <div className="text-sm">Fragile</div>
                      <div className="">
                        <Switch
                          color="primary"
                          name="checkedB"
                          inputProps={{ "aria-label": "primary checkbox" }}
                          checked={fragileChecked}
                          onClick={toggleFragile}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between items-center">
                      <div className="text-sm">Insurance</div>
                      <div className="">
                        <Switch
                          color="primary"
                          name="checkedB"
                          inputProps={{ "aria-label": "primary checkbox" }}
                          checked={insurChecked}
                          onClick={toggleInsur}
                        />
                      </div>
                    </div>
                    {insurChecked && (
                      <input
                        className="shipmentInput"
                        type="text"
                        value={insurValue}
                        onChange={(e) => setInsurValue(e.target.value)}
                        placeholder="Insurance Value"
                      />
                    )}
                  </div>
                </CardContent>
                <CardContent className="flex justify-between items-center p-4 my-4">
                  <div className="font-semibold">Cash Collection</div>
                  <div className="">
                    <CurrencyFormat
                      renderText={(value) => <>{value}</>}
                      value={prodValue}
                      displayType={"text"}
                      thousandSeparator={true}
                      decimalScale={2}
                      prefix={"Rs. "}
                    />
                  </div>
                </CardContent>
              </Card>
              <button
                type="submit"
                className="bg-[#0047ba] w-full text-white p-2 mt-[2rem] rounded-sm"
              >
                BOOK NOW
              </button>
            </div>
          </div>
        </Layout>
      </form>
      <AddPickupLocation show={show} onHide={() => setShow(false)} />
    </div>
  );
};

export default CreateShipment;

CreateShipment.getInitialProps = async ({ req, res }) => {
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
