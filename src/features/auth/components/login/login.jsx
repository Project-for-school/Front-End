import { useState } from "react";
import Header from "../../../../components/layoutInner/header/header";
import Footer from "../../../../components/layoutInner/footer/footer";
import InputFields from "../../../../components/inputFields/input";
import "./login.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <Header />
      <form>
        <div id="wrapper-login">
          <div id="login">
            <div className="heading">
              <img
                src="https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo.c36eaf5e6.svg"
                alt=""
              />
              <div className="form-group">
                <InputFields
                  data={username}
                  setData={setUsername}
                  classLable="form-label float-start"
                  className="form-control"
                  lable="Username"
                />
                <InputFields
                  data={password}
                  setData={setPassword}
                  classLable="form-label float-start mt-2"
                  className="form-control"
                  lable="Password"
                />
              </div>

              <button type="submit" className="btn btn-primary mb-2">
                Sign In
              </button>
              <div className="action">
                <div className="help">
                  <a href="" className="link-color">
                    Forgot Password?
                  </a>
                </div>
                <div className="help">
                  <a href="" className="link-color">
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Login;
