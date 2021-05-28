const fetchSettlement = async (acno) => {
  const url =  `http://benefitx.blue-ex.com/api/customerportal/statement.php?acno=${acno}&hashkey=KaPdSgVkYp3s6v9y`;

  const data = await fetch(url);
  const response = await data.json();
  return response;
};

export default fetchSettlement;
