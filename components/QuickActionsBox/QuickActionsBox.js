import styles from "./QuickActionBox.module.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Link from "next/link";

const QuickActionBox = ({ display, show, setShow }) => {
  return (
    <div className={styles.quickAction} style={{ display: display }}>
      <div className={styles.notch}></div>
      <div className={styles.box}>
        <div className={styles.top}>
          <div className={styles.text}>
            <div className={styles.name}>Quick Actions</div>
            <div className={styles.small}>Shortcuts</div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.row}>
            <Link href="/create-shipment">
              <div className={styles.col}>
                <img src="/icons/add-file.svg" alt="" />
                <div className={styles.title}>Create Shipment</div>
              </div>
            </Link>
            <Link href="/tracking">
              <div className={styles.col}>
                <img src="/icons/calendar.svg" alt="" />
                <div className={styles.title}>Multi-Track</div>
              </div>
            </Link>
          </div>
          <div className={styles.row}>
            <Link href="/upload-booking">
              <div className={styles.col}>
                <img src="/icons/folder.svg" alt="" />
                <div className={styles.title}>Bulk Import</div>
              </div>
            </Link>
            <a href="/files/StarterGuide.pdf" target="_blank">
              <div className={styles.col}>
                <img src="/icons/medical-report.svg" alt="" />
                <div className={styles.title}>Starter Guide</div>
              </div>
            </a>
          </div>
          <div className={styles.row}>
            <div className={styles.col} onClick={() => setShow(true)}>
              <img src="/icons/folder.svg" alt="" />
              <div className={styles.title}>Calculate Fare</div>
            </div>

            <a href="/files/CityListNew.xls" download target="_blank">
              <div className={styles.col}>
                <img src="/icons/location.svg" alt="" />
                <div className={styles.title}>Locations</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickActionBox;
