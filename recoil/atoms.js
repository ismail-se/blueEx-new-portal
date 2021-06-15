import { atom } from "recoil";

export const userInfo = atom({
  key: "userInfo",
  default: {
    acno: "",
    b_usrId: "",
    name: "",
    acc_type: "",
    address: "",
    cnic: "",
    cell: "",
  },
});
