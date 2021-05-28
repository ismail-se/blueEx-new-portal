const CreatePickup = async (usrid, acno, cnno) => {
  let data;

  let cndetail = "[";
  cnno.map((cn) => (cndetail += `{"cnno":"${cn}"},`));
  cndetail = cndetail.substring(0, cndetail.length - 1) + "]";

  var formdata = new FormData();
  formdata.append(
    "request",
    `{"acno":"${acno}","usrid":"${usrid}","cndetail":${cndetail}}`
  );

  var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  await fetch(
    "http://benefitx.blue-ex.com/api/customerportal/createloadsheet.php",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      data = result;
    })
    .catch((error) => console.log("error", error));

  return data;
};

export default CreatePickup;
