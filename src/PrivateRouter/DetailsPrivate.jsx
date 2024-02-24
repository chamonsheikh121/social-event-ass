import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { PropTypes } from "prop-types";
import { Navigate, useLocation } from "react-router-dom";


const DetailsPrivate = ({ children }) => {


    const location = useLocation()



    const { user, loading } = useContext(AuthContext)
    console.log(user)

    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <div className="">
                <span className="loading loading-spinner loading-lg"></span>
                <span className="loading loading-spinner loading-lg"></span>
                <span className="loading loading-spinner loading-lg"></span>
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        </div>
    }
    if (user) {
        return children
    }


    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default DetailsPrivate;
DetailsPrivate.propTypes = {
    children: PropTypes.node
}