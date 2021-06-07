import { Card, CardContent } from "@material-ui/core";
import Layout from "../../components/Layout";
import Head from "next/head";
import { parseCookies } from "../../helpers/";
import { useEffect } from "react";
import { useStateValue } from "../../context/StateProvider";
import { actionTypes } from "../../context/reducer";
import Link from "next/link";

const DeveloperCenter = ({ data }) => {
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
        <h1 className="heading">Developer Center</h1>
        <Card variant="outlined" className="mt-[2rem]">
          <CardContent className="border-b p-4 flex items-center justify-between ">
            <h2 className="h2">API Detail</h2>
          </CardContent>
          <CardContent className="p-4 flex flex-wrap gap-6">
            <Link href="/developer-center/open-api-xml">
              <div className="flex-1 cursor-pointer flex justify-center items-center shadow-md h-[7rem] min-w-[15rem]">
                <img src="/images/openapixml.png" alt="" />
              </div>
            </Link>
            <Link href="/developer-center/open-api-json">
              <div className="flex-1 cursor-pointer flex justify-center items-center shadow-md h-[7rem] min-w-[15rem]">
                <img src="/images/openapijson.png" alt="" />
              </div>
            </Link>
            <Link href="/developer-center/webx">
              <div className="flex-1 cursor-pointer flex justify-center items-center shadow-md h-[7rem] min-w-[15rem]">
                <img src="/images/webx.png" alt="" />
              </div>
            </Link>
            <div
              href="/"
              className="flex-1 bg-[#f7f7f7] flex justify-center items-center h-[7rem] min-w-[15rem]"
            >
              <img
                src="/images/fishry.png"
                style={{ filter: "grayscale(100%)", opacity: "0.4" }}
                alt=""
              />
            </div>
            <Link href="/developer-center/magento">
              <div className="flex-1 cursor-pointer flex justify-center items-center shadow-md h-[7rem] min-w-[15rem]">
                <img src="/images/magento.png" alt="" />
              </div>
            </Link>
            <Link href="/developer-center/woocommerce">
              <div className="flex-1 cursor-pointer flex justify-center items-center shadow-md h-[7rem] min-w-[15rem]">
                <img src="/images/woocommerce.png" alt="" />
              </div>
            </Link>
            <div
              href="/"
              className="flex-1 bg-[#f7f7f7] flex justify-center items-center  h-[7rem] min-w-[15rem]"
            >
              <img
                src="/images/prestashop.png"
                style={{ filter: "grayscale(100%)", opacity: "0.4" }}
                alt=""
              />
            </div>
            <div
              href="/"
              className="flex-1 bg-[#f7f7f7] cursor-pointer flex justify-center items-center  h-[7rem] min-w-[15rem]"
            >
              <img
                src="/images/shopify.png"
                style={{ filter: "grayscale(100%)", opacity: "0.4" }}
                alt=""
              />
            </div>
            <div
              href="/"
              className="flex-1 bg-[#f7f7f7] cursor-pointer flex justify-center items-center  h-[7rem] min-w-[15rem]"
            >
              <img
                src="/images/chatbot.png"
                style={{ filter: "grayscale(100%)", opacity: "0.4" }}
                alt=""
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default DeveloperCenter;

DeveloperCenter.getInitialProps = async ({ req, res }) => {
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
