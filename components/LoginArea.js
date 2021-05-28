import { useRef, useState } from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { CircularProgress } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import loginUser from "../functions/loginUser";
import { useCookies } from "react-cookie";
import { useStateValue } from "../context/StateProvider";
import { actionTypes } from "../context/reducer";
import { useRouter } from "next/router";

const LoginArea = () => {
  const username = useRef(null);
  const password = useRef(null);
  const [show, setShow] = useState("password");
  const [isLoading, setIsLoading] = useState(false);
  const [incorrect, setIncorrect] = useState(false);
  const [cookie, setCookie] = useCookies(["user"]);
  const [{}, dispatch] = useStateValue();
  const router = useRouter();

  const [required, setRequired] = useState({
    username: "none",
    password: "none",
  });

  const handlePassword = () => {
    setShow(show === "text" ? "password" : "text");
  };

  const handleRequiredUsername = () => {
    if (incorrect) setIncorrect(false);
    const user = username.current.value;
    user === ""
      ? setRequired({ ...required, username: "block" })
      : setRequired({ ...required, username: "none" });
  };

  const handleRequiredPassword = () => {
    if (incorrect) setIncorrect(false);
    const pass = password.current.value;
    pass === ""
      ? setRequired({ ...required, password: "block" })
      : setRequired({ ...required, password: "none" });
  };

  const handleForm = async (e) => {
    e.preventDefault();
    const user = username.current.value;
    const pass = password.current.value;
    if (user === "" || user === null || pass === "" || pass === null) return;
    setIsLoading(true);
    const res = await loginUser(user, pass);
    if (res.status === "0") {
      setIsLoading(false);
      setIncorrect(true);
    } else {
      setIsLoading(false);
      setCookie("user", JSON.stringify(res), {
        path: "/",
        maxAge: 3600, // Expires after 1hr
        sameSite: true,
      });
      localStorage.setItem("password", password.current.value);
      dispatch({
        type: actionTypes.SET_USER,
        acno: res.acno,
        b_usrId: res.b_usrId,
        name: res.name,
        acc_type: res.type,
      });

      router.push("/dashboard");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center p-3">
      <img
        loading="lazy"
        width={150}
        height="auto"
        src="/images/logologin.svg"
        alt="BlueEX"
      />
      <form className="flex flex-col">
        {/* Incorrect Username or Password */}
        {incorrect && (
          <div
            className="flex w-[20rem] self-center border-2 border-red-500 px-3 py-2 text-red-500 rounded-md mb-3"
            onClick={() => setIncorrect(false)}
          >
            <small>Incorrect username or password. please try again!</small>
            <ClearIcon className="cursor-pointer" />
          </div>
        )}

        {/* Username */}
        <div className="mb-3">
          <input
            type="text"
            className="loginInput"
            ref={username}
            onChange={handleRequiredUsername}
            placeholder="Username"
          />
          <p
            className="text-red-500 ml-4"
            style={{ display: required.username }}
          >
            <small>This field is required</small>
          </p>
        </div>
        <div>
          <div className="relative mb-3">
            <input
              type={show}
              ref={password}
              onChange={handleRequiredPassword}
              className="loginInput"
              placeholder="Password"
            />
            {show === "password" ? (
              <VisibilityIcon
                className="absolute top-4 right-3 text-[#91899f]"
                onClick={handlePassword}
              />
            ) : (
              <VisibilityOffIcon
                className="absolute top-4 right-3 text-[#91899f]"
                onClick={handlePassword}
              />
            )}
            <p
              className="text-red-500 ml-4"
              style={{ display: required.password }}
            >
              <small>This field is required</small>
            </p>
          </div>
        </div>
        <p className="flex justify-center items-center text-center">
          <small className="font-semibold">
            Forgot password? Call Customer Service at
            <span className="block text-[#0047ba]">
              {" "}
              021-111-BLUE-EX (258339)
            </span>
          </small>
        </p>
        <button onClick={handleForm} className="roundedBtn">
          {isLoading ? (
            <CircularProgress className="text-white" size="20px" />
          ) : (
            "Sign In"
          )}
        </button>
      </form>
    </div>
  );
};

export default LoginArea;
