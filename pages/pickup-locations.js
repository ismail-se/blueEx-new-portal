import { Card, CardContent } from "@material-ui/core";
import Layout from "../components/Layout";
import Head from "next/head";
import { parseCookies } from "../helpers/";
import { useEffect, useState } from "react";
import { useStateValue } from "../context/StateProvider";
import { actionTypes } from "../context/reducer";
import AddPickupLocation from "../components/Modals/AddPickupLocation";
import PickupLocationTable from "../components/PickupLocationTable";

const PickupLocation = ({ data }) => {
  const [{ acno }, dispatch] = useStateValue();
  const res = JSON.parse(data.user);

  // Modal
  const [show, setShow] = useState(false);

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
        <div className="mb-4 flex items-center justify-between">
          <h1 className="heading">Pickup Location</h1>
          <button className="btnBlue" onClick={() => setShow(true)}>
            Add Pickup Location
          </button>
        </div>
        <Card variant="outlined" className="mt-[2rem] ">
          <CardContent className="border-b p-4 flex items-center justify-between ">
            <h2 className="h2">Pickup Location List</h2>
          </CardContent>
          <CardContent>
            <PickupLocationTable acno={res.acno} />
          </CardContent>
        </Card>
      </div>
      <AddPickupLocation show={show} onHide={() => setShow(false)} />
    </Layout>
  );
};

export default PickupLocation;

PickupLocation.getInitialProps = async ({ req, res }) => {
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
