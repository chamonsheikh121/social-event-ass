import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";
import { PropTypes } from "prop-types";


const DashboardPrivate = ({children}) => {


    const {user}=useContext(AuthContext)

    if(user){
        return children
    }



    return <Navigate to="/"></Navigate>
};

export default DashboardPrivate;

DashboardPrivate.propTypes ={
    children:PropTypes.node
}