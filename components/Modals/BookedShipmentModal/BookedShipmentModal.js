import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import styles from "./BookedShipmentModal.module.css";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { useEffect, useState } from "react";
import FormData from "form-data";

const BookedShipmentModal = (props) => {
  const [data, setData] = useState(null);
  var formdata = new FormData();
  console.log(formdata);
  useEffect(async () => {
    formdata.append("request", `{"cnno":"${props.cn}"}`);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    await fetch(
      "http://benefitx.blue-ex.com/api/customerportal/tracking_info.php",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setData(result.detail[0]))
      .catch((error) => console.log("error", error));
  }, [props.cn]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className={styles.header}>
        <Modal.Title
          className={styles.title}
          id="contained-modal-title-vcenter"
        >
          Please select only booked shipments
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className={styles.body}>
        <button onClick={props.onHide}>OK</button>
      </Modal.Body>
    </Modal>
  );
};

export default BookedShipmentModal;
