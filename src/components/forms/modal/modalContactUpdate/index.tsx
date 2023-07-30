import {useForm, SubmitHandler} from 'react-hook-form'
import styles from "../styles.module.scss"
import InputOutlined from '../../input';
import {iRegisterFormData, schemaUpdateContact } from '../../validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '../../../../hooks/useAuth';


export default function FomrModalContactUpdate (){
    const {  modal, setModal, setContactId, contactId, contactUpdate } = useAuth()

    const { register, handleSubmit, reset } = useForm<iRegisterFormData>({
        resolver: zodResolver(schemaUpdateContact)
    })
    

    
    const submit: SubmitHandler<iRegisterFormData> = (data) =>{
        contactUpdate(data, contactId)
        reset()
        setContactId('')
        setModal('off')
    }

    if(modal === 'contactUpdate'){
        return(
            <div className={styles.container}>
                <form onSubmit={handleSubmit(submit)}>
                    <button onClick={() => setModal("off")}>X</button>
                    <h2>Update <span>Contact</span></h2>
                    <InputOutlined id="email" type="text" label='Email' register={register('email')}/>
                    <InputOutlined id="name" type="text" label='Name'  register={register('name')}/>
                    <InputOutlined id="phone" type="text" label='Phone'  register={register('phone')}/>
                    <input type="submit" value='Submit'/>
                </form>
            </div>
        ) 
    }else{
        return(
            <></>
        )
    }
}

