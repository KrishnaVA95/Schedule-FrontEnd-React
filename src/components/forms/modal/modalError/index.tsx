
import { useNavigate } from "react-router-dom"
import styles from "./styles.module.scss"

interface ModalErrorProps {
    toggleModal: () => void
}

export const ModalError = ({ toggleModal }: ModalErrorProps) => {
    const navigate = useNavigate()

    const handleCloseandRedirect = () => {
        toggleModal()
        navigate("/")
    }

    return (
        <div className={styles.container} >
            <div>
                <h3>Você não está autenticado !</h3>
                <button onClick={handleCloseandRedirect}>Ir para o login</button>
            </div>
        </div>
    )
}