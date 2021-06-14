import { atom } from "recoil";

const userInfo = atom({
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

