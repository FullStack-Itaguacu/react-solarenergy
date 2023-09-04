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
                        </div>
                        <div className="col-md-12">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <div className="input-group">
                                        <span className="input-group-text">
                                            <FontAwesomeIcon icon={faEnvelope} />
                                        </span>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Email"
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
                                            type="password"
                                            className="form-control"
                                            placeholder="Senha"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                        
                        <div className="d-grid gap-2 col-4 mt-2 mx-auto" id="btn">
                            <input className="btn" value="Entrar" type="submit" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}