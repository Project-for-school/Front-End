import { Fragment } from "react";
import "./homePage.scss";
import tiktokImg from "../../../assets/imgs/tiktok.webp"

const HomePage = () => {
  return (
    <Fragment>
      <div>
        <div className="intro-chapter-base">
          <div className="container">
            <div className="row">
              <div className="col-md-6 explore-box">
                <div className="cube">
                  <div className="big">
                    <span style={{ $i: 0, $clr: "rgb(99, 1, 99)" }}></span>
                    <span style={{ $i: 1, $clr: "purple" }}></span>
                    <span style={{ $i: 2, $clr: "rgb(99, 1, 99)" }}></span>
                    <span style={{ $i: 3, $clr: "purple" }}></span>
                    <span
                      className="top"
                      style={{ $clr: "rgb(160, 2, 160)" }}
                    ></span>
                  </div>
                </div>

                <div className="cube2">
                  <div className="big">
                    <span style={{ $i: 0, $clr: "rgb(99, 1, 99)" }}></span>
                    <span style={{ $i: 1, $clr: "purple" }}></span>
                    <span style={{ $i: 2, $clr: "rgb(99, 1, 99)" }}></span>
                    <span style={{ $i: 3, $clr: "purple" }}></span>
                    <span
                      className="top"
                      style={{ $clr: "rgb(160, 2, 160)" }}
                    ></span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 text-center intro">
                <div className="intro-title text-white">
                  <h1 className="d-flex align-items-center justify-content-center">
                    <span style={{ $i: 1 }}>A</span>
                    <span style={{ $i: 2 }}>W</span>
                    <span style={{ $i: 3 }}>a</span>
                    <span style={{ $i: 4 }}>y</span>
                    <span style={{ $i: 5 }}>T</span>
                    <span style={{ $i: 6 }}>o</span>
                    <span style={{ $i: 7 }}>L</span>
                    <span style={{ $i: 8 }}>e</span>
                    <span style={{ $i: 9 }}>a</span>
                    <span style={{ $i: 10 }}>r</span>
                    <span style={{ $i: 11 }}>n</span>
                  </h1>
                </div>
                <div
                  className="intro-content mb-2.5"
                  style={{ color: "#919191" }}
                >
                  <p>
                    LeetCode is the best platform to help you enhance your
                    skills, expand your knowledge and prepare for technical
                    interviews.
                  </p>
                </div>
                <div className="button position-relative d-flex justify-content m-auto">
                  <span className="top-0 left-0 w-100 h-100 fw-bold position-absolute d-flex justify-content-center align-items-center rounded-pill cursor-pointer">
                    <a href="/" className="text-white text-decoration-none">
                      Create Account
                      <i className="icon-btn fa-solid fa-chevron-right"></i>
                    </a>
                  </span>
                  <span className="top-0 left-0 w-100 h-100 fw-bold position-absolute d-flex justify-content-center align-items-center rounded-pill cursor-pointer z-2">
                    <a href="/" className="text-white text-decoration-none">
                      Create Account
                      <i className="icon-btn fa-solid fa-chevron-right"></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="explore-chapter-base w-100 d-flex justify-content-center align-items-center position-relative" id="explore">
          <div class="container">
            <div class="row">
              <div class="col-md-6 z-2 position-relative">
                <div class="base position-absolute">
                  <div class="base-title">
                    <h2>Started Exploring</h2>
                  </div>
                  <div class="base-content">
                    <p>
                      Explore is a well-organized tool that helps you get the most out of LeetCode by providing structure to guide your progress towards the next step in your
                      programming career.</p>
                  </div>
                  <div class="">
                    <a href="/" class="base-link">Get Started
                      <i class="icon-btn fa-solid fa-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-6 z-2">
                <div id="box" className="position-relative m-auto">
                  <div class="card position-absolute d-flex justify-content-center overflow-hidden">
                    <img className="w-100 h-100" src={tiktokImg} alt="pic" />
                  </div>
                  <div class="card position-absolute d-flex justify-content-center overflow-hidden">
                    <img className="w-100 h-100" src={tiktokImg} alt="pic" />
                  </div>
                  <div class="card position-absolute d-flex justify-content-center overflow-hidden">
                    <img className="w-100 h-100" src={tiktokImg} alt="pic" />
                  </div>
                  <div class="card position-absolute d-flex justify-content-center overflow-hidden">
                    <img className="w-100 h-100" src={tiktokImg} alt="pic" />
                  </div>
                  <div class="card position-absolute d-flex justify-content-center overflow-hidden">
                    <img className="w-100 h-100" src={tiktokImg} alt="pic" />
                  </div>
                  <div class="card position-absolute d-flex justify-content-center overflow-hidden">
                    <img className="w-100 h-100" src={tiktokImg} alt="pic" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="feature-chapter-base" id="feature">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <ul class="list-icon-feature d-flex list-unstyled">
                  <li>
                    <i class="fa-sharp fa-solid fa-phone rounded-circle" style={{ $color: "rgb(118, 118, 233)" }}></i>
                  </li>
                  <li>
                    <i class="fa-solid fa-people-group rounded-circle" style={{ $color: "rgb(0, 255, 0)" }}></i>
                  </li>
                  <li>
                    <i class="fa-solid fa-trophy rounded-circle" style={{ $color: "rgb(255, 186, 58)" }}></i>
                  </li>
                </ul>
                <div class="feature-title">
                  <h3>Questions, Community & Contests</h3>
                </div>
                <div class="feature-content">
                  <p>
                    Over 2600 questions for you to practice. Come and join one of the largest tech communities with hundreds of thousands of active users and participate in our
                    contests to challenge yourself and earn rewards.
                  </p>
                </div>
                <div class=" feature-more">
                  <a href="/" class="base-link">
                    View Questions
                    <i class="icon-btn fa-solid fa-chevron-right"></i>
                  </a>
                </div>
              </div>
              <div class="col-md-6 text-right feature-right">
                <ul class="list-icon-feature d-flex list-unstyled list-icon-feature-2 justify-content-end">
                  <li>
                    <i class="fa-solid fa-suitcase rounded-circle" style={{ $color: "rgb(118, 118, 233)" }}></i>
                  </li>
                  <li>
                    <i class="fa-solid fa-calculator rounded-circle" style={{ $color: "rgb(0, 255, 0)" }}></i>
                  </li>
                </ul>
                <div class="feature-title feature-title-2">
                  <h3>Companies & Candidates</h3>
                </div>
                <div class="feature-content">
                  <p>
                    Not only does LeetCode prepare candidates for technical interviews, we also help companies identify top technical talent. From sponsoring contests to providing online assessments and training, we offer numerous services to businesses.
                  </p>
                </div>
                <div class=" feature-more feature-more-2">
                  <a href="/" class="base-link feature-link">
                    Business Opportunities
                    <i class="icon-btn fa-solid fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
