import { Card, CardContent } from "@material-ui/core";
import Layout from "../components/Layout";
import Head from "next/head";
import { parseCookies } from "../helpers/";
import { useEffect } from "react";
import { useStateValue } from "../context/StateProvider";
import { actionTypes } from "../context/reducer";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import InboxIcon from "@material-ui/icons/Inbox";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CachedIcon from "@material-ui/icons/Cached";
import ReturnRequestList from "../components/ReturnRequestList";
import ReturnRequestApproved from "../components/ReturnRequestApproved";
import ReAttemptRequest from "../components/ReattemptRequest";
import ReturnSummary from "../components/ReturnSummary";

const ReturnRequests = ({ data }) => {
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

  return (
    <Layout>
      <Head>
        <title>
          blueEX Booking App - The one stop shop to access all blueEX services
        </title>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <div>
        <h1 className="heading flex items-center mb-4">
          <span className="bg-[#ffc212] text-white text-sm font-normal px-[1.4rem] py-[0.6rem] rounded-full mr-2">
            IN-TRANSIT
          </span>{" "}
          Shipments with Return Requests
        </h1>
        <Tabs defaultActiveKey="returnRequests" id="uncontrolled-tab-example">
          <Tab
            eventKey="returnRequests"
            title={
              <span>
                <InboxIcon /> RETURN REQUESTS
              </span>
            }
          >
            <ReturnRequestList acno={res.acno} />
          </Tab>
          <Tab
            eventKey="returned"
            title={
              <span>
                <CheckBoxIcon /> RETURNED
              </span>
            }
          >
            <ReturnRequestApproved acno={res.acno} />
          </Tab>
          <Tab
            eventKey="reAttempt"
            title={
              <span>
                <CachedIcon /> RE-ATTEMPT REQUEST
              </span>
            }
          >
            <ReAttemptRequest />
          </Tab>
          <Tab
            eventKey="returnSummary"
            title={
              <span>
                <CachedIcon /> RETURN SUMMARY
              </span>
            }
          >
            <ReturnSummary acno={res.acno} />
          </Tab>
        </Tabs>
      </div>
    </Layout>
  );
};

export default ReturnRequests;

ReturnRequests.getInitialProps = async ({ req, res }) => {
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
