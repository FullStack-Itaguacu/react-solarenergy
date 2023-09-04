import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/Auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
    const { authenticated, login } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit", { email, password });
        login(email, password); //intregração com o meu contexto / consequentemente com a minha api
    };



    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="row rounded-3">
                <div className="col-md-6 d-flex justify-content-center align-items-center flex-column left-box">
                    <div className="featured-img">
                        <img src="../src/assets/LoginImagem/imagemeolicasolar.png  " alt="imagem de um sistema solar com um sistema eolico" />
                    </div>
                    <p>{authenticated}</p>
                </div>

                <div className="col-md-6 d-flex justify-content-center align-items-center right-box">
                    <div className="row align-items-center">
                        <div className="col-md-12 d-flex justify-content-center align-items-center logo">
                            <img
                                src="../src/assets/LoginImagem/logo.png"
                                width="250px"
                                alt="logo solar energy"
                            />
                        </div>
                        <div className="header-text mb-4 text-center">
                            <p>Seja bem vindo</p>
                            <p>{String( authenticated )}</p>
                        </div>
                        <form className="input-container" onSubmit={handleSubmit}>
                            <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                            <input
                                id="input"
                                type="text"
                                className="form-control mb-3"
                                placeholder="E-mail"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <div className="input-container">
                                <FontAwesomeIcon icon={faLock} className="input-icon" />
                                <input
                                    id="input"
                                    type="password"
                                    className="form-control"
                                    placeholder="Senha"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </form>
                        <div className="d-grid gap-2 col-4 mt-2 mx-auto" id="btn">
                            <input id="btn" className="btn" value="Entrar" type="submit" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}