
const url = "http://benefitx.blue-ex.com/api/customerportal/shipment_trend.php";

const fetchShipmentTrend = async (acno, startDate, endDate) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "text/plain");

  var raw = `{"acno": "${acno}", "startdate": "${startDate}", "enddate": "${endDate}"}`;
  // '{"acno": "KHI-06366", "startdate": "01/02/2020", "enddate": "01/02/2021"}';

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const data = await fetch(url, requestOptions);
  const response = await data.json();
  return response;
};

export default fetchShipmentTrend;
