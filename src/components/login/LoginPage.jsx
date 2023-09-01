//import { FontAwersomeIcon } from 'react-fontawesome';
//import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
//import { faLock } from "@fortawesome/free-solid-svg-icons";


const LoginPage = () => {
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="row border rounded-5 p-3 bg-white shadow-none box-area">
            <div className="col-md-6 d-flex justify-content-center align-items-center flex-column left-box">
                <div className="feature-img">
                    <img
                        id="feature-img"
                        src="./src/assets/LoginImagem/imagemeolicasolar.png"
                        className="img-fluid"
                        alt="imagem de um telhado com painel solar e torre de energia eolica"
                        width="455px"
                    />
                </div>
            </div>

            <div className="col-md-6 right-box">
                <div className="row align-items-center">
                    <div className="col-md-12 d-flex justify-content-center align-items-center logo">
                        <img
                            id="logo"
                            src="./src/assets/LoginImagem/logo.png"
                            className="img-fluid"
                            alt="logo Solar Energy"
                            width="250px"
                        />
                    </div>
                    <div className="header-text mb-4 text-center">
                        <span className="d-block">Seja bem vindo</span>
                    </div>
                    <div className="input-container">
                        <input
                            id="input"
                            type="email"
                            className="form-control form-control-lg bg-light fs-6"
                            placeholder="Email"
                        />
                    </div>
                    <div className="input-container">
                        <input
                            id="input"
                            type="password"
                            className="form-control form-control-lg bg-light fs-6"
                            placeholder="Senha"
                        />
                    </div>
                    <div className="d-flex justify-content-center align-items-center mt-4">
                        <input
                            id="btn-login"
                            type="submit"
                            className="btn"
                            value="Entrar"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default LoginPage;
