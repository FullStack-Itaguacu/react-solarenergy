import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Login } from "../pages/login/Login";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { UnidadeGeradora } from "../pages/unidade-geradora/UnidadeGeradora";
import { LancamentoMensal } from "../pages/lancamento-mensal/LancamentoMensal";
import { ListaUnidades } from "../pages/lista-unidades/ListaUnidades";
import Error from "../pages/error/Error";

export default function AppRotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/unidade-geradora" element={<UnidadeGeradora />} />
        <Route path="/lancamento-mensal" element={<LancamentoMensal />} />
        <Route path="/lista-unidades" element={<ListaUnidades />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
