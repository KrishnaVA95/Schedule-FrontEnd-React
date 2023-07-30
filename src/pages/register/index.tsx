import FomrRegister from "../../components/forms/registerForm"
import styles from "./styles.module.scss"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Register = () => {
    return (
      <main className={styles.container}>
        <FomrRegister/>
        <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
            />
      </main>
    )
}