import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ToggleTheme from "./ToggleTheme";
const Header = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    navigate("/auth/login");
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold" to="/">
            <img
              src="https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/logo.png?1738662131654"
              alt="Logo"
            />
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/categories" className="nav-link">
                  Categories 👉
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              {user ? (
                <li className="nav-item dropdown">
                  <button
                    className="nav-link dropdown-toggle d-flex align-items-center btn btn-link"
                    id="navbarDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ textDecoration: "none", color: "inherit" }}
                    type="button"
                  >
                    <img
                      src={`https://ui-avatars.com/api/?name=${user.username}`}
                      alt="avatar"
                      className="rounded-circle me-2"
                      style={{ width: "30px", height: "30px" }}
                    />
                    {user.username.length > 3
                      ? user.username.slice(0, 3) + "..."
                      : user.username}
                  </button>

                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to={`/me/profile/${user.id}`}
                      >
                        Profile
                      </NavLink>
                    </li>
                    <li>
                      <a
                        href="#logout"
                        className="dropdown-item"
                        onClick={(e) => {
                          e.preventDefault();
                          handleLogout();
                        }}
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink to="/auth/login" className="nav-link">
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/auth/register" className="nav-link">
                      Register
                    </NavLink>
                  </li>
                </>
              )}
              <li className="nav-item">
                <div className="nav-link">
                  <ToggleTheme />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
