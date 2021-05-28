const url = "http://benefitx.blue-ex.com/api/customerportal/login.php";

const loginUser = async (username, password) => {
  let userDetail;
  const data = await fetch(
    `${url}?request={"username":"${username}","password":"${password}"}`
  );
  const response = await data.json();
  return response;
};

export default loginUser;
