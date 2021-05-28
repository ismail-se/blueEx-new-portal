import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import styles from "./TrackDetailModal.module.css";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { useEffect, useState } from "react";
import FormData from "form-data";

const TrackDetailModal = (props) => {
  const [data, setData] = useState(null);
  var formdata = new FormData();
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

  // useEffect(()=>{console.log(data)},[data])

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          className={styles.title}
          id="contained-modal-title-vcenter"
        >
          TRACK DETAIL - {props.cn}
        </Modal.Title>
      </Modal.Header>
      {data !== null && (
        <>
          <Modal.Body className={styles.body}>
            <div className={styles.details}>
              <div className={styles.col}>
                <h5>STATUS</h5>
                <div
                  className={`
                  ${styles.status} `}
                >
                  {data.status.toUpperCase()}
                </div>
              </div>
              <div className={styles.col}>
                <h5>CN#</h5>
                <div className={styles.status}>{data.cnno}</div>
              </div>
              <div className={styles.col}>
                <h5>DATE</h5>
                <div className={styles.status}>{data.cndate}</div>
              </div>
              <div className={styles.col}>
                <h5>CUSTOMER</h5>
                <div className={styles.status}>{data.con_name}</div>
              </div>
              <div className={styles.col}>
                <h5>PRICE</h5>
                <div className={styles.status}>
                  COD Charges: {data.codamount} <br />
                  Blue-Ex Charges: {data.charges}
                </div>
              </div>
              <div className={styles.col}>
                <h5>FROM TO</h5>
                <div className={styles.status}>
                  {data.origin} <ArrowRightAltIcon /> {data.destination}
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Body>
            <div className={styles.popheading}>
              <h4>BLUEEX SHIPPING LABEL: {props.cn}</h4>
            </div>
            <div className={styles.shipdetails}>
              {data.trackingdetail.map((d) => (
                <span
                  key={`${d.status_date}${d.status_time}-${d.status_message}`}
                >
                  {d.status_date} {d.status_time} - {d.status_message}{" "}
                </span>
              ))}
            </div>
          </Modal.Body>
        </>
      )}
    </Modal>
  );
};

export default TrackDetailModal;
