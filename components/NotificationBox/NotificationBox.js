import styles from "./NotificationBox.module.css"
import Link from 'next/link';
import { useEffect } from "react";

const NotificationBox = ({display}) => {

    const selected = {
        color: "#0047ba",
        borderBottom: "1px solid #0047ba"
    }
    useEffect(()=>{
        let logs = document.querySelector("#logs");
        logs.style.display = "none";
    },[])
    const handleLogs = () => {
        let newsButton = document.querySelector(".news");
        let logsButton = document.querySelector(".logs");
        logsButton.style.color = "#0047ba";
        logsButton.style.borderBottom = "1px solid #0047ba";
        newsButton.style.color = "#575962";
        newsButton.style.borderBottom = "none";

        let news = document.querySelector("#news-alert");
        let logs = document.querySelector("#logs");
        logs.style.display = "block";
        news.style.display = "none";
    }
    const handleNews = () => {
        let newsButton = document.querySelector(".news");
        let logsButton = document.querySelector(".logs");
        newsButton.style.color = "#0047ba";
        newsButton.style.borderBottom = "1px solid #0047ba";
        logsButton.style.color = "#575962";
        logsButton.style.borderBottom = "none";

        let news = document.querySelector("#news-alert");
        let logs = document.querySelector("#logs");
        logs.style.display = "none";
        news.style.display = "block";
    }

    return ( 
        <div className={styles.notificationBox} style={{display: display}}>
            <div className={styles.notch}></div>
            <div className={styles.box}>
                <div className={styles.top}>
                    <div className={styles.text}>
                        <div className={styles.name}>3 News</div>
                        <div className={styles.small}>Notifications</div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.newsRow}>
                        <div className="news" style={selected} onClick={handleNews}>NEWS & ALERTS</div>
                        <div className="logs" onClick={handleLogs}>LOGS</div>
                    </div>
                    <div id="news-alert" className={styles.alert}>
                        <ul>
                            <div className={styles.row}>
                                <li>cutt-off time for pickups in Ramadan is 4.00 pm</li>
                                <div className={styles.time}>1 year ago</div>
                            </div>
                        </ul>
                    </div>
                    <div id="logs" className={styles.alert}>
                        <ul>
                            <h2>APPLICATION LOGS</h2>
                            <div className={styles.row}>
                                <li>admin system login</li>
                                <div className={styles.time}>1 year ago</div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NotificationBox;