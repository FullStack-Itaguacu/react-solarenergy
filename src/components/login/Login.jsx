import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock, faUserLock } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row rounded-3 shadow box-area">
        <div className="col-md-6 d-flex justify-content-center align-items-center flex-column left-box">
          <div className="featured-img">
            <img />
          </div>
        </div>

        <div className="col-md-6 d-flex justify-content-center align-items-center right-box">
          <div className="row align-items-center">
            <div className="col-md-12 d-flex justify-content-center align-items-center logo">
              <img
                src="src/img/Logo.png"
                width="250px"
                alt="logo solar energy"
              />
            </div>
            <div className="header-text mb-4 text-center">
              <p>Seja bem vindo</p>
            </div>
            <div className="input-container">
              <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
              <input
                id="input"
                type="text"
                className="form-control form-control-lg bg-light fs-6"
                placeholder="E-mail"
              />
            </div>
            <div className="input-container">
              <FontAwesomeIcon icon={faLock} className="input-icon" />
              <input
                id="input"
                type="text"
                className="form-control form-control-lg bg-light fs-6"
                placeholder="Senha"
              />
            </div>
            <div className="d-grid gap-2 col-4 mt-2 mx-auto" id="btn">
              <input id="btn" className="btn" value="Entrar" type="submit" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
