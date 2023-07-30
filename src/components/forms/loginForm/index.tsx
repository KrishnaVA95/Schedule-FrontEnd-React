import {SubmitHandler, useForm} from 'react-hook-form'
import styles from "./styles.module.scss"
import InputOutlined from '../input';
import { iLoginFormData, schemaLogin } from '../validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '../../../hooks/useAuth';




export default function FomrLogin (){

    const { register, handleSubmit, reset } = useForm<iLoginFormData>({
        resolver: zodResolver(schemaLogin)
    })
    
    const { signIn } = useAuth()
    
    const submit: SubmitHandler<iLoginFormData> = (data) =>{
        signIn(data)
        reset()
    }

    return(
        <div className={styles.container}>
            <form onSubmit={handleSubmit(submit)}>
                <h2>Sign <span>in</span></h2>
                <InputOutlined id="email" type="text" label='Email' register={register('email')}/>
                <InputOutlined id="password" type="password" label='Password'  register={register('password')}/>
                <a href='/register'>Create new account</a>
                <input type="submit" value='Login'/>
            </form>
        </div>
    ) 
}