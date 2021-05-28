import { Card, CardContent, CircularProgress } from "@material-ui/core";
import useVisible from "../hooks/useVisible";
import { DateRangePicker } from "react-date-range";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { addDays } from "date-fns";
import Link from "next/link";
import CalculateFareModal from "../components/Modals/CalculateFareModal";
import { useEffect, useRef, useState } from "react";
import moment from "moment";
import ReturnRequestTable from "./ReturnRequestTable";
import ReturnSummaryTable from "./ReturnSummaryTable";

const ReturnRequestApproved = ({ acno }) => {
  const ref = useRef();

  useVisible(ref, () => {
    setDateView(false);
  });

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

  const getReturnRequest = async () => {
    const url = `http://benefitx.blue-ex.com/api/customerportal/ret_req_hist.php`;
    var formdata = new FormData();
    formdata.append(
      "request",
      `{"acno": "${acno}", "startdate": "${startDate}", "enddate": "${endDate}"}`
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
    const a = await getReturnRequest();
    console.log(a.detail);
    setList(a.detail);
  };

  useEffect(async () => {
    setIsLoading(true);
    const a = await getReturnRequest();
    console.log(a);
    setList(a.detail);
    setIsLoading(false);
  }, [startDate, endDate]);

  return (
    <div>
      <div className="relative">
        <Card variant="outlined">
          <CardContent className="border-b p-4 flex items-center justify-between ">
            <h2 className="h2">Return Summary List</h2>
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
              <ReturnRequestTable data={list} reload={reload} />
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
    </div>
  );
};

export default ReturnRequestApproved;
