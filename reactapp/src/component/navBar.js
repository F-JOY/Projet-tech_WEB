import React from "react";

export default function NavBar() {
  return (
    <>
      <div class="bg-color">
        <nav class="navbar navbar-expand-sm navbar-light ">
          <a class="navbar-brand" href="#">
            <img src="/img/logo3.png" alt="..." class="logoform" />
          </a>
          <button
            class="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav me-auto mt-2 mt-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="#" aria-current="page">
                  Accueil <span class="visually-hidden">(current)</span>
                </a>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownId"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Nos Services
                </a>
                <div class="dropdown-menu" aria-labelledby="dropdownId">
                  <a class="dropdown-item" href="#">
                    Jardins
                  </a>
                  <a class="dropdown-item" href="#">
                    Mariages
                  </a>
                  <a class="dropdown-item" href="#">
                    Cadeaux
                  </a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownId"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Nos Contact
                </a>
                <div class="dropdown-menu" aria-labelledby="dropdownId">
                  <a class="dropdown-item" href="#">
                    Tel :+213 665440130
                  </a>
                  <a class="dropdown-item" href="#">
                    Adresse :Tichy RN9 - Béjaia{" "}
                  </a>
                </div>
              </li>
            </ul>
            <form class="d-flex my-2 my-lg-0 p-2 ">
              <button class="btn btn-color my-2 my-sm-0 " type="submit">
                Commander
              </button>
            </form>
          </div>
        </nav>
      </div>
    </>
  );
}
