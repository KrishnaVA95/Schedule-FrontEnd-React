import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/login"
import { Dashboard } from "../pages/dashboard"
import { Register } from "../pages/register"
import { ProtectedRoutes } from "./ProtectedRoutes"



export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register/>} />
            <Route element={<ProtectedRoutes/>}>
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
    )
}