import FormData from "form-data";

const fetchPickupList = async (acno) => {
  var formdata = new FormData();
  formdata.append("request", `{"acno":"${acno}"}`);

  let data;

  var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  await fetch(
    "http://benefitx.blue-ex.com/api/customerportal/getloadsheet.php",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      data = result;
    })
    .catch((error) => console.log("error", error));

  return data;
};

export default fetchPickupList;
