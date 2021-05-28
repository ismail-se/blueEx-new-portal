const url = "http://benefitx.blue-ex.com/api/customerportal/city.php";

const fetchCities = async (countryCode) => {
  let data;

  await fetch(`${url}?country_code=${countryCode}`)
    .then((response) => response.json())
    .then((result) => (data = result.detail))
    .catch((error) => console.log("error", error));

  return data;
};

export default fetchCities;
