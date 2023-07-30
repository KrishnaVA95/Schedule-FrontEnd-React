import { useAuth } from "../../hooks/useAuth";
import styles from "./styles.module.scss"

import {
    BiSolidUserCircle,
    BiSolidContact,
    BiArrowBack
  } from "react-icons/bi";
import {
    GoTasklist
  } from "react-icons/go";

export const Header = () => {

    const { setRenderDashboard, renderDashboard, userLogout } = useAuth()
    
    return (
      <header className={styles.container}>
        <nav>
                <li onClick={() => setRenderDashboard("myContacts")}>
                    <BiSolidContact size={40} style={{
                        color:  renderDashboard === "myContacts" ? "#FF577F" : "#ADB5BD",
                        cursor: 'pointer',
                        margin: "0"
                    }}/>
                </li>
                <li onClick={() => setRenderDashboard("myUser")}>
                    <BiSolidUserCircle size={40} style={{
                        // color:  "#ADB5BD",
                        color: renderDashboard === "myUser" ? "#FF577F" : "#ADB5BD",
                        cursor: 'pointer',
                        margin: "0"
                    }}/>
                </li>

                <li onClick={() => setRenderDashboard("myTasks")}>
                    <GoTasklist size={40} style={{
                        color:  renderDashboard === "myTasks" ? "#FF577F" : "#ADB5BD",
                        cursor: 'pointer',
                        margin: "0"
                    }}/>
                </li>
        </nav>
        <div onClick={() => userLogout()}>
            <BiArrowBack size={40} style={{
                        color:  "#ADB5BD",
                        cursor: 'pointer',
                        margin: "0"
            }}/>
        </div>
      </header>
    )
}