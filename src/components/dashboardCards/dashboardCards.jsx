import CardUnidades from "../cardUnidades/cardUnidades"
import styles from './dashboardCards.module.css'
import dadosUnidades from "../../services/dadosUnidades"
import dadosLacamentos from "../../services/dadosLancamentos";

const DashboardCards = () => {
    const { unidades,unidadesAtivas,unidadeInativa } = dadosUnidades();
    const {mediaConsumo}=dadosLacamentos();
    return (
        <div className={styles.cardsUnidadades}>
            <CardUnidades titulo={"Total unidades"} valor={unidades.length}/>
            <CardUnidades titulo={"Unidades Ativas"} valor={unidadeInativa.length}/>
            <CardUnidades titulo={"Unidades Inativas"} valor={unidadesAtivas.length}/>
            <CardUnidades titulo={"Média de energia"} valor={mediaConsumo}/>
        </div>
    )
}
export default DashboardCards