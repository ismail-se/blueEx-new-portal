import { Card, CardContent } from "@material-ui/core";
import styles from "../../styles/faqs.module.css";
import Layout from "../../components/Layout";
import Head from "next/head";
import { parseCookies } from "../../helpers/";
import { useState, useEffect } from "react";
import { useStateValue } from "../../context/StateProvider";
import { actionTypes } from "../../context/reducer";
import Introduction from "../../components/Webx/Introduction";
import HowCourier from "../../components/Webx/HowCourier";
import BlueExAccount from "../../components/Webx/BlueExAccont";
import StepByStep from "../../components/Webx/StepByStep";
import ShipCalc from "../../components/Webx/ShipCalc";
import ShipSetup from "../../components/Webx/ShipSetup";

const Webx = ({ data }) => {
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

  const [faqComp, setFaqComp] = useState("introduction");

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
        <h1 className="heading">WebX Ecommerce</h1>
        <Card variant="outlined" className="mt-[2rem] ">
          <CardContent className="border-b p-4 flex items-center justify-between ">
            <h2 className="h2">WebX Ecommerce Detail</h2>
          </CardContent>
          <CardContent className="flex flex-col lg:flex-row">
            <div className={styles.menu}>
              <ul className="">
                <li
                  id="introduction"
                  onClick={() => setFaqComp("introduction")}
                >
                  INTRODUCTION
                </li>
                <li id="howCourier" onClick={() => setFaqComp("howCourier")}>
                  HOW COURIER INTEGRATION WORKS?
                </li>
                <li
                  id="blueExAccount"
                  onClick={() => setFaqComp("blueExAccount")}
                >
                  BLUEEX ACCOUNT & ACTIVATION
                </li>
                <li id="stepByStep" onClick={() => setFaqComp("stepByStep")}>
                  STEP BY STEP - ACTIVATION PROCESS
                </li>
                <li id="shipCalc" onClick={() => setFaqComp("shipCalc")}>
                  SHIPPING CALCULATOR
                </li>
                <li id="shipSetup" onClick={() => setFaqComp("shipSetup")}>
                  SHIPPING SETUP
                </li>
              </ul>
            </div>
            <div className={`${styles.accordion} lg:w-[20rem]`}>
              {faqComp === "introduction" && <Introduction />}
              {faqComp === "howCourier" && <HowCourier />}
              {faqComp === "blueExAccount" && <BlueExAccount />}
              {faqComp === "stepByStep" && <StepByStep />}
              {faqComp === "shipCalc" && <ShipCalc />}
              {faqComp === "shipSetup" && <ShipSetup />}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Webx;

Webx.getInitialProps = async ({ req, res }) => {
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
