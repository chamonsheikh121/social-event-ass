import logo from "./../assets/logo.png"
import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Navbar.css"
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut=()=>{
        logOut()
        .then(() => {
            Swal.fire({
                icon: "success",
                title: "You have LoggedOut"
              });
            
        }).catch((err) => {
            console.log(err);
        });
    }


    const location =useLocation()
    let color ='[#363536]';
    if(location.pathname == '/registration'){
        color ="white"
    }




    return (
        <div className="flex justify-between items-center py-5 bg-transparent max-w-7xl mx-auto">

            <div className="w-48"><img className="w-full h-full " src={logo} alt="" /></div>
            <div className="flex justify-between gap-10 items-center">
                <ul className={`flex justify-center items-center text-${color} gap-10`}>
                    <li className="one">
                        <NavLink
                            to="/"
                            style={({ isActive, isTransitioning }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isActive ? "red" : "",
                                    border: isActive ? "1px solid red" : "",
                                    padding: isActive ? "3px 10px" : "",
                                    viewTransitionName: isTransitioning ? "slide" : "",
                                };
                            }}
                        >
                            HOME
                        </NavLink>
                    </li>
                   
                    {/* <li className="one">
                        <NavLink
                            to="/registration"
                            style={({ isActive, isTransitioning }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isActive ? "red" : "",
                                    border: isActive ? "1px solid red" : "",
                                    padding: isActive ? "3px 10px" : "",
                                    viewTransitionName: isTransitioning ? "slide" : "",
                                };
                            }}
                        >
                            registration
                        </NavLink>
                    </li> */}

                    <li className="one">
                        <NavLink
                            to="/contact"
                            style={({ isActive, isTransitioning }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isActive ? "red" : "",
                                    border: isActive ? "1px solid red" : "",
                                    padding: isActive ? "3px 10px" : "",
                                    viewTransitionName: isTransitioning ? "slide" : "",
                                };
                            }}
                        >
                            contact
                        </NavLink>
                    </li>
                    {
                        user && <li className="one">
                        <NavLink
                            to="/dashboard"
                            style={({ isActive, isTransitioning }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isActive ? "red" : "",
                                    border: isActive ? "1px solid red" : "",
                                    padding: isActive ? "3px 10px" : "",
                                    viewTransitionName: isTransitioning ? "slide" : "",
                                };
                            }}
                        >
                            Dashboard
                        </NavLink>
                    </li>
                    }



                </ul>
                {
                    user ? <div className="flex gap-2 justify-between items-center">

                        <img className="w-[40px] rounded-full" src={user.photoURL} alt="" />

                        <div>
                        <h1 className="font-bold">{user?.displayName}</h1>
                        <p className="font-semibold">{user?.email}</p>
                        </div>

                        <div>
                            <button onClick={handleLogOut} className="bg-[#CB1546] px-2 py-2 rounded-md text-white oneButton">SignOut</button>
                        </div>




                    </div> : <Link to="/login"><button className="bg-[#CB1546] px-12 py-2 rounded-md text-white oneButton">Login</button></Link>
                }

                
            </div>

        </div>
    );
};

export default Navbar;