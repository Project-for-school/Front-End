import './footer.scss'

const footer = () => {
  return (
    <div className="wrapper-footer-inner mt-auto">
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                Premium
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                Explore
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                Development
              </a>
            </li>
          </ul>
          <p className="text-center text-muted">&copy; 2022 Company, Inc</p>
        </footer>
      </div>
    </div>
  );
};

export default footer;
