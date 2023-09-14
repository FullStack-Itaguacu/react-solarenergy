import { Routes, Route, BrowserRouter } from "react-router-dom";

import { MenuLateral } from "../components/menu-lateral/menu-lateral";

import { LoginPage } from "../pages/login/LoginPage";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { UnidadeGeradora } from "../pages/unidade-geradora/UnidadeGeradora";
import { LancamentoMensal } from "../pages/lancamento-mensal/LancamentoMensal";
import { CadastroUsuario } from "../pages/cadUsuario/CadUsuario";

export default function AppRotas() {
  return (
    <BrowserRouter>
      <MenuLateral>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="unidade-geradora" element={<UnidadeGeradora />} />
          <Route path="lancamento-mensal" element={<LancamentoMensal />} />
          <Route path="cadastro_usuario" element={<CadastroUsuario />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </MenuLateral>
    </BrowserRouter>
  );
}
