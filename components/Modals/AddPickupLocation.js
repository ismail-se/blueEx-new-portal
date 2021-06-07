import { Alert, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { useEffect, useState } from "react";
import FormData from "form-data";
import { useForm } from "react-hook-form";
import fetchCities from "../../functions/fetchCities";
import { useStateValue } from "../../context/StateProvider";

const AddPickupLocation = (props) => {
  const [cities, setCities] = useState(null);
  const [originCity, setOriginCity] = useState("KHI");
  const [{ acno }, dispatch] = useStateValue();

  useEffect(async () => {
    setCities(await fetchCities("PK"));
  }, []);

  const [showAlert, setShowAlert] = useState(false);

  const addPickup = async (locName, locContact, locEmail, locAddress) => {
    var formdata = new FormData();
    let data = "";
    formdata.append(
      "request",
      `{"name" : "${locName}" , "location":"${locAddress}" , "contact" : "${locContact}" , "email" :"${locEmail}","acno" : "${acno}", "origincity" : "${originCity}"}`
      // `{"name":"${locName}","location":"${locAddress}","contact":"${locContact}","email":"${locEmail}","acno":"${acno}","origincity":"${originCity}"}`
    );

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    await fetch(
      "http://benefitx.blue-ex.com/api/customerportal/pickuplocation.php",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => (data = result))
      .catch((error) => console.log("error", error));

    return data;
  };

  // prevent submitting invalid or empty emails
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // handle form submit
  const onSubmit = async (data) => {
    setShowAlert(false);
    const response = await addPickup(
      data.locName,
      data.locContact,
      data.locEmail,
      data.locAddress
    );
    console.log(response);
    response.status === "1" ? setShowAlert(true) : setShowAlert(false);
  };

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Pickup Location
        </Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body className="p-8">
          <Alert
            show={showAlert}
            variant="success"
            onClose={() => setShowAlert(false)}
            className="w-full"
            dismissible
          >
            <p>New Pickup Location Has been Created</p>
          </Alert>
          <div className="flex lg:items-center flex-col lg:flex-row m-4">
            <label htmlFor="locationName" className="w-[18rem]">
              Pickup Location Name:{" "}
            </label>
            <div className="flex-1 w-full">
              <input
                type="text"
                id="locationName"
                className={`shipmentInput  ${
                  errors.locName ? "validate" : "nonValid"
                } `}
                {...register("locName", { required: true })}
                placeholder="Enter Your Pickup Name"
              />
              {errors.locName && (
                <div className="text-red-600 text-xs">
                  This field is required.
                </div>
              )}
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
                className={`shipmentInput  ${
                  errors.locContact ? "validate" : "nonValid"
                } `}
                {...register("locContact", { required: true })}
                placeholder="Enter Your Pickup Location Contact No"
              />
              {errors.locContact && (
                <div className="text-red-600 text-xs">
                  This field is required.
                </div>
              )}
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
                className={`shipmentInput  ${
                  errors.locEmail ? "validate" : "nonValid"
                } `}
                {...register("locEmail", { required: true })}
                placeholder="Enter Your Pickup Location Email"
              />
              {errors.locEmail && (
                <div className="text-red-600 text-xs">
                  This field is required.
                </div>
              )}
            </div>
          </div>

          <div className="flex lg:items-center flex-col lg:flex-row m-4">
            <label htmlFor="originCity" className="w-[18rem]">
              Pickup Location Origin:{" "}
            </label>
            <div className="flex-1 w-full">
              <select
                className="shipmentInput nonValid"
                value={originCity}
                onChange={(e) => setOriginCity(e.target.value)}
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
                className={`shipmentInput  ${
                  errors.locAddress ? "validate" : "nonValid"
                } `}
                {...register("locAddress", { required: true })}
                placeholder="Enter Your Pickup Location Address"
              />
              {errors.locAddress && (
                <div className="text-red-600 text-xs">
                  This field is required.
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-center items-center m-4">
            <button type="submit" className="btnBlue w-[18rem]">
              Add Pickup Location
            </button>
          </div>
        </Modal.Body>
      </form>
      <Modal.Body></Modal.Body>
    </Modal>
  );
};

export default AddPickupLocation;
