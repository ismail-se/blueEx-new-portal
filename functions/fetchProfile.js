const fetchProfile = async (acno) => {
  let data;

  var requestOptions = {
    method: "POST",
    redirect: "follow",
  };

  await fetch(
    `http://portal.blue-ex.com/api1/customerportal/viewprofile.py?acno=${acno}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      data = result;
    })
    .catch((error) => console.log("error", error));

  return data;
};

export default fetchProfile;
