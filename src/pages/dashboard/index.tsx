import styles from "./styles.module.scss"
import { Header } from "../../components/header"
import { useAuth } from "../../hooks/useAuth"
import ShowcaseFlex from "../../components/showcaseFlex"
import FomrModalContactRegister from "../../components/forms/modal/modalContactRegister"
import FomrModalContactUpdate from "../../components/forms/modal/modalContactUpdate"
import FomrModalContactDelete from "../../components/forms/modal/modalContactDelete"
import { AiTwotoneEdit, AiFillDelete } from "react-icons/ai";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Dashboard = () => {

    const { renderDashboard, setModal } = useAuth()


    if( renderDashboard === "myContacts"){
        return (
            <>
            <Header/>
            <main className={styles.container}>
                <header>
                    <h1>Dashboard | My Contacts</h1>
                    <button onClick={() => setModal("contactRegister")}>+</button>
                </header>
                <ShowcaseFlex/>
                <FomrModalContactRegister/>
                <FomrModalContactUpdate />
                <FomrModalContactDelete/>
            </main>
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
            </>
        )
    }else if (renderDashboard === "myUser"){
        return(
            <>
            <Header/>
            <main className={styles.container}>
                <header>
                    <h1>Dashboard | My User</h1>
                    <section>
                        <button onClick={() => setModal("")}>
                            <AiTwotoneEdit size={25} style={{
                                color:  '#FF577F',
                                cursor: 'pointer',
                                margin: "0"
                            }}/>
                        </button>
                        <button onClick={() => setModal("")}>
                            <AiFillDelete size={25} style={{
                                color:  '#FF577F',
                                cursor: 'pointer',
                                margin: "0"
                            }}/>
                        </button>
                        
                    </section>
                </header>
            </main>
            </>
        )
    }else {
        return(
            <>
                <Header/>
                <main className={styles.container}>
                    <h1>Dashboard | My Tasks</h1>
                    <span className={styles.messageError}>Sorry, this page is still under development in our API.</span>
                </main>
            </>
        )
    }
}


