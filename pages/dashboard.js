import Head from "next/head";
import AccountSummary from "../components/AccountSummary";
import Layout from "../components/Layout";
import Note from "../components/Note";
import SettlementHistory from "../components/SettlementHistory";
import ShipmentTrend from "../components/ShipmentTrend";
import { parseCookies } from "../helpers/";
import { useStateValue } from "../context/StateProvider";
import { actionTypes } from "../context/reducer";
import { useEffect } from "react";

const Dashboard = ({ data }) => {
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
    <div>
      <Head>
        <title>
          blueEX Booking App - The one stop shop to access all blueEX services
        </title>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <Layout>
        <Note text="Dear Customer, please note that BlueEX's return procedure will shift from Emails to New Customer Portal from 1st January 2021. Please make sure you visit the BlueEX Video Guides page to view how to use the Return Request Page. For more information please contact your account manager or BlueEX Customer Support at 021-111-258-339." />
        <h1 className="heading my-4">Dashboard - admin</h1>
        <div className="flex flex-col gap-8 ">
          <div className="flex flex-col xl:flex-row gap-8">
            <AccountSummary />
            <SettlementHistory />
          </div>
          <ShipmentTrend />
        </div>
      </Layout>
    </div>
  );
};

export default Dashboard;

Dashboard.getInitialProps = async ({ req, res }) => {
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
