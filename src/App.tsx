import { AxiosInterceptor } from "./axiosInterceptor"
import { AuthProvider } from "./providers/AuthProvider"
import { RoutesMain } from "./routes"



export const App = () => {
  return (
    <>
    <AxiosInterceptor>
      <AuthProvider>
        <RoutesMain/>
      </AuthProvider>  
    </AxiosInterceptor>
    </>
  )
}


