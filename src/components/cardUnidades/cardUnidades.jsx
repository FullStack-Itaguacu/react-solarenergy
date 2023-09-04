import styles from './cardUnidades.module.css'

const CardUnidades = ({titulo,valor}) => {
    return (
        <div className={styles.boxCard}>
            <div className={styles.textTipo}>
                <p>{titulo}</p>
            </div>
            <div className={styles.textUnidade}>
                <p>{titulo=="Média de energia" ? valor.toString()+" kW" : valor}</p>
            </div>
        </div>
    )
}

export default CardUnidades