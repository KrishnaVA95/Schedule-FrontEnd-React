import { ReactNode, createContext, useEffect, useState } from "react";
import { iLoginFormData, iRegisterContactFormData, iRegisterFormData, iUpdateContactFormData } from "../components/forms/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


interface iAuthProviderProps {
    children: ReactNode
}

interface iLoginResponse {
    token: string
}

interface iRegisterResponse {
    name: string;
    phone: string;
    email: string;
    id: string;
    created_at: string;
}


interface iAuthContextValues {
    signIn: (data: iLoginFormData) => void
    loading: boolean
    userRegister: (data: iRegisterFormData) => Promise<void>
    renderDashboard: string
    setRenderDashboard: React.Dispatch<React.SetStateAction<string>>
    contactRegister: (data: iRegisterContactFormData) => Promise<void>
    modal: string
    setModal: React.Dispatch<React.SetStateAction<string>>
    contactUpdate:  (data: iUpdateContactFormData, id: string) => Promise<any>
    contactId: string 
    setContactId:  React.Dispatch<React.SetStateAction<string>>
    contactDelete: (id: string) => Promise<void>
    userLogout: () => void
}

export const AuthContext = createContext({} as iAuthContextValues)

export const AuthProvider = ({ children }: iAuthProviderProps) => {

    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const [renderDashboard, setRenderDashboard] = useState<string>('myContacts')
    const [modal, setModal] = useState<string>('off')
    const [contactId, setContactId] = useState<string>('')
    

    useEffect(() => {
        const token = localStorage.getItem("@scheduling:token")

        if (!token) {
            setLoading(false)
            return
        }

        api.defaults.headers.common.Authorization = `Bearer ${token}`
        setLoading(false)

    }, [])

    const signIn = async (data: iLoginFormData) => {

        try {

            const response = await api.post<iLoginResponse>("/login", data)

            const { token } = response.data


            api.defaults.headers.common.Authorization = `Bearer ${token}`
            localStorage.setItem("@scheduling:token", token)
            setLoading(false)

            toast.success('User logged in successfully')
            navigate("dashboard")
        }
        catch (error) {
            toast.error('Incorrect data.')
            console.log(error)
        }
    }

    const userLogout = () =>{
        window.localStorage.removeItem("@scheduling:token")
        toast.success('User Logged Out')
        navigate('/')
    }

    const userRegister = async (data : iRegisterFormData) => {
        try{
            await api.post<iRegisterResponse>('/users', data)
            toast.success('User created successfully')
            navigate('/')
        }catch (error){
            toast.error('Email already exists')
            console.error(error)
        }
    }

    const contactRegister = async (data : iRegisterContactFormData) => {
        try{
            await api.post<iRegisterResponse>('/contacts', data)
            toast.success('Contact created successfully')
        }catch (error){
            toast.error('An error has occurred.')
            console.error(error)
        }
    }

    const contactUpdate = async (data: iUpdateContactFormData, id: string) =>{
        try {
            const response = await api.patch(`/contacts/${id}`, data)
            toast.success('Contact updated successfully')
            return {...response, ...data}
        } catch (error) {
            toast.error('Unable to update contact')
            console.error(error)
        }
    }

    const contactDelete = async (id: string) =>{
        try {
            await api.delete(`/contacts/${id}`)
            toast.success('Contact was successfully deleted')
        } catch (error) {
            toast.error('An error has occurred.')
            console.error(error)
        }
    }

    return (
        <AuthContext.Provider value={{ 
            signIn, 
            loading, 
            userRegister,
            renderDashboard, 
            setRenderDashboard,
            contactRegister,
            modal,
            setModal,
            contactUpdate,
            contactId,
            setContactId,
            contactDelete,
            userLogout
        }}>
            {children}
        </AuthContext.Provider>
    )
}


