import { Card, CardContent } from "@material-ui/core";
import Layout from "../components/Layout";
import Head from "next/head";
import { parseCookies } from "../helpers/";
import { useEffect } from "react";
import { useStateValue } from "../context/StateProvider";
import { actionTypes } from "../context/reducer";

const PrivacyPolicy = ({ data }) => {
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
        <h1 className="heading">Privacy Policy</h1>
        <Card variant="outlined" className="mt-[2rem] p-[2rem]">
          <CardContent className="text-sm text-[#575962]">
            <h2 className="h2 my-[1rem]">Delivery</h2>
            <p className="p">
              We highly value the urgency of your order(s). We make our
              strongest effort to ensure that your ordered product(s) reach your
              door as soon as possible. Once your order is placed, you will
              receive a confirmation call/email/SMS from us to verify the placed
              order and to initiate the delivery process.
            </p>

            <p className="p">
              After your order is confirmed, it will be delivered to your given
              address in the next 2 to 4 business days anywhere in Pakistan.
            </p>

            <p className="p">
              We start the shipping process within 24 hours of the conformation
              of order. So, if you want to cancel or modify any order, please
              inform our Customer Services Department within those 24 hours.
            </p>

            <p className="p">
              Privacy Statement the terms "we", "our", and "us" used in this
              policy refer to blue-ex and Website.
            </p>

            <p className="p">
              We are dedicated to protecting the privacy of our customers. This
              privacy policy makes you able to understand what information we
              may collect from you when you visit{" "}
              <a href="https://www.blue-ex.com" target="_blank">
                blue-ex.com
              </a>{" "}
              and its subpages. It also clarifies, how we use such information
              and the choices you have with respect to our use of this
              information.
            </p>

            <h2 className="h2 my-[1rem]">What information we collect?</h2>

            <p className="p">
              When you visit{" "}
              <a className="a" href="https://www.blue-ex.com" target="_blank">
                blue-ex.com
              </a>{" "}
              and its subpages, place an order, make a purchase, contact us or
              participate in any activities we conduct, we collect your
              identifiable information, e.g.: name, email address, phone number,
              etc. We also maintain records of your history and interests to
              improve your shopping experience.
            </p>

            <h2 className="h2 my-[1rem]">How we use information we collect?</h2>

            <p className="p">
              We use your identifiable information to help us learn more about
              your shopping preferences and to provide you with the best
              possible products and services. In this regard, we may share your
              identifiable information with third-parties that provide us
              support services or help us market blue-ex products and services.
              Third-parties are contractually prohibited from using your
              identifiable information in any manner other than helping blue-ex.
              We may share your personal information if necessary to comply with
              laws, government requests or to protect the rights of blue-ex.
            </p>

            <p className="p">
              We may use your identifiable information to send periodic emails
              to provide you with information and updates regarding blue-ex’s
              new arrivals, campaigns, and any other activities. However, if you
              prefer to no longer receive blue-ex’s emails, you can unsubscribe
              following the instructions at the bottom of each of our emails.
            </p>

            <h2 className="h2 my-[1rem]">Usage of "cookies"</h2>

            <p className="p">
              We use "cookies" that allows us to recognize your browser,
              distinguish you from other customers, enhance and personalize your
              online shopping experience. Cookies help us remember and process
              the items in your shopping cart, understand and save your
              preferences for future visits, and compile aggregate data about
              site traffic and site interaction so that we can improve our
              website design, products, services and campaigns. In this case
              also, third-parties are contractually prohibited from using your
              information of browsing history and product interest in any manner
              other than helping blue-ex.
            </p>

            <p className="p">
              If you prefer, you can change the settings on your browser to
              prevent cookies being stored. This may, however, prevent you from
              taking full advantage of blue-ex.com
            </p>

            <h2 className="h2 my-[1rem]">Third-party links</h2>

            <p className="p">
              Haibtt.com may contain links to/from the websites of our parent
              brand, sister brands, partners, social media sites, and other
              third parties. If you follow a link to any of these websites,
              please note that they have their own privacy policies. We,
              therefore, have no responsibility or liability for the content and
              activities of these linked sites. Please check their policies
              before you submit any personal data on their websites.
            </p>

            <h2 className="h2 my-[1rem]">Questions</h2>

            <p className="p">
              or any concerns regarding this privacy policy you can contact us
              via email at{" "}
              <a className="a" href="mailto:ask@blue-ex.com" target="_blank">
                ask@blue-ex.com
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;

PrivacyPolicy.getInitialProps = async ({ req, res }) => {
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
