import { useState } from "react";
import "./menu-lateral.css";

export const MenuLateral = () => {
  const [activeItem, setActiveItem] = useState(null);
  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="box">
      <div className="side-menu">
        <img className="logo" alt="Logo" src="src/components/menu-lateral/imagens/logo-menu-bg-branco.png" />
        <div className="list">
            <div className={`dashboard menu-item ${activeItem === "dashboard" ? "active" : ""}`} 
              onClick={() => handleItemClick("dashboard")}>
              <img className="icone" alt="Icone" src={`src/components/menu-lateral/imagens/icone-dashboard-${activeItem === "dashboard" ? "branco" : "cinza"}.png`}/>
              <div className={`text ${activeItem === "dashboard" ? "active" : ""}`}>Dashboard</div>
            </div>
            <div className={`unidade-geradora menu-item ${activeItem === "unidade-geradora" ? "active" : ""}`}
              onClick={() => handleItemClick("unidade-geradora")}>
              <img className="icone" alt="Icone" src={`src/components/menu-lateral/imagens/icone-cadastrar-${activeItem === "unidade-geradora" ? "branco" : "cinza"}.png`} />
              <div className={`text ${activeItem === "unidade-geradora" ? "active" : ""}`}>Unidades</div>
            </div>
            <div className={`lancamento-mensal menu-item ${activeItem === "lancamento-mensal" ? "active" : ""}`}
              onClick={() => handleItemClick("lancamento-mensal")}>
              <img className="icone" alt="Icone" src={`src/components/menu-lateral/imagens/icone-unidades-${activeItem === "lancamento-mensal" ? "branco" : "cinza"}.png`} />
              <div className={`text ${activeItem === "lancamento-mensal" ? "active" : ""}`}>Cadastro de energia grada</div>
            </div>
        </div>
      </div>
    </div>
  )
};
