import { useState } from "react";
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
              <a href="">
                <img src="./logo.png" alt="" className="header-logo" />
              </a>
            </div>

            <ul className="nav nav-pills nav-left">
              {arrNav.map((item, index) => (
                <li key={index} className="nav-item">
                  <a
                    onClick={() => setActive(index)}
                    className={active == index ? "nav-link active" : "nav-link"}
                  >
                    {item}
                  </a>
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
