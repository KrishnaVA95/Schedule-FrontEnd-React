import {useForm, SubmitHandler} from 'react-hook-form'
import styles from "../styles.module.scss"
import InputOutlined from '../../input';
import {iRegisterFormData, schemaRegisterContact } from '../../validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '../../../../hooks/useAuth';


export default function FomrModalContactRegister (){
    const { contactRegister, modal, setModal } = useAuth()

    const { register, handleSubmit, reset } = useForm<iRegisterFormData>({
        resolver: zodResolver(schemaRegisterContact)
    })
    

    
    const submit: SubmitHandler<iRegisterFormData> = (data) =>{
        contactRegister(data)
        reset()
        setModal('off')
    }

    if(modal === 'contactRegister'){
        return(
            <div className={styles.container}>
                <form onSubmit={handleSubmit(submit)}>
                    <button onClick={() => setModal("off")}>X</button>
                    <h2>Register <span>Contact</span></h2>
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

