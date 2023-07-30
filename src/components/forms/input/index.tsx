import { UseFormRegisterReturn } from "react-hook-form";
import styles from "./styles.module.scss"
import { InputHTMLAttributes } from "react";

interface IImputOutlined extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    type: "text" | "password" | "email";
    label: string;
    register: UseFormRegisterReturn<string>;
}

export default  function InputOutlined ({id, register, type, label}: IImputOutlined){
    return(
        <div className={styles.container}>
            <input type={type} required id={id}  {...register}/>
            <span>{label}</span>
        </div>
    ) 
}