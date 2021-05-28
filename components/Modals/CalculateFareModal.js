import { useEffect, useState } from "react";
import { Alert, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import fetchCities from "../../functions/fetchCities";
import calculateFare from "../../functions/calculateFare";
import { useStateValue } from "../../context/StateProvider";

export default function CalculateFareModal({ show, onHide }) {
  const [showAlert, setShowAlert] = useState(false);
  const [cities, setCities] = useState(null);
  const [serviceCode, setServiceCode] = useState("BE");
  const [originCity, setOriginCity] = useState("KHI");
  const [destinationCountry, setDestinationCountry] = useState("PK");
  const [destinationCity, setDestinationCity] = useState("KHI");
  const [{ acno, b_usrId }, dispatch] = useStateValue();
  const [rate, setRate] = useState("0.0");

  useEffect(async () => {
    setCities(await fetchCities("PK"));
  }, []);

  // prevent submitting invalid or empty emails
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // handle form submit
  const onSubmit = async (data) => {
    let fare = await calculateFare(
      acno,
      originCity,
      destinationCity,
      serviceCode,
      data.cbc,
      data.cod
    );
    console.log(fare);
    setRate(fare.rate);
    setShowAlert(true);
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
        <Modal.Title>Calculate Your Fare</Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body className="">
          <Alert
            show={showAlert}
            variant="success"
            onClose={() => setShowAlert(false)}
            className="w-full"
            dismissible
          >
            <p>Your Calculated Fare Amount is Rs. {rate}</p>
          </Alert>
          <div>
            {/* Row 1 */}
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 row">
                <label className="text-sm sm:w-[6rem] w-full mr-4" htmlFor="">
                  Service Code:
                </label>
                <div className="flex-1 w-full">
                  <select
                    className="shipmentInput nonValid"
                    value={serviceCode}
                    onChange={(e) => setServiceCode(e.target.value)}
                    name="serviceCode"
                    id="serviceCode"
                  >
                    <option key="BE" value="BE">
                      BLUE EDGE
                    </option>
                    <option key="BT" value="BT">
                      BLUE TRUNK
                    </option>
                  </select>
                </div>
              </div>
              <div className="flex-1 row">
                <label className="text-sm sm:w-[6rem] w-full mr-4" htmlFor="">
                  Origin City:
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

                    <option key="BE" value="BE">
                      BLUE EDGE
                    </option>
                  </select>
                </div>
              </div>
            </div>
            {/* Row 2 */}
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 row">
                <label className="text-sm sm:w-[6rem] w-full mr-4" htmlFor="">
                  Destination Country:
                </label>
                <div className="flex-1 w-full">
                  <select
                    className="shipmentInput nonValid"
                    value={destinationCountry}
                    onChange={(e) => setDestinationCountry(e.target.value)}
                    name="destinationCountry"
                    id="destinationCountry"
                  >
                    <option key="PK" value="PK">
                      Pakistan
                    </option>
                  </select>
                </div>
              </div>
              <div className="flex-1 row">
                <label className="text-sm sm:w-[6rem] w-full mr-4" htmlFor="">
                  Destination City:
                </label>
                <div className="flex-1 w-full">
                  <select
                    className="shipmentInput nonValid"
                    value={destinationCity}
                    onChange={(e) => setDestinationCity(e.target.value)}
                    name="originCity"
                    id="originCity"
                  >
                    {cities &&
                      cities.map((c) => (
                        <option key={c.CITY_CODE} value={c.CITY_CODE}>
                          {c.CITY_NAME}
                        </option>
                      ))}

                    <option key="BE" value="BE">
                      BLUE EDGE
                    </option>
                  </select>
                </div>
              </div>
            </div>
            {/* Row 3 */}
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 row">
                <label
                  className="text-sm sm:w-[6rem] w-full mr-4"
                  htmlFor="cbc"
                >
                  CBC Weight:
                </label>
                <div className="flex-1 w-full">
                  <input
                    className={`shipmentInput ${
                      errors.cbc ? "validate" : "nonValid"
                    } `}
                    {...register("cbc", { required: true })}
                    type="number"
                    min="0.5"
                    max="999.99"
                    step="any"
                    id="cbc"
                    placeholder="0.5"
                  />
                  {errors.cbc && (
                    <div className="text-red-600 text-xs">
                      This field is required.
                    </div>
                  )}
                </div>
              </div>
              <div className="flex-1 row">
                <label
                  className="text-sm sm:w-[6rem] w-full mr-4"
                  htmlFor="cod"
                >
                  COD Amount:
                </label>
                <div className="flex-1 w-full">
                  <input
                    className={`shipmentInput ${
                      errors.cod ? "validate" : "nonValid"
                    } `}
                    {...register("cod", { required: true })}
                    type="number"
                    id="cod"
                    placeholder="1500"
                  />
                  {errors.cod && (
                    <div className="text-red-600 text-xs">
                      This field is required.
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* Row 4 */}
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 row">
                <label
                  className="text-sm sm:w-[6rem] w-full mr-4"
                  htmlFor="cbc"
                ></label>
                <div className="flex-1 w-full">
                  <button
                    type="submit"
                    className="bg-[#0047ba] text-white px-[3rem] py-[0.8rem] rounded-sm"
                  >
                    Calculate
                  </button>
                </div>
              </div>
              <div className="flex-1 row">
                <label
                  className="text-sm sm:w-[6rem] w-full mr-4"
                  htmlFor=""
                ></label>
                <div className="flex-1 w-full"></div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </form>
    </Modal>
  );
}
