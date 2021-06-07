import { Alert, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { useEffect, useState } from "react";
import FormData from "form-data";
import { useForm } from "react-hook-form";
import fetchCities from "../functions/fetchCities";
import { useStateValue } from "../context/StateProvider";

const UpdatePickupLocation = ({ show, onHide, newData, reload }) => {
  const [cities, setCities] = useState(null);
  const [originCity, setOriginCity] = useState("KHI");
  const [{ acno }, dispatch] = useStateValue();
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [origin, setOrigin] = useState("");
  const [address, setAddress] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    setName(newData.NAME);
    setContact(newData.CONTACT);
    setEmail(newData.EMAIL);
    setOrigin(newData.ORI_CITY);
    setAddress(newData.LOCATION);
    setId(newData.ID);
    setShowAlert(false);
  }, [newData]);

  useEffect(async () => {
    setCities(await fetchCities("PK"));
  }, []);

  const [showAlert, setShowAlert] = useState(false);

  const updatePickup = async () => {
    var formdata = new FormData();
    let data = "";
    formdata.append(
      "request",
      `{"name" : "${name}" , "location":"${address}" , "contact" : "${contact}" , "email" :"${email}","acno" : "${acno}", "origincity" : "${origin}", "pid" :"${id}"}`
      // `{"name":"${locName}","location":"${locAddress}","contact":"${locContact}","email":"${locEmail}","acno":"${acno}","origincity":"${originCity}"}`
    );

    console.log(
      `{"name" : "${name}" , "location":"${address}" , "contact" : "${contact}" , "email" :"${email}","acno" : "${acno}", "origincity" : "${origin}", "pid" :"${id}"}`
    );

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    await fetch(
      "http://benefitx.blue-ex.com/api/customerportal/editpickuploc.php",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => (data = result))
      .catch((error) => console.log("error", error));

    return data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await updatePickup();
    reload();
    console.log(response);
    response.detail.status === "1" ? setShowAlert(true) : setShowAlert(false);
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Pickup Location
        </Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit}>
        <Modal.Body className="p-8">
          <Alert
            show={showAlert}
            variant="success"
            onClose={() => setShowAlert(false)}
            className="w-full"
            dismissible
          >
            <p>Pickup Location Has been Updated</p>
          </Alert>
          <div className="flex lg:items-center flex-col lg:flex-row m-4">
            <label htmlFor="locationName" className="w-[18rem]">
              Pickup Location Name:{" "}
            </label>
            <div className="flex-1 w-full">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="locationName"
                className="shipmentInput nonValid"
                placeholder="Enter Your Pickup Name"
              />
            </div>
          </div>

          <div className="flex lg:items-center flex-col lg:flex-row m-4">
            <label htmlFor="locationCon" className="w-[18rem]">
              Pickup Location Contact No:{" "}
            </label>
            <div className="flex-1 w-full">
              <input
                type="number"
                id="locationCon"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="shipmentInput nonValid"
                placeholder="Enter Your Pickup Location Contact No"
              />
            </div>
          </div>

          <div className="flex lg:items-center flex-col lg:flex-row m-4">
            <label htmlFor="locationEmail" className="w-[18rem]">
              Pickup Location Email:{" "}
            </label>
            <div className="flex-1 w-full">
              <input
                type="email"
                id="locationEmail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shipmentInput nonValid"
                placeholder="Enter Your Pickup Location Email"
              />
            </div>
          </div>

          <div className="flex lg:items-center flex-col lg:flex-row m-4">
            <label htmlFor="originCity" className="w-[18rem]">
              Pickup Location Origin:{" "}
            </label>
            <div className="flex-1 w-full">
              <select
                className="shipmentInput nonValid"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                name="originCity"
                id="originCity"
              >
                {cities &&
                  cities.map((c) => (
                    <option key={c.CITY_CODE} value={c.CITY_CODE}>
                      {c.CITY_NAME}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <div className="flex lg:items-center flex-col lg:flex-row m-4">
            <label htmlFor="locationAddress" className="w-[18rem]">
              Pickup Location Address:{" "}
            </label>
            <div className="flex-1 w-full">
              <input
                type="text"
                id="locationAddress"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="shipmentInput nonValid"
                placeholder="Enter Your Pickup Location Address"
              />
            </div>
          </div>

          <div className="flex justify-center items-center m-4">
            <button type="submit" className="btnBlue w-[18rem]">
              Update Pickup Location
            </button>
          </div>
        </Modal.Body>
      </form>
      <Modal.Body></Modal.Body>
    </Modal>
  );
};

export default UpdatePickupLocation;
