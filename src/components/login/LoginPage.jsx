//import { FiInbox, FiLock } from "react-icons/fi";

export default function Login() {
    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div className="row border p-3 bg-white box-area">
                <div className="col-md-6 d-flex justify-content-center align-items-center flex-column left-box">
                    <div className="featured-img">
                        <img
                            className="img-fluid"
                            src="./src/assets/LoginImagem/imagemeolicasolar.png"
                            alt="imagem de um telhado com sistema de painel solar e torre de energia eolica"
                        />
                    </div>
                </div>

                <div className="col-md-6 right-box">
                    <div className="row align-items-center">
                        <div className="col-md-12 d-flex justify-content-center align-items-center">
                            <img
                                id="logo"
                                src="./src/assets/LoginImagem/logo.png"
                                alt="logo solar energy"
                            />
                        </div>
                        <div className="header-text text-center">
                            <p>Seja bem vindo</p>
                        </div>
                        <div className="input-container">
                            <span className="input-icon">
                                <img className="imagem-email"
                                    src="./src/assets/LoginImagem/email.png"
                                />
                            </span>
                            <input
                                id="input"
                                type="text"
                                className="form-control"
                                placeholder="E-mail"
                            />
                        </div>
                        <div className="input-group">
                            <span className="input-icon">
                                <img className="imagem-senha"
                                    src="./src/assets/LoginImagem/senha.png"
                                />
                            </span>
                            <input
                                type="text"
                                className="form-control"
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

/*export default function Login() {
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
                        <span className="input-icon">
                            <FiInbox />
                        </span>
                        <input
                            id="input"
                            type="email"
                            className="form-control form-control-lg bg-light fs-6"
                            placeholder="Email"
                        />
                    </div>
                    <div className="input-container">
                        <span className="input-icon">
                            <FiLock />
                        </span>
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
}*/
