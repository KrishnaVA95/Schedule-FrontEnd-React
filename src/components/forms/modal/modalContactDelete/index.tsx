import {useForm, SubmitHandler} from 'react-hook-form'
import styles from "../styles.module.scss"
import {iRegisterFormData } from '../../validator';
import { useAuth } from '../../../../hooks/useAuth';


export default function FomrModalContactDelete (){
    const {  modal, setModal, setContactId, contactId, contactDelete } = useAuth()

    const { handleSubmit } = useForm<iRegisterFormData>()
    

    
    const submit: SubmitHandler<iRegisterFormData> = () =>{
        contactDelete(contactId)
        setContactId('')
        setModal('off')
    }

    if(modal === 'contactDelete'){
        return(
            <div className={styles.container}>
                <form onSubmit={handleSubmit(submit)}>
                    <button onClick={() => setModal("off")}>X</button>
                    <h2>Detele</h2>
                    <h3>Confirm to delete contact</h3>
                    <input type="submit" value='Delete'/>
                </form>
            </div>
        ) 
    }else{
        return(
            <></>
        )
    }
}

