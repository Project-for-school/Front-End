import { Fragment } from "react";
import './footer.scss'

const Footer = () => {
    return (
        <Fragment>
            <div id="footer" style={{ background: "#212529" }}>
                <div class="container">
                    <footer class="py-5 text-bg-dark">
                        <div class="row">
                            <div class="col-6 col-md-2 mb-3">
                                <h5>Section</h5>
                                <ul class="nav flex-column">
                                    <li class="nav-item mb-2 mx-0">
                                        <a href="/" class="nav-link p-0" style={{ color: "#6c757d" }}>
                                            Home
                                        </a>
                                    </li>
                                    <li class="nav-item mb-2 mx-0">
                                        <a href="/" class="nav-link p-0" style={{ color: "#6c757d" }}>
                                            Features
                                        </a>
                                    </li>
                                    <li class="nav-item mb-2 mx-0">
                                        <a href="/" class="nav-link p-0" style={{ color: "#6c757d" }}>
                                            Pricing
                                        </a>
                                    </li>
                                    <li class="nav-item mb-2 mx-0">
                                        <a href="/" class="nav-link p-0" style={{ color: "#6c757d" }}>
                                            FAQs
                                        </a>
                                    </li>
                                    <li class="nav-item mb-2 mx-0">
                                        <a href="/" class="nav-link p-0" style={{ color: "#6c757d" }}>
                                            About
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div class="col-6 col-md-2 mb-3">
                                <h5>Section</h5>
                                <ul class="nav flex-column">
                                    <li class="nav-item mb-2 mx-0">
                                        <a href="/" class="nav-link p-0" style={{ color: "#6c757d" }}>
                                            Home
                                        </a>
                                    </li>
                                    <li class="nav-item mb-2 mx-0">
                                        <a href="/" class="nav-link p-0" style={{ color: "#6c757d" }}>
                                            Features
                                        </a>
                                    </li>
                                    <li class="nav-item mb-2 mx-0">
                                        <a href="/" class="nav-link p-0" style={{ color: "#6c757d" }}>
                                            Pricing
                                        </a>
                                    </li>
                                    <li class="nav-item mb-2 mx-0">
                                        <a href="/" class="nav-link p-0" style={{ color: "#6c757d" }}>
                                            FAQs
                                        </a>
                                    </li>
                                    <li class="nav-item mb-2 mx-0">
                                        <a href="/" class="nav-link p-0" style={{ color: "#6c757d" }}>
                                            About
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div class="col-6 col-md-2 mb-3">
                                <h5>Section</h5>
                                <ul class="nav flex-column">
                                    <li class="nav-item mb-2 mx-0">
                                        <a href="/" class="nav-link p-0" style={{ color: "#6c757d" }}>
                                            Home
                                        </a>
                                    </li>
                                    <li class="nav-item mb-2 mx-0">
                                        <a href="/" class="nav-link p-0" style={{ color: "#6c757d" }}>
                                            Features
                                        </a>
                                    </li>
                                    <li class="nav-item mb-2 mx-0">
                                        <a href="/" class="nav-link p-0" style={{ color: "#6c757d" }}>
                                            Pricing
                                        </a>
                                    </li>
                                    <li class="nav-item mb-2 mx-0">
                                        <a href="/" class="nav-link p-0" style={{ color: "#6c757d" }}>
                                            FAQs
                                        </a>
                                    </li>
                                    <li class="nav-item mb-2 mx-0">
                                        <a href="/" class="nav-link p-0" style={{ color: "#6c757d" }}>
                                            About
                                        </a>
                                    </li>
                                </ul>
                            </div>


                            <div class="col-md-5 offset-md-1 mb-3">
                                <form>
                                    <h5>
                                        Subscribe to our newsletter
                                    </h5>
                                    <p>
                                        Monthly digest of what's new and exciting from us.
                                    </p>
                                    <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                                        <label for="newsletter1" class="visually-hidden"></label>
                                        <input id="newsletter1" type="text" class="form-control mr-0.625"
                                            placeholder="Email address" />
                                        <button class="btn btn-primary" type="button">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                            <p>
                                &copy; 2022 Company, Inc. All rights reserved.
                            </p>
                            <ul class="list-unstyled d-flex">
                                <li class="ms-3">
                                    <a class="link-dark" href="/">
                                        <i class="icon-footer fs-4 text-white fa-brands fa-instagram"></i>
                                    </a>
                                </li>
                                <li class="ms-3">
                                    <a class="link-dark" href="/">
                                        <i class="icon-footer fs-4 text-white fa-brands fa-facebook"></i>
                                    </a>
                                </li>
                                <li class="ms-3">
                                    <a class="link-dark" href="/">
                                        <i class="icon-footer fs-4 text-white fa-brands fa-twitter"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </footer>
                </div>
            </div>
        </Fragment>
    );
}

export default Footer;