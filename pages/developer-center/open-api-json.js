import { Card, CardContent } from "@material-ui/core";
import styles from "../../styles/faqs.module.css";
import Layout from "../../components/Layout";
import Head from "next/head";
import { parseCookies } from "../../helpers/";
import { useState, useEffect } from "react";
import { useStateValue } from "../../context/StateProvider";
import { actionTypes } from "../../context/reducer";
import PlaceOrder from "../../components/OpenApiJson/PlaceOrder";
import Tracking from "../../components/OpenApiJson/Tracking";
import CancelOrder from "../../components/OpenApiXml/CancelOrder";
import GetTariff from "../../components/OpenApiXml/GetTariff";
import GetCities from "../../components/OpenApiXml/GetCities";
import Status from "../../components/OpenApiJson/Status";
import Tariff from "../../components/OpenApiJson/Tariff";
import CityList from "../../components/OpenApiJson/CityList";
import InternationalCityList from "../../components/OpenApiJson/InternationalCityList";
import Cancel from "../../components/OpenApiJson/Cancel";

const Json = ({ data }) => {
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
        <h1 className="heading">OPEN API JSON</h1>
        <Card variant="outlined" className="mt-[2rem] ">
          <CardContent className="border-b p-4 flex items-center justify-between ">
            <h2 className="h2">OPEN API JSON Detail</h2>
            <a
              href="/files/BLX-JSON-API.postman_collection.json"
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
                <li id="status" onClick={() => setFaqComp("status")}>
                  Status API
                </li>
                <li id="tracking" onClick={() => setFaqComp("tracking")}>
                  Tracking API
                </li>
                <li id="tariff" onClick={() => setFaqComp("tariff")}>
                  Tariff API
                </li>
                <li id="cityList" onClick={() => setFaqComp("cityList")}>
                  City List API
                </li>
                <li
                  id="internationalCityList"
                  onClick={() => setFaqComp("internationalCityList")}
                >
                  International City List API
                </li>
                <li id="cancel" onClick={() => setFaqComp("cancel")}>
                  Cancel Shipment API
                </li>
              </ul>
            </div>
            <div className={`${styles.accordion} lg:w-[20rem]`}>
              {faqComp === "placeOrder" && <PlaceOrder />}
              {faqComp === "status" && <Status />}
              {faqComp === "tracking" && <Tracking />}
              {faqComp === "tariff" && <Tariff />}
              {faqComp === "cityList" && <CityList />}
              {faqComp === "internationalCityList" && <InternationalCityList />}
              {faqComp === "cancel" && <Cancel />}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Json;

Json.getInitialProps = async ({ req, res }) => {
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
