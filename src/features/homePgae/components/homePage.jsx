import "./homePage.scss";

const HomePage = () => {
  return (
    <>
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
      </div>
    </>
  );
};

export default HomePage;
