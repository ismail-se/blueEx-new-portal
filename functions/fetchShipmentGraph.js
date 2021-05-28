import FormData from "form-data";

const url = "http://benefitx.blue-ex.com/api/customerportal/shipmentgraph.php";

const fetchShipmentGraph = async (acno, startDate, endDate) => {
  var formdata = new FormData();
  formdata.append(
    "request",
    `{"acno": "${acno}", "startdate": "${startDate}", "enddate": "${endDate}"}`
    // `{"acno": "KHI-00114", "startdate": "2020/02/01", "enddate": "2021/02/01"}`
  );

  const requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  const data = await fetch(url, requestOptions);
  const response = await data.json();
  return response;
};

export default fetchShipmentGraph;
