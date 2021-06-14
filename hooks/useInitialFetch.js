import { useEffect } from "react";
import fetchProfile from "../functions/fetchProfile";

const useInitialFetch = (acno) => {
  useEffect(async () => {
    let profileData = await fetchProfile(acno);
    console.log(profileData);
  }, []);
};

export default useInitialFetch;
