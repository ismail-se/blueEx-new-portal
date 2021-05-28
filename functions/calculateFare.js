import FormData from "form-data";

const calculateFare = async (
  acno,
  origin,
  destination,
  service,
  weight,
  cod
) => {
  let data;

  var formdata = new FormData();

  formdata.append(
    "request",
    `{"acno":"${acno}","origin":"${origin}","destination":"${destination}","service":"${service}","wgt":"${weight}","cod_amount":"${cod}"}`
  );

  console.log(
    `{"acno":"${acno}","origin":"${origin}","destination":"${destination}","service":"${service}","wgt":"${weight}","cod_amount":"${cod}"}`
  );

  var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  await fetch(
    "http://portal.blue-ex.com/api1/customerportal/calculatetarrif.py",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      data = result;
    })
    .catch((error) => console.log("error", error));

  return data;
};

export default calculateFare;
