import { useContext } from "react"
import { authContext } from "../../../state/authState"
import { Navigate } from "react-router-dom"

const Public = ({children} : {children: React.ReactNode})=> {
    const {user} = useContext(authContext)! 
    return user ? <Navigate to="/dashboard"/> : children
}


export default Public
