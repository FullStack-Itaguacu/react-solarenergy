import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Login } from "../pages/login/LoginPage";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { UnidadeGeradora } from "../pages/unidade-geradora/UnidadeGeradora";
import { LancamentoMensal } from "../pages/lancamento-mensal/LancamentoMensal";
import Error from "../pages/error/Error";
import { AuthContext } from "../contexts/Auth";

export default function AppRotas() {
  const [user, setUser] = useState(null);
  const login = (email, password) => {
    console.log("login auth", { email, password });
    setUser({ id: "123", email });
  };
  const logout = () => {
    console.log("logout");
  };

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ authenticated: !!user, user, login, logout }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/unidade-geradora" element={<UnidadeGeradora />} />
          <Route path="/lancamento-mensal" element={<LancamentoMensal />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}
