import { iContact } from ".."
import { useAuth } from "../../../hooks/useAuth";


import styles from "./styles.module.scss"
import { AiTwotoneEdit, AiFillDelete } from "react-icons/ai";

interface iContactCardProp {
    contact: iContact
  }


export default function CardContact({contact}: iContactCardProp){
    const { setModal, setContactId } = useAuth()

    const openModelUpdate = () =>{
        setContactId(contact.id)
        setModal("contactUpdate")
    }

    const openModelDelete = () =>{
        setContactId(contact.id)
        setModal("contactDelete")
    }

    return(
        <li className={styles.container}>
            <ul>
                <li onClick={() => openModelUpdate()}>
                    <AiTwotoneEdit size={25} style={{
                        color:  '#FF577F',
                        cursor: 'pointer',
                        margin: "0"
                    }}/>
                </li>

                <li onClick={() => openModelDelete()}>
                    <AiFillDelete size={25} style={{
                        color:  '#FF577F',
                        cursor: 'pointer',
                        margin: "0"
                    }}/>
                </li>
            </ul>
            <p>{contact.name}</p>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
            <p>{contact.created_at}</p>
        </li>
    ) 
        
}