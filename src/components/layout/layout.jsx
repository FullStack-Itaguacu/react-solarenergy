import React from "react";
import { Outlet } from "react-router-dom";
import { MenuLateral } from "../menu-lateral/menu-lateral";

const Layout = () => {
  return (
    <div>
      <MenuLateral />
      <div style={{ marginLeft: "250px" }}>
        {/* Espaço de margem para acomodar o menu */}
        <Outlet /> {/* Renderiza o conteúdo da rota atual */}
      </div>
    </div>
  );
};

export default Layout;