import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiLock } from "react-icons/fi";
import { PiEnvelopeLight } from "react-icons/pi";
import usersData from "../../../database/data.json";
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./cadastroUsuario.module.css";

const CadastrarUsuario = () => {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [name, setName] = useState("");
        const [message, setMessage] = useState(""); // Mensagem de sucesso
        const navigate = useNavigate();
      
        // Função para verificar se a senha atende aos requisitos
        const isValidPassword = (password) => {
          const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
          return regex.test(password);
        };

        // Função para verificar se o E-mail atende aos requisitos
        const isValidEmail = (email) => {
            const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
            return regex.test(email);
          };
      
        const handleCdastroSuccess = (user) => {
            setMessage("Usuário criado com sucesso.");
      
            // Redirecione para a página de login após um breve atraso
            setTimeout(() => {
                navigate("/login");
            }, 1500); // Redireciona após 1,5 segundo
        };
      
        const handleSubmit = (e) => {
            e.preventDefault();
      
            // Verifique se o usuário existe no arquivo JSON
            const user = usersData.usuarios.find((user) => user.email === email);

            // Verifique se o email atende aos requisitos
            if (!isValidEmail(email)) {
                setMessage("O email deve ser um email válido.");
            
                setTimeout(() => {
                    window.location.reload();
                }, 5000); // Redireciona após 5 segundos
            
                return;
            }

            // Verifique se a senha atende aos requisitos
            if (!isValidPassword(password)) {
                setMessage("A senha deve ter no mínimo 6 digitos (incluindo 1 letra maiúscula, 1 letra minúscula e 1 número.");
            
                setTimeout(() => {
                    window.location.reload();
                }, 5000); // Redireciona após 5 segundos
            
                return;
            }
      
            // Chame a função de sucesso de cadastro
            handleCdastroSuccess(user);
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
                            <p className="saudacao">Seja bem vindo</p>
                        </div>
                        <div className="col-md-12">
                            <form className="form" onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <div className="input-group">
                                        <span className="input-group-text">
                                            <PiEnvelopeLight  />
                                        </span>
                                        <input
                                            id="name"
                                            type="text"
                                            name="name"
                                            placeholder="Nome completo"
                                            className="form-control"
                                            required
                                            value={name}
                                            //onChange={(e) = setName(e.target.value)}
                                             
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="input-group">
                                        <span className="input-group-text">
                                            <PiEnvelopeLight  />
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
                                            <FiLock />
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
                                        <button type="submit" className="login-btn">
                                            Cadastrar
                                        </button>
                                    </div>
                                    <div className="message">
                                        {message}
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

export default CadastrarUsuario;