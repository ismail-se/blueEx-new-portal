import { Card, CardContent } from "@material-ui/core";
import styles from "../styles/faqs.module.css";
import Layout from "../components/Layout";
import Head from "next/head";
import { parseCookies } from "../helpers/";
import { useState, useEffect } from "react";
import { useStateValue } from "../context/StateProvider";
import { actionTypes } from "../context/reducer";
import GeneralFaq from "../components/Faqs/GeneralFaq";
import BookingApp from "../components/Faqs/BookingApp";
import Account from "../components/Faqs/Account";
import Damage from "../components/Faqs/Damage";
import Other from "../components/Faqs/Other";
import Return from "../components/Faqs/Return";
import Shipment from "../components/Faqs/Shipment";
import Tracking from "../components/Faqs/Tracking";

const Faqs = ({ data }) => {
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

  const [faqComp, setFaqComp] = useState("general");

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
      <div>
        <h1 className="heading">Knowledge Base</h1>
        <Card variant="outlined" className="mt-[2rem] ">
          <CardContent className="border-b p-4 flex items-center justify-between ">
            <h2 className="h2">Frequently Asked Questions</h2>
          </CardContent>
          <CardContent className="flex flex-col lg:flex-row">
            <div className={styles.menu}>
              <ul className="">
                <li id="general" onClick={() => setFaqComp("general")}>
                  General
                </li>
                <li id="booking" onClick={() => setFaqComp("booking")}>
                  Using the new booking app
                </li>
                <li id="account" onClick={() => setFaqComp("account")}>
                  Account opening and settlement
                </li>
                <li id="shipment" onClick={() => setFaqComp("shipment")}>
                  Creating a new shipment and getting it picked up
                </li>
                <li id="tracking" onClick={() => setFaqComp("tracking")}>
                  Tracking a shipment
                </li>
                <li id="returns" onClick={() => setFaqComp("returns")}>
                  Shipping returns and refusals
                </li>
                <li id="damage" onClick={() => setFaqComp("damage")}>
                  Damage claims and insurance
                </li>
                <li id="other" onClick={() => setFaqComp("other")}>
                  Other services
                </li>
              </ul>
            </div>
            <div className={styles.accordion}>
              {faqComp === "general" && <GeneralFaq />}
              {faqComp === "booking" && <BookingApp />}
              {faqComp === "account" && <Account />}
              {faqComp === "shipment" && <Shipment />}
              {faqComp === "tracking" && <Tracking />}
              {faqComp === "returns" && <Return />}
              {faqComp === "damage" && <Damage />}
              {faqComp === "other" && <Other />}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Faqs;

Faqs.getInitialProps = async ({ req, res }) => {
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
