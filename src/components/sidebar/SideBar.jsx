import React from "react";
import Logo from "../../img/logo.png";
import { Link } from "react-router-dom";

// diabetes
const SideBar = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark col-2"
      style={{ height: "100vh" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <img src={Logo} width={50} alt="" />
        <span className="fs-4">My Lab</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to={"/home"} className="nav-link active" aria-current="page">
            <i class="fa-solid fa-house mr-2"></i>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <button
            className="btn btn-toggle align-items-center rounded text-white"
            data-bs-toggle="collapse"
            data-bs-target="#dashboard-collapse"
            aria-expanded="true"
          >
            <i class="fa-solid fa-chevron-down mr-2"></i>
            Report
          </button>
          <div className="collapse" id="dashboard-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ml-7">
              <li>
                <Link to="orders" className="nav-link text-white">
                  Blood Report
                </Link>
              </li>
              <li>
                <Link to="products" className="nav-link text-white">
                  Urin Report
                </Link>
              </li>
              <li>
                <Link to="order" className="nav-link text-white">
                  Stool Report
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link to="orders" className="nav-link text-white">
            <i class="fa-solid fa-heart-pulse mr-2"></i>
            Heart Report
          </Link>
        </li>
        <li>
          <Link to="diabetes" className="nav-link text-white">
            <i class="fa-solid fa-cubes-stacked mr-2"></i>
            diabetes Status
          </Link>
        </li>
        <li>
          <Link to="order" className="nav-link text-white">
            <i class="fa-solid fa-compress mr-2"></i>
            Pressure Level
          </Link>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <Link
          to="/profile"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            className="rounded-circle me-2"
            width="32"
            height="32"
          />
          <strong>Dipesh</strong>
        </Link>
        <ul
          className="dropdown-menu dropdown-menu-dark text-small shadow"
          aria-labelledby="dropdownUser1"
        >
          <li>
            <Link className="dropdown-item" to="/project">
              New project...
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to={"setting"}>
              Settings
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/profile">
              Profile
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <Link className="dropdown-item" to="/logout">
              Sign out
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
