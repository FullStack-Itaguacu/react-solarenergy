// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const Login =() => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit", { email, password });
      };

    return (
        <div className="box-container">
            <div className="row">
                <div className="col-md-6 left-box">
                    <div className="featured-img">
                        <img src="../src/assets/LoginImagem/imagemeolicasolar.png  " alt="imagem de um sistema solar com um sistema eolico" />
                    </div>
                </div>

                <div className="d-flex justify-content-center align-items-center right-box">
                    <div className="row align-items-center">
                        <div className="col-md-12 d-flex justify-content-center align-items-center logo">
                            <img
                                src="../src/assets/LoginImagem/logo.png"
                                alt="logo solar energy"
                            />
                        </div>
                        <div className="header-text mb-4 text-center">
                            <p>Seja bem vindo</p>
                        </div>
                        <div className="col-md-12">
                            <form className="form" onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <div className="input-group">
                                        <span className="input-group-text">
                                            <FontAwesomeIcon icon={faEnvelope} />
                                        </span>
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="E-mail"
                                            className="form-control"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="input-group">
                                        <span className="input-group-text">
                                            <FontAwesomeIcon icon={faLock} />
                                        </span>
                                        <input
                                            id="password"
                                            type="password"
                                            placeholder="Senha"
                                            className="form-control"
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className="actions">
                                        <button type="submit" className="btn">
                                        Entrar
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;