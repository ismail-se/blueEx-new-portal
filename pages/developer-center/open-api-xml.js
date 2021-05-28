import { Card, CardContent } from "@material-ui/core";
import styles from "../../styles/faqs.module.css";
import Layout from "../../components/Layout";
import Head from "next/head";
import { parseCookies } from "../../helpers/";
import { useState, useEffect } from "react";
import { useStateValue } from "../../context/StateProvider";
import { actionTypes } from "../../context/reducer";
import PlaceOrder from "../../components/OpenApiXml/PlaceOrder";
import Tracking from "../../components/OpenApiXml/Tracking";
import CancelOrder from "../../components/OpenApiXml/CancelOrder";
import GetTariff from "../../components/OpenApiXml/GetTariff";
import GetCities from "../../components/OpenApiXml/GetCities";
import Status from "../../components/OpenApiXml/Status";

const Xml = ({ data }) => {
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

  const [faqComp, setFaqComp] = useState("placeOrder");

  useEffect(() => {
    let active = document.querySelector(`#${faqComp}`);
    active.classList.add(styles.active);

    return () => {
      active.classList.remove(styles.active);
    };
  }, [faqComp]);

  return (
    <Layout>
      <Head>
        <title>
          blueEX Booking App - The one stop shop to access all blueEX services
        </title>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <div className="">
        <h1 className="heading">OPEN API</h1>
        <Card variant="outlined" className="mt-[2rem] ">
          <CardContent className="border-b p-4 flex items-center justify-between ">
            <h2 className="h2">OPEN API Detail</h2>
            <a
              href="/files/BLX-XML-API.postman_collection.json"
              download
              target="_blank"
            >
              <button className="btnBlue">Download Postman</button>
            </a>
          </CardContent>
          <CardContent className="flex flex-col lg:flex-row">
            <div className={styles.menu}>
              <ul className="">
                <li id="placeOrder" onClick={() => setFaqComp("placeOrder")}>
                  Place Order
                </li>
                <li id="cancelOrder" onClick={() => setFaqComp("cancelOrder")}>
                  Cancel Order
                </li>
                <li id="getTariff" onClick={() => setFaqComp("getTariff")}>
                  Get Tariff
                </li>
                <li id="getCities" onClick={() => setFaqComp("getCities")}>
                  Get Cities
                </li>
                <li id="tracking" onClick={() => setFaqComp("tracking")}>
                  Tracking
                </li>
                <li id="status" onClick={() => setFaqComp("status")}>
                  Status
                </li>
              </ul>
            </div>
            <div className={`${styles.accordion} lg:w-[20rem]`}>
              {faqComp === "placeOrder" && <PlaceOrder />}
              {faqComp === "cancelOrder" && <CancelOrder />}
              {faqComp === "getTariff" && <GetTariff />}
              {faqComp === "getCities" && <GetCities />}
              {faqComp === "tracking" && <Tracking />}
              {faqComp === "status" && <Status />}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Xml;

Xml.getInitialProps = async ({ req, res }) => {
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
