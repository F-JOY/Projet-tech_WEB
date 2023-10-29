import React from "react";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <>
      <div className="bg-color">
        <nav className="navbar navbar-expand-sm navbar-light ">
          <a className="navbar-brand" href="/">
            <img src="/img/logo3.png" alt="..." className="logoform" />
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Accueil
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/bouquets" className="nav-link active">
                  Bouquets
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/fleurs" className="nav-link active">
                  Fleurs
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/compte" className="nav-link active">
                  Compte
                </Link>
              </li>
            </ul>
            <form className="d-flex my-2 my-lg-0 p-2 ">
              <button className="btn btn-color my-2 my-sm-0 " type="submit">
                Commander
              </button>
            </form>
          </div>
        </nav>
      </div>
    </>
  );
}
