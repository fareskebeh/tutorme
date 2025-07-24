import { useContext } from "react"
import { authContext } from "../../../state/authState"
import { Navigate } from "react-router-dom"

const Protected = ({children}: {children: React.ReactNode})=> {
    const {user} = useContext(authContext) !
    return user ? children : <Navigate to="/login"/>
}

export default Protected
