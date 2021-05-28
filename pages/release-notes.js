import { Card, CardContent } from "@material-ui/core";
import Layout from "../components/Layout";
import Head from "next/head";
import { parseCookies } from "../helpers/";
import { useEffect } from "react";
import { useStateValue } from "../context/StateProvider";
import { actionTypes } from "../context/reducer";

const ReleaseNotes = ({ data }) => {
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
        <h1 className="heading">Release Notes</h1>
        <Card variant="outlined" className="mt-[2rem]">
          <CardContent className="border-b p-4 flex items-center justify-between ">
            <h2 className="h2">Version 0.3.1</h2>
          </CardContent>
          <CardContent className="text-sm  text-[#575962] m-[1rem]">
            <p className="font-semibold">Bugs Fixed</p>
            <ul className="list-disc ml-6 mb-4 mt-2">
              <li>
                Deliveries: Return status shipments are not shown as In-Transit
                on the shipment detail view.
              </li>
              <li>
                Deliveries: Calculate fare button is now showing accurate fares.
              </li>
              <li>
                Deliveries: Changes made to column visibility by clicking the
                column visibility button are now persistent.
              </li>
              <li>Statements: Account Statement date is now corrected</li>
              <li>
                Statements: Duplicate statements are not being shown with Amount
                "0"
              </li>
              <li>
                Create Shipment: Placeholder text on Create Shipment page shows
                examples that are corect against wieght and product value fields
              </li>
              <li>
                Create Shipment: Total charges are now set to zero when CN is
                generated and Print CN button is clicked
              </li>
              <li>
                Dashboard: Statement circles have now been set to green if
                cheque has been created and red if cheque has not been created
              </li>
              <li>
                Create Shipment: blueEX services are now visible in services
                dropdown
              </li>
              <li>Create Shipment: form validation is now working correctly</li>
              <li>Create Shipment: tab index is now working correctly</li>
              <li>
                Create Shipment: alert/notification text changed for invalid
                data in the weight field
              </li>
            </ul>
            <p className="font-semibold">New Features</p>
            <ul className="list-disc ml-6 mb-4 mt-2">
              <li>
                Guides: Two new video guides added for viewing delivery data on
                the delivery page
              </li>
              <li>
                Developer Center: New integration plugin and documentation for
                Magento
              </li>
              <li>Developer Center: New integration documentation for WebX</li>
              <li>
                Developer Center: Improved integration plugin for WooCommerce
              </li>
              <li>Developer Center: Updated documentation for WooCommerce</li>
              <li>
                Deliveries: New Data table view with improvements in speed and
                functionality
              </li>
              <li>Deliveries: Improved search functionality</li>
              <li>Deliveries: Shipments can now be exported to Excel or CSV</li>
              <li>
                Deliveries: Shipment data can now be copied for pasting to excel
                or other applications
              </li>
              <li>
                Dashboard: User can now view status report by clicking on the
                progress bar text below individual status progress bars
              </li>
              <li>
                Dashboard: Minor presentation changes in the settlement area
              </li>
              <li>
                Dashboard: Minor changes to UI in individual card headings and
                background color
              </li>
              <li>
                Dashboard: Date filter has been added to the account summary
              </li>
              <li>
                Dashboard: View all link has been added on the shipments created
                graph
              </li>
              <li>
                Application: Session duration has been increased for ease of use
              </li>
            </ul>
            <p className="font-semibold">Known Issues</p>
            <ul className="list-disc ml-6 mb-4 mt-2">
              <li>
                Deliveries: Selecting the date range control on the deliveries
                page re-sets any status or search input by the user.
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card variant="outlined" className="mt-[2rem]">
          <CardContent className="border-b p-4 flex items-center justify-between ">
            <h2 className="h2">Version 0.3.0</h2>
          </CardContent>
          <CardContent className="text-sm  text-[#575962] m-[1rem]">
            <p className="font-semibold">Bugs Fixed</p>
            <ul className="list-disc ml-6 mb-4 mt-2">
              <li>Statements: Account Statement date is now correcte</li>
              <li>
                Statements: Duplicate statements are not being shown with Amount
                "0"
              </li>
              <li>
                Create Shipment: Placeholder text on Create Shipment page shows
                examples that are corect against wieght and product value fields
              </li>
              <li>
                Create Shipment:Total charges are now set to zero when CN is
                generated and Print CN button is clicked
              </li>
              <li>
                Dashboard: Statement circles have now been set to green if
                cheque has been created and red if cheque has not been created
              </li>
              <li>
                Create Shipment: blueEX services are now visible in services
                dropdown
              </li>
              <li>Create Shipment: form validation is now working correctly</li>
              <li>
                Create Shipment: tab index is now working correctlyCreate
                Shipment: alert/notification text changed for invalid data in
                the weight field
              </li>
            </ul>
            <p className="font-semibold">New Features</p>
            <ul className="list-disc ml-6 mb-4 mt-2">
              <li>
                Create Shipment: User can now use CTRL-V to past into the
                shipment creation form
              </li>
              <li>
                Profile: Option to edit fields other than Customer contact
                information has been removed
              </li>
              <li>
                Dashboard: Bulk shipment option has been moved to quick links in
                the application header
              </li>
              <li>
                Create Shipment: the destination country has been set to
                Pakistan as default
              </li>
              <li>Login: Help text for forget password has been added</li>
              <li>Release History: New page to maintain release history</li>
              <li>
                Guides: New video guides added for creating shipments and
                viewing deliveries
              </li>
              <li>
                Application: Session duration has been increased for ease of use
              </li>
            </ul>
            <p className="font-semibold">Known Issues</p>
            <ul className="list-disc ml-6 mb-4 mt-2">
              <li>
                Deliveries: The Customize button above the table does not save
                the user's column preference on page refresh.
              </li>
              <li>
                Deliveries: Selecting the date range control on the deliveries
                page re-sets any status or search input by the user.
              </li>
              <li>
                Deliveries: Calculate fare button is not showing accurate fares.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default ReleaseNotes;

ReleaseNotes.getInitialProps = async ({ req, res }) => {
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
