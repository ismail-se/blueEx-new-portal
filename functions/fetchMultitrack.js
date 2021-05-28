const fetchMultitrack = async (no) => {
  let data;

  var formdata = new FormData();
  formdata.append(
    "request",
    '{"user":"tracking.user","password":"1e34a1a1f2386e28bd4c4bf920cd8653","ShipmentNumbers":[' +
      no +
      "]}"
  );

  var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  await fetch(
    "http://benefitx.blue-ex.com/api/customerportal/multi_tracking.php",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      data = result;
      console.log(result);
    })
    .catch((error) => console.log("error", error));

  return data;
};

export default fetchMultitrack;
