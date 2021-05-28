import FormData from "form-data";

const updateProfile = async (
  acno,
  usrid,
  name,
  accountTitle,
  address,
  cell,
  email,
  ntn,
  cnic,
  password
) => {
  var formdata = new FormData();
  formdata.append(
    "request",
    `{"acno":"${acno}","usrid":"${usrid}","name":"${name}","account_title":"${accountTitle}","address":"${address}","cell":"${cell}","email":"${email}","ntn":"${ntn}","cnic":"${cnic}","password":"${password}"}`
  );

  let data;

  var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  await fetch(
    "http://portal.blue-ex.com/api1/customerportal/customerprofile.py",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      data = result;
    })
    .catch((error) => console.log("error", error));

  return data;
};

export default updateProfile;
