import { Card, CardContent } from "@material-ui/core";
import styles from "../../styles/faqs.module.css";
import Layout from "../../components/Layout";
import Head from "next/head";
import { parseCookies } from "../../helpers/";
import { useState, useEffect } from "react";
import { useStateValue } from "../../context/StateProvider";
import { actionTypes } from "../../context/reducer";
import Download from "../../components/Magento/Download";
import OrderPlace from "../../components/Magento/OrderPlace";

const Magento = ({ data }) => {
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

  const [faqComp, setFaqComp] = useState("download");

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
        <h1 className="heading">Magento</h1>
        <Card variant="outlined" className="mt-[2rem] ">
          <CardContent className="border-b p-4 flex items-center justify-between ">
            <h2 className="h2">Magento Detail</h2>
          </CardContent>
          <CardContent className="flex flex-col lg:flex-row">
            <div className={styles.menu}>
              <ul className="">
                <li id="download" onClick={() => setFaqComp("download")}>
                  DOWNLOAD & SETUP
                </li>
                <li id="orderPlace" onClick={() => setFaqComp("orderPlace")}>
                  ORDER PLACEMENT & TESTING
                </li>
              </ul>
            </div>
            <div className={`${styles.accordion} lg:w-[20rem]`}>
              {faqComp === "download" && <Download />}
              {faqComp === "orderPlace" && <OrderPlace />}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Magento;

Magento.getInitialProps = async ({ req, res }) => {
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
