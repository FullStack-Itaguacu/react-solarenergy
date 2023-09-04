import styles from "./menu-lateral.module.css";
import { Link, useLocation } from 'react-router-dom';
import iconeCadastroBranco from "./imagens/icone-cadastrar-branco.png";
import iconeDashboardBranco from "./imagens/icone-dashboard-branco.png";
import iconeUnidadesBranco from "./imagens/icone-unidades-branco.png";
import iconeCadastroCinza from "./imagens/icone-cadastrar-cinza.png";
import iconeDashboardCinza from "./imagens/icone-dashboard-cinza.png";
import iconeUnidadesCinza from "./imagens/icone-unidades-cinza.png";
import logoImage from "./imagens/logo-menu-bg-branco.png";
import { useEffect, useState } from "react";
import { TopBar } from '../top-bar/top-bar';

export const MenuLateral = ({ children }) => {
  const [nome, setNome] = useState('');
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    if (pathname === '/dashboard') {
      setNome('Dashboard');
    } else if (pathname === '/unidade-geradora') {
      setNome('Unidades');
    } else if (pathname === '/lancamento-mensal') {
      setNome('Cadastro de energia geradora');
    }
  }, [pathname]);


  return (
    <>
    {pathname !== '/dashboard' && pathname !== '/unidade-geradora' && pathname !== '/lancamento-mensal' ? (
      <>
        {children}
      </>
      ) : (
      <>
        <div className={styles.container}>
          <div className={styles.content}>
            <aside className={styles.leftSidebar}>
              <div className={styles.leftContainerMenu}>
                <div className={styles.containerLogo}>
                  <img className={styles.logoMenu} src={logoImage} alt="" /></div>
                <div className={styles.leftMenu}>
                  <Link to="/dashboard">
                    <div
                      className={`${pathname === '/dashboard'
                        ? styles.active
                        : styles.btn
                        }`}
                    >
                      <img className={styles.iconMenu} alt="Icone" src={pathname === '/dashboard' ? iconeDashboardBranco : iconeDashboardCinza} />

                      <p>Dashboard</p>
                    </div>
                  </Link>
                  <Link to="/unidade-geradora">
                    <div
                      className={`${pathname === '/unidade-geradora'
                        ? styles.active
                        : styles.btn
                        }`}
                    >
                      <img className={styles.iconMenu} alt="Icone" src={pathname === '/unidade-geradora' ? iconeUnidadesBranco : iconeUnidadesCinza} />

                      <p>Unidades</p>
                    </div>
                  </Link>
                  <Link to="/lancamento-mensal">
                    <div
                      className={`${pathname === '/lancamento-mensal'
                        ? styles.active
                        : styles.btn
                        }`}
                    >
                      <img className={styles.iconMenu} alt="Icone" src={pathname === '/lancamento-mensal' ? iconeCadastroBranco : iconeCadastroCinza} />

                      <p>Cadastro de energia geradora</p>
                    </div>
                  </Link>
                </div>
              </div>
                </aside>
                <div className={styles.contentBody}>
                  <TopBar nome={nome} />
                  <main className={styles.mainContent}>
                    {children}
                  </main>
                </div>
          </div>
        </div>
      </>
      )}
    </>
  )
};