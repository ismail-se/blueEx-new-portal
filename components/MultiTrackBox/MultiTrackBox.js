import styles from "./MultiTrackBox.module.css";

const MultiTrackBox = ({
  details,
  cnDetail,
  cust_add,
  cust_name,
  cust_ref,
  shipmentnumber,
}) => {
  return (
    <div className={styles.multiTrackBox}>
      <div className={styles.head}>
        <h4>{shipmentnumber}</h4>
      </div>
      <div className={styles.images}>
        <ul>
          <li>
            <div
              className={`${styles.circle} ${
                details.status >= 1 && styles.blue
              }`}
            >
              <img src="/images/booked.png" alt="" />
            </div>
            <p>Booked</p>
          </li>

          <li
            className={`${styles.line} ${
              details.status >= 2 && styles.blueLine
            }`}
          >
            <div
              className={`${styles.circle} ${
                details.status >= 2 && styles.blue
              }`}
            >
              <img src="/images/recevied.png" alt="" />
            </div>
            <p>Received at BlueEx</p>
          </li>

          <li
            className={`${styles.line} ${
              details.status >= 3 && styles.blueLine
            }`}
          >
            <div
              className={`${styles.circle} ${
                details.status >= 3 && styles.blue
              }`}
            >
              <img src="/images/intransit.png" alt="" />
            </div>
            <p>In Transit</p>
          </li>

          <li
            className={`${styles.line} ${
              details.status >= 4 && styles.blueLine
            }`}
          >
            <div
              className={`${styles.circle} ${
                details.status >= 4 && styles.blue
              }`}
            >
              <img src="/images/delivery.png" alt="" />
            </div>
            <p>Out For Delivery</p>
          </li>

          <li
            className={`${styles.line} ${
              details.status >= 5 && styles.blueLine
            }`}
          >
            <div
              className={`${styles.circle} ${
                details.status >= 5 && styles.blue
              }`}
            >
              <img src="/images/delivered.png" alt="" />
            </div>
            <p>Delivered</p>
          </li>
        </ul>
      </div>
      <div className={styles.text}>
        <div className={styles.top}>
          <h4>PLEASE SEE YOUR TRACKING INFORMATION BELOW:</h4>
        </div>
        <div className={styles.body}>
          <p className={styles.blue}>
            BlueEX Shipping Label : {shipmentnumber}
          </p>
          {cnDetail.map((cn) => (
            <p key={cn.statustime}>
              {cn.statusdate} ( {cn.statustime} ) - {cn.statusmessage}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MultiTrackBox;
