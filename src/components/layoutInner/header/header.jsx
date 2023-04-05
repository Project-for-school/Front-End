import { useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  const [active, setActive] = useState(0);
  const arrNav = ["Pemium", "Explore", "Problems", "Contest", "Discuss"];
  const arrNav2 = ["Register", "Contest", "Sign in"];
  return (
    <div>
      <nav className="header">
        <div className="container">
          <header className="d-flex justify-content-center py-3">
            <div className="header-logo">
              <Link to="/">
                <img
                  src="https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo-dark.e99485d9b.svg"
                  alt=""
                  className="header-logo"
                />
              </Link>
            </div>

            <ul className="nav nav-pills nav-left">
              {arrNav.map((item, index) => (
                <li key={index} className="nav-item">
                  <Link
                  to={`/${item}`}
                    key={item}
                    onClick={() => setActive(index)}
                    className={active == index ? "nav-link active" : "nav-link"}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="nav nav-pills nav-right">
              {arrNav2.map((item, index) => (
                <li key={index} className="nav-item">
                  <a className="nav-link">{item}</a>
                </li>
              ))}
            </ul>
          </header>
        </div>
      </nav>
    </div>
  );
};

export default Header;
