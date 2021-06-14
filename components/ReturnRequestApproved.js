import { Card, CardContent, CircularProgress } from "@material-ui/core";
import useVisible from "../hooks/useVisible";
import { DateRangePicker } from "react-date-range";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { addDays } from "date-fns";
import { useEffect, useRef, useState } from "react";
import moment from "moment";
import ReturnApprovedTable from "./ReturnApprovedTable";

const ReturnRequestApproved = ({ acno }) => {
  const [dateView, setDateView] = useState(false);

  const [list, setList] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const getReturnRequest = async () => {
    const url = `http://benefitx.blue-ex.com/api/customerportal/retrequestlistpend.php`;
    var formdata = new FormData();
    formdata.append("request", `{"acno" : "${acno}", "status": "A"}`);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    const response = await fetch(url, requestOptions);
    return await response.json();
  };

  useEffect(async () => {
    const a = await getReturnRequest();
    setList(a.detail);
    setIsLoading(false);
  }, []);

  const reload = async () => {
    setIsLoading(true);
    const a = await getReturnRequest();
    setList(a.detail);
    setIsLoading(false);
  };

  return (
    <div>
      <div className="relative">
        <Card variant="outlined">
          <CardContent className="border-b p-4 flex items-center justify-between ">
            <h2 className="h2">Return Request Approved</h2>
            <button className="btnBlue" onClick={reload}>
              REFRESH
            </button>
          </CardContent>
          <CardContent>
            {isLoading ? (
              <div className="flex justify-center items-center">
                <CircularProgress />
              </div>
            ) : (
              <ReturnApprovedTable data={list} />
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
