import { useState, useEffect } from "react";

const url = "http://benefitx.blue-ex.com/api/customerportal/city.php";

const useCities = (countryCode) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getCity = async () => {
      fetch(`${url}?country_code=${countryCode}`)
        .then((response) => response.json())
        .then((result) => setData(result.detail))
        .catch((error) => console.log("error", error));
    };

    getCity();
  }, [countryCode]);

  return data;
};

export default useCities;
