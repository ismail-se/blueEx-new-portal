import { useState, useEffect } from "react";

const url = "http://benefitx.blue-ex.com/api/customerportal/country.php";

const useCountries = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getCountries = async () => {
      fetch(`${url}`)
        .then((response) => response.json())
        .then((result) => setData(result.detail))
        .catch((error) => console.log("error", error));
    };

    getCountries();
  }, []);

  return data;
};

export default useCountries;
