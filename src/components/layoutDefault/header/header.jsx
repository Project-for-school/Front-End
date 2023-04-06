import { Fragment } from "react";
import './header.scss';
// import style from './header.css'

const Header = () => {
    return (
        <Fragment>
            <header className="p-3 text-bg-dark">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-space-center justify-content-lg-start">
                        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                            {/* <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                                <use xlink:href="#bootstrap" />
                            </svg> */}
                        </a>

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li className="rounded-pill"><a href="/" className="nav-link px-2 text-white rounded-pill">
                                Home
                            </a></li>
                            <li className="rounded-pill"><a href="/" className="nav-link px-2 text-white rounded-pill">
                                Premium
                            </a></li>
                            <li className="rounded-pill"><a href="/" className="nav-link px-2 text-white rounded-pill">
                                Explore
                            </a></li>
                            <li className="rounded-pill"><a href="/" className="nav-link px-2 text-white rounded-pill">
                                Products
                            </a></li>
                            <li className="rounded-pill"><a href="/" className="nav-link px-2 text-white rounded-pill">
                                Development
                            </a></li>
                        </ul>

                        <div className="d-flex">

                            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                                <input type="search" className="form-control form-control-dark text-bg-dark"
                                    placeholder="Search..." aria-label="Search" />
                            </form>

                            <button type="button" className="btn btn-outline-light me-2 mr-0.5 rounded-pill border border-0">
                                Login
                            </button>
                            <button type="button" className="btn btn-warning rounded-pill">
                                Sign-up
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </Fragment >
    );
}

export default Header;