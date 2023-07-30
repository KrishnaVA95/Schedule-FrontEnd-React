import { useEffect, useState } from "react";
import { api } from "../../services/api";
import CardContact from "./cardContact";
import styles from "./styles.module.scss"


export interface iContact {
    id: string,
    name: string,
    email: string,
    created_at: string
    phone: string
}

export default  function ShowcaseFlex(){
    const [contacts, setContacts] = useState<iContact[]>([])

    useEffect(() => {
        (async () => {
            const response = await api.get<iContact[]>('contacts')

            setContacts(response.data)
        })()
    }, [contacts])

    return(
        <>
                <ul className={styles.container}>
                    {contacts.map((contact) =>(
                        <CardContact key={contact.id} contact={contact}/>    
                    ))}
                </ul>
        </>
    ) 
        
}