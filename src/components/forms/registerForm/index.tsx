import {useForm, SubmitHandler} from 'react-hook-form'
import styles from "./styles.module.scss"
import InputOutlined from '../input';
import { iRegisterFormData, schemaRegister } from '../validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '../../../hooks/useAuth';


export default function FomrRegister (){

    const { register, handleSubmit, reset } = useForm<iRegisterFormData>({
        resolver: zodResolver(schemaRegister)
    })
    
    const { userRegister } = useAuth()
    
    const submit: SubmitHandler<iRegisterFormData> = (data) =>{
        userRegister(data)
        reset()
    }

    return(
        <div className={styles.container}>
            <form onSubmit={handleSubmit(submit)}>
                <h2>Register your <span>Account</span></h2>
                <InputOutlined id="email" type="text" label='Email' register={register('email')}/>
                <InputOutlined id="password" type="password" label='Password'  register={register('password')}/>
                <InputOutlined id="name" type="text" label='Name'  register={register('name')}/>
                <InputOutlined id="phone" type="text" label='Phone'  register={register('phone')}/>
                <a href='/'>Go to login</a>
                <input type="submit" value='Submit'/>
            </form>
        </div>
    ) 
}