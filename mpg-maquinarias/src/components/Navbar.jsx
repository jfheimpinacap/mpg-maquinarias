import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Navbar() {
  return (
    <>
      {/* Franja superior */}
      <div className="bg-dark text-white text-end px-4 py-1" style={{ fontSize: '0.9rem' }}>
        📞 +56 9 1234 5678 &nbsp; 📞 +56 9 8765 4321
      </div>

      {/* Menú principal */}
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'rgb(33, 37, 41)' }}>
        <div className="container">
          <a className="navbar-brand text-white" href="#inicio">
            <img src="/logos/mpg-maq-logo-blanco.svg" alt="MPG Logo" height="50" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMain"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarMain">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Arriendo Alzahombres</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" href="#" data-bs-toggle="dropdown">
                  Empresas
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">MPG Electromecánica</a></li>
                  <li><a className="dropdown-item" href="#">MPG Energía</a></li>
                  <li><a className="dropdown-item" href="#">MPG Climatización</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Contacto</a>
              </li>
              <li className="nav-item">
                <button className="btn btn-warning ms-3" data-bs-toggle="modal" data-bs-target="#cotizarModal">
                  Cotizar ahora
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
