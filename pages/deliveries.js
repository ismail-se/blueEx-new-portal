import Head from "next/head";
import Layout from "../components/Layout";
import { useEffect, useRef, useState } from "react";
import { actionTypes } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";
import { parseCookies } from "../helpers/";
import Link from "next/link";
import CalculateFareModal from "../components/Modals/CalculateFareModal";
import useCities from "../hooks/useCities";
import fetchCities from "../functions/fetchCities";
import { DateRangePicker } from "react-date-range";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { addDays } from "date-fns";
import useVisible from "../hooks/useVisible";
import { Card, CardContent, CircularProgress } from "@material-ui/core";
import DeliveriesTable from "../components/DeliveriesTable";
import moment from "moment";

const Deliveries = ({ data }) => {
  const [{ acno }, dispatch] = useStateValue();
  const res = JSON.parse(data.user);

  useEffect(() => {
    dispatch({
      type: actionTypes.SET_USER,
      acno: res.acno,
      b_usrId: res.b_usrId,
      name: res.name,
      acc_type: res.type,
    });
  }, []);

  // Modal
  const [show, setShow] = useState(false);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [state, setState] = useState([
    {
      startDate: addDays(new Date(), -7),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [dateView, setDateView] = useState(false);

  const [list, setList] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setStartDate(moment(state[0].startDate).format("YYYY/MM/DD"));
    setEndDate(moment(state[0].endDate).format("YYYY/MM/DD"));
    setSelectedDate(
      `${moment(state[0].startDate).format("MMM DD")} - ${moment(
        state[0].endDate
      ).format("MMM DD")}`
    );
  }, [state]);

  const ref = useRef();

  useVisible(ref, () => {
    setDateView(false);
  });

  const getDeliveries = async () => {
    const url = `http://benefitx.blue-ex.com/api/customerportal/deliveries_new.php`;
    var formdata = new FormData();
    formdata.append(
      "request",
      `{"acno": "${res.acno}", "startdate": "${startDate}", "enddate": "${endDate}", "status": "All"}`
    );

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    const response = await fetch(url, requestOptions);
    return await response.json();
  };

  const reload = async () => {
    const a = await getDeliveries();
    setList(a);
  };

  useEffect(async () => {
    setIsLoading(true);
    const a = await getDeliveries();
    setList(a);
    setIsLoading(false);
  }, [startDate, endDate]);

  return (
    <div>
      <Head>
        <title>
          blueEX Booking App - The one stop shop to access all blueEX services
        </title>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <Layout>
        <div className="mb-4 flex items-center justify-between">
          <h1 className="heading">Deliveries</h1>
          <div className="btnGroup">
            <button className="btn" onClick={() => setShow(true)}>
              Calculate Fare
            </button>
            <Link href="/upload-booking">
              <button className="btn">Bulk Import</button>
            </Link>
          </div>
        </div>
        <div className="relative">
          <Card variant="outlined">
            <CardContent className="border-b p-4 flex items-center justify-between ">
              <h2 className="h2">Delivery List</h2>
              <div
                className="flex items-center space-x-4"
                ref={ref}
                onClick={() => setDateView(!dateView)}
              >
                <span className="text-[#0047ba] hidden sm:block">
                  {selectedDate && selectedDate}
                </span>
                <button className="dateBtn" ref={ref}>
                  <KeyboardArrowDownIcon />
                </button>
              </div>
            </CardContent>
            <CardContent>
              {isLoading ? (
                <div className="flex justify-center items-center">
                  <CircularProgress />
                </div>
              ) : (
                <DeliveriesTable data={list} reload={reload} />
              )}
            </CardContent>
          </Card>
          {dateView && (
            <DateRangePicker
              // ref={ref}
              className="absolute top-16 right-0 z-10 shadow-md"
              onChange={(item) => {
                setState([item.selection]);
              }}
              showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
              months={2}
              ranges={state}
              direction="horizontal"
            />
          )}
        </div>
      </Layout>
      <CalculateFareModal show={show} onHide={() => setShow(false)} />
    </div>
  );
};

export default Deliveries;

Deliveries.getInitialProps = async ({ req, res }) => {
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
