import { Card, CardContent } from "@material-ui/core";
import Head from "next/head";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import PickupListTable from "../components/PickupListTable";
import { actionTypes } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";
import fetchPickupList from "../functions/fetchPickupList";
import { parseCookies } from "../helpers/";

const Pickup = ({ data }) => {
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
        <div className="mb-4 flex items-center justify-between">
          <h1 className="heading">Pickups</h1>
          {/* <button className="btn">Create Pickup</button> */}
        </div>
        <Card variant="outlined">
          <CardContent className="border-b p-4 flex items-center justify-between ">
            <h2 className="h2">Pickup List</h2>
          </CardContent>
          <CardContent>
            <PickupListTable />
          </CardContent>
        </Card>
      </Layout>
    </div>
  );
};

export default Pickup;

Pickup.getInitialProps = async ({ req, res }) => {
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
