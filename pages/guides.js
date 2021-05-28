import { Card, CardContent } from "@material-ui/core";
import Layout from "../components/Layout";
import Head from "next/head";
import { parseCookies } from "../helpers/";
import { useEffect, useState } from "react";
import { useStateValue } from "../context/StateProvider";
import { actionTypes } from "../context/reducer";
import ReAttemptRequestModal from "../components/Modals/ReAttemptRequestVideo";
import ApproveReturnVideo from "../components/Modals/ApproveReturnVideo";
import CreateShipmentVideo from "../components/Modals/CreateShipmentVideo";
import ViewReturnVideo from "../components/Modals/ViewReturnVideo";
import CreatePickupVideo from "../components/Modals/CreatePickupVideo";
import ViewShipmentVideo from "../components/Modals/ViewShipmentVideo";
import AccountStatementVideo from "../components/Modals/AccountStatementVideo";
import ValidationErrorVideo from "../components/Modals/ValidationErrorVideo";

const Guides = ({ data }) => {
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

  const [reAttempt, setReAttempt] = useState(false);
  const [approve, setApprove] = useState(false);
  const [viewReturn, setViewReturn] = useState(false);
  const [create, setCreate] = useState(false);
  const [createPickup, setCreatePickup] = useState(false);
  const [validation, setValidation] = useState(false);
  const [viewShipment, setViewShipment] = useState(false);
  const [accountStatement, setAccountStatement] = useState(false);

  return (
    <Layout>
      <Head>
        <title>
          blueEX Booking App - The one stop shop to access all blueEX services
        </title>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <h1 className="heading">Video Guides</h1>
      <Card variant="outlined" className="mt-[2rem]">
        <CardContent className="border-b p-4 flex items-center justify-between ">
          <h2 className="h2">Starter Guide</h2>
        </CardContent>
        <CardContent className="text-sm  text-[#575962] m-[1rem] flex flex-col md:flex-row gap-4">
          <div className="w-full">
            Download the PDF{" "}
            <a className="a" href="/files/StarterGuide.pdf" target="_blank">
              Starter Guide
            </a>{" "}
            for a complete overview of the new blueEX Booking App with detailed
            description of many new and improved features.
          </div>

          <div className="">
            <a href="/files/StarterGuide.pdf" target="_blank">
              <img
                src="https://beta.blue-ex.com/assets/images/guide/starter-guide.png"
                alt=""
                className="h-[10rem] w-full object-contain"
              />
            </a>
          </div>
        </CardContent>
      </Card>

      <Card variant="outlined" className="mt-[2rem]">
        <CardContent className="border-b p-4 flex items-center justify-between ">
          <h2 className="h2">Create a Re-attempt Request</h2>
        </CardContent>
        <CardContent className="text-sm  text-[#575962] m-[1rem] flex flex-col md:flex-row gap-4">
          <div className="w-full">
            How to request BlueEX to re-attempt delivery on a shipment.
          </div>

          <div className="" onClick={() => setReAttempt(true)}>
            <img
              src="/images/return-request.jpg"
              alt=""
              className="h-[10rem] w-full object-contain"
            />
          </div>
        </CardContent>
      </Card>

      <Card variant="outlined" className="mt-[2rem]">
        <CardContent className="border-b p-4 flex items-center justify-between ">
          <h2 className="h2">Approve a Return Request</h2>
        </CardContent>
        <CardContent className="text-sm  text-[#575962] m-[1rem] flex flex-col md:flex-row gap-4">
          <div className="w-full">
            How to approve a shipment to be returned back to address of origin.
          </div>

          <div className="" onClick={() => setApprove(true)}>
            <img
              src="/images/return-request.jpg"
              alt=""
              className="h-[10rem] w-full object-contain"
            />
          </div>
        </CardContent>
      </Card>

      <Card variant="outlined" className="mt-[2rem]">
        <CardContent className="border-b p-4 flex items-center justify-between ">
          <h2 className="h2">View Return Summary</h2>
        </CardContent>
        <CardContent className="text-sm  text-[#575962] m-[1rem] flex flex-col md:flex-row gap-4">
          <div className="w-full">
            View list of shipments that have been returned after your approval
            (or due to no reply for 24 hours).
          </div>

          <div className="" onClick={() => setViewReturn(true)}>
            <img
              src="/images/return-summary.jpg"
              alt=""
              className="h-[10rem] w-full object-contain"
            />
          </div>
        </CardContent>
      </Card>

      <Card variant="outlined" className="mt-[2rem]">
        <CardContent className="border-b p-4 flex items-center justify-between ">
          <h2 className="h2">Create Shipment</h2>
        </CardContent>
        <CardContent className="text-sm  text-[#575962] m-[1rem] flex flex-col md:flex-row gap-4">
          <div className="w-full">
            View the video screencast of a user booking a new shipment.
          </div>

          <div className="" onClick={() => setCreate(true)}>
            <img
              src="/images/create.png"
              alt=""
              className="h-[10rem] w-full object-contain"
            />
          </div>
        </CardContent>
      </Card>

      <Card variant="outlined" className="mt-[2rem]">
        <CardContent className="border-b p-4 flex items-center justify-between ">
          <h2 className="h2">Add a new pickup location</h2>
        </CardContent>
        <CardContent className="text-sm  text-[#575962] m-[1rem] flex flex-col md:flex-row gap-4">
          <div className="w-full">
            View video screen-cast of a user adding a new pickup location while
            booking a shipment.
          </div>

          <div className="" onClick={() => setCreatePickup(true)}>
            <img
              src="/images/pickup.png"
              alt=""
              className="h-[10rem] w-full object-contain"
            />
          </div>
        </CardContent>
      </Card>

      <Card variant="outlined" className="mt-[2rem]">
        <CardContent className="border-b p-4 flex items-center justify-between ">
          <h2 className="h2">Validation errors</h2>
        </CardContent>
        <CardContent className="text-sm  text-[#575962] m-[1rem] flex flex-col md:flex-row gap-4">
          <div className="w-full">
            View video screen-cast of different validation errors a user can
            face while booking a shipment.
          </div>

          <div className="" onClick={() => setValidation(true)}>
            <img
              src="/images/validation.png"
              alt=""
              className="h-[10rem] w-full object-contain"
            />
          </div>
        </CardContent>
      </Card>

      <Card variant="outlined" className="mt-[2rem]">
        <CardContent className="border-b p-4 flex items-center justify-between ">
          <h2 className="h2">Viewing shipment data</h2>
        </CardContent>
        <CardContent className="text-sm  text-[#575962] m-[1rem] flex flex-col md:flex-row gap-4">
          <div className="w-full">
            View video screen-cast of a user viewing and filtering data on the
            deliveries page.
          </div>

          <div className="" onClick={() => setViewShipment(true)}>
            <img
              src="/images/deliveries.png"
              alt=""
              className="h-[10rem] w-full object-contain"
            />
          </div>
        </CardContent>
      </Card>

      <Card variant="outlined" className="mt-[2rem]">
        <CardContent className="border-b p-4 flex items-center justify-between ">
          <h2 className="h2">Viewing account statements</h2>
        </CardContent>
        <CardContent className="text-sm  text-[#575962] m-[1rem] flex flex-col md:flex-row gap-4">
          <div className="w-full">
            View video screen-cast of a user viewing account statements on the
            statements page.
          </div>

          <div className="" onClick={() => setAccountStatement(true)}>
            <img
              src="/images/statements.png"
              alt=""
              className="h-[10rem] w-full object-contain"
            />
          </div>
        </CardContent>
      </Card>

      <ReAttemptRequestModal
        show={reAttempt}
        onHide={() => setReAttempt(false)}
      />
      <ApproveReturnVideo show={approve} onHide={() => setApprove(false)} />
      <ViewReturnVideo show={viewReturn} onHide={() => setViewReturn(false)} />
      <CreateShipmentVideo show={create} onHide={() => setCreate(false)} />
      <CreatePickupVideo
        show={createPickup}
        onHide={() => setCreatePickup(false)}
      />
      <ValidationErrorVideo
        show={validation}
        onHide={() => setValidation(false)}
      />
      <ViewShipmentVideo
        show={viewShipment}
        onHide={() => setViewShipment(false)}
      />
      <AccountStatementVideo
        show={accountStatement}
        onHide={() => setAccountStatement(false)}
      />
    </Layout>
  );
};

export default Guides;

Guides.getInitialProps = async ({ req, res }) => {
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
