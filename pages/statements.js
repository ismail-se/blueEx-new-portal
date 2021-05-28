import Head from "next/head";
import Layout from "../components/Layout";
import { useEffect, useState, useRef } from "react";
import { actionTypes } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";
import { parseCookies } from "../helpers/";
import { Card, CardContent } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import useVisible from "../hooks/useVisible";
import StatementTable from "../components/StatementTable";
import fetchSettlement from "../functions/fetchSettlement";

const Statements = ({ data, allData }) => {
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

  const [list, setList] = useState(allData);

  useEffect(() => {
    let stYear = state[0].startDate.getFullYear();
    let stMonth = state[0].startDate.getMonth() + 1;
    if (stMonth < 9) stMonth = "0" + stMonth;
    let stDate = state[0].startDate.getDate();
    if (stDate < 9) stDate = "0" + stDate;
    setStartDate(`${stYear}/${stMonth}/${stDate}`);

    let enYear = state[0].endDate.getFullYear();
    let enMonth = state[0].endDate.getMonth() + 1;
    if (enMonth < 9) enMonth = "0" + enMonth;
    let enDate = state[0].endDate.getDate();
    if (enDate < 9) enDate = "0" + enDate;
    setEndDate(`${enYear}/${enMonth}/${enDate}`);

    let mon = [
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
    setSelectedDate(
      `${mon[state[0].startDate.getMonth()]} ${stDate} - ${
        mon[state[0].endDate.getMonth()]
      } ${enDate}`
    );
  }, [state]);

  // const ref = useRef();

  // useVisible(ref, () => {
  //   setDateView(false);
  // });

  // const getSettlement = async () => {
  //   const url = `http://benefitx.blue-ex.com/api/customerportal/statement.php?acno=${acno}&hashkey=KaPdSgVkYp3s6v9y`;
  //   const response = await fetch(url);
  //   return await response.json();
  // };

  // useEffect(async () => {
  //   const a = await getSettlement();
  //   setList(a);
  // }, []);
  // }, [startDate, endDate]);

  return (
    <div>
      <Head>
        <title>
          blueEX Booking App - The one stop shop to access all blueEX services
        </title>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <Layout>
        <h1 className="heading ">Statements</h1>
        <div className="bg-[#0047ba] text-white text-sm w-[4.5rem] mt-2 mb-4 p-2 rounded-full flex justify-center items-center">
          COD
        </div>
        <div className="relative">
          <Card variant="outlined">
            <CardContent className="border-b p-4 flex items-center justify-between ">
              <h2 className="h2">Statement List</h2>
              {/* <div
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
              </div> */}
            </CardContent>
            <CardContent>
              <StatementTable data={list} usrid={res.b_usrId} />
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
    </div>
  );
};

export default Statements;

Statements.getInitialProps = async ({ req, res }) => {
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
