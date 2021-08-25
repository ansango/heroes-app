import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../auth/AuthProvider";

export const Navbar = () => {
  const {
    user: { name },
  } = useAuth();
  return (
    <nav className="navbar navbar-expand-md navbar-light container-lg py-5 fw-bold">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Asociaciones
        </Link>
        <button
          className="navbar-toggler border-white "
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="d-md-flex justify-content-between  collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/marvel"
            >
              Marvel
            </NavLink>

            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/dc"
            >
              DC
            </NavLink>
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/search"
            >
              Search
            </NavLink>
          </ul>
          <div className="d-md-flex ms-md-5 navbar-nav">
            <span className="nav-item nav-link text-danger">{name}</span>
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/login"
            >
              Logout
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
