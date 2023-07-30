
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
                <h3>You are not authenticated!</h3>
                <button onClick={handleCloseandRedirect}>Go to login</button>
            </div>
        </div>
    )
}