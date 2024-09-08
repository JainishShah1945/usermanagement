import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const handlelogout = () => {
    alert("Are you sure you want to logout?");
    localStorage.removeItem("authtoken");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid gap-lg-5">
        <div
          className="navbar fs-1 fw-bold ms-lg-5 me-lg-5 hihi"
          to="#"
          style={{ letterSpacing: "1px" }}
        >
          Freakers
        </div>
        <form className="d-flex ms-lg-5 me-lg-auto">
          <input
            className="form-control w-75 me-lg-5"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse
        
        
        
        "
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4 me-lg-auto">
            <li className="nav-item">
              <Link
                className="nav-link active fs-4 fw-bold"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-4 fw-bold" to="/task">
                Task
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fs-4 fw-bold" to="/aboutus">
                About US
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-4 fw-bold" to="/contact">
                Contact Us
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle  fs-5 fw-bold"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Activities
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/pending">
                    Pending Task
                  </Link>
                </li>
                <hr className="dropdown-divider"></hr>
                <li>
                  <Link className="dropdown-item" to="/completed">
                    Completed Task
                  </Link>
                </li>
              </ul>
            </li>
            <div>
              {!localStorage.getItem("authtoken") ? (
                <Link to="/signup">
                  <button className="btn btn-success ms-lg-5 fs-5">
                    SignUp
                  </button>
                </Link>
              ) : (
                <Link to="/signup">
                  <button
                    className="btn btn-danger ms-lg-5 fs-5"
                    onClick={handlelogout}
                  >
                    Logout
                  </button>
                </Link>
              )}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
