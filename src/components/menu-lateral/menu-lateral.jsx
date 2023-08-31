import styles from "./menu-lateral.module.css";
import { Link, useLocation } from 'react-router-dom';
import iconeCadastroBranco from "./imagens/icone-cadastrar-branco.png";
import iconeDashboardBranco from "./imagens/icone-dashboard-branco.png";
import iconeUnidadesBranco from "./imagens/icone-unidades-branco.png";
import iconeCadastroCinza from "./imagens/icone-cadastrar-cinza.png";
import iconeDashboardCinza from "./imagens/icone-dashboard-cinza.png";
import iconeUnidadesCinza from "./imagens/icone-unidades-cinza.png";




export const MenuLateral = () => {
  const location = useLocation();
  const { pathname } = location;


  return (
    <div className={styles.box}>
      <div className={styles.sideMenu}>
        <img className={styles.logo} alt="Logo" src="src\components\menu-lateral\imagens\logo-menu-bg-branco.png" />
        <div className={styles.list}>
          <Link to="/dashboard">
            <div
              className={`${styles.menuItem} ${pathname === '/dashboard' ? styles.active : ""}`}>
              <img className={styles.icon} alt="Icone" src={pathname === '/dashboard' ? iconeDashboardBranco : iconeDashboardCinza} />
              <div className={`${styles.text} ${pathname === '/dashboard' ? styles.active : ""}`}>Dashboard</div>
            </div>
          </Link >
          <Link to="/unidade-geradora">
            <div
              className={`${styles.menuItem} ${pathname === "/unidade-geradora" ? styles.active : ""}`}>
              <img className={styles.icon} alt="Icone" src={pathname === '/unidade-geradora' ? iconeUnidadesBranco : iconeUnidadesCinza} />
              <div className={`${styles.text} ${pathname === "/unidade-geradora" ? styles.active : ""}`}>Unidades</div>
            </div>
          </Link>
          <Link to="/lancamento-mensal">
            <div className={`${styles.menuItem} ${pathname === "/lancamento-mensal" ? styles.active : ""}`} >
              <img className={styles.icon} alt="Icone" src={pathname === '/lancamento-mensal' ? iconeCadastroBranco : iconeCadastroCinza} />
              <div className={`${styles.text} ${pathname === "/lancamento-mensal" ? styles.active : ""}`}>Cadastro de energia gerada</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
};