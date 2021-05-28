const CancelShipment = async (usrid, acno, cnno) => {
  let data;

  let cndetail = "[";
  cnno.map((cn) => (cndetail += `{"cnno":"${cn}"},`));
  cndetail = cndetail.substring(0, cndetail.length - 1) + "]";

  var formdata = new FormData();
  formdata.append(
    "request",
    `{"cndetail":${cndetail},"acno":"${acno}","usrId":"${usrid}"}`
  );

  var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  await fetch(
    "http://portal.blue-ex.com/api1/customerportal/cancelshipment.py",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      data = result;
    })
    .catch((error) => console.log("error", error));

  return data;
};

export default CancelShipment;
