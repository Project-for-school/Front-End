import { useState } from "react";

import InputFielfs from "../../../../components/inputFields/input";
import "./register.scss";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <>
      <div id="wrapper-register">
        <div className="justify-content-center align-content-center d-flex pt-2">
          <div className="container">
            <img
              src="https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo.c36eaf5e6.svg"
              alt=""
            />
            <div className="form-signup">
              <InputFielfs
                className="modal-input"
                lable="Username"
                data={username}
                setData={setUsername}
                classLable="form-label float-start"
              />
              <InputFielfs
                className="modal-input"
                lable="Password"
                data={password}
                setData={setPassword}
                classLable="form-label float-start"
              />
              <InputFielfs
                className="modal-input"
                lable="Confirm Password"
                data={password}
                setData={setPassword}
                classLable="form-label float-start"
              />
              <InputFielfs
                className="modal-input"
                lable="Email"
                data={email}
                setData={setEmail}
                classLable="form-label float-start"
              />

              <button id="btn-sign-up">
                <div className="sign-up">Sign Up</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
