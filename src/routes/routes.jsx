import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Login } from "../pages/login/Login";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { UnidadeGeradora } from "../pages/unidade-geradora/UnidadeGeradora";
import { LancamentoMensal } from "../pages/lancamento-mensal/LancamentoMensal";
import Error from "../pages/error/Error";
import { MenuLateral } from "../components/menu-lateral/menu-lateral";




const MenuLayout = () => {

  return (
    <div>
      <MenuLateral />

      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="unidade-geradora" element={<UnidadeGeradora />} />
        <Route path="lancamento-mensal" element={<LancamentoMensal />} /> 
      </Routes>
    </div>
  );
}

export default function AppRotas() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<MenuLayout />} />
        <Route path="/unidade-geradora" element={<MenuLayout />} />
        <Route path="/lancamento-mensal" element={<MenuLayout />} />
        
        <Route path="*" element={<Error />} />

      </Routes>
    </BrowserRouter>
  );

}