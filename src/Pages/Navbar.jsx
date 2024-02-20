import logo from "./../assets/logo.png"
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import  "./Navbar.css"

const Navbar = () => {
    return (
        <div className="flex justify-between items-center py-5 bg-transparent max-w-7xl mx-auto">

            <div className="w-48"><img className="w-full h-full " src={logo} alt="" /></div>
            <div className="flex justify-between gap-10 items-center">
                <ul className="flex justify-center items-center text-[#363536] gap-10">
                    <li className="one">
                        <NavLink
                            to="/"
                            style={({ isActive, isTransitioning }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isActive ? "red" : "",
                                    border:isActive ? "1px solid red" :"",
                                    padding:isActive ? "3px 10px" :"",
                                    viewTransitionName: isTransitioning ? "slide" : "",
                                };
                            }}
                        >
                            HOME
                        </NavLink>
                    </li>
                    <li className="event border relative flex justify-center flex-col items-center">
                        <NavLink
                            to="#"
                            className="one"
                            style={({ isActive, isTransitioning }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isActive ? "red" : "",
                                    border:isActive ? "1px solid red" :"",
                                    padding:isActive ? "3px 10px" :"",
                                    viewTransitionName: isTransitioning ? "slide" : "",
                                };
                            }}
                        >
                            EVENTS
                        </NavLink>
                        <div className="events-container absolute top-12 ">
                            <ul className="events text-[#404041] space-y-2">
                                <li>WEDDING</li>
                                <li>BIRTH DAY PARTIES</li>
                                <li>ANNIVERSARIES</li>
                                <li>ENGAGEMENT PARTIES</li>
                                <li>RETIREMENT PARTIES</li>
                                <li>BABY SHOWER</li>
                            </ul>
                        </div>
                    </li>
                    <li className="one">
                        <NavLink
                            to="/registration"
                            style={({ isActive, isTransitioning }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isActive ? "red" : "",
                                    border:isActive ? "1px solid red" :"",
                                    padding:isActive ? "3px 10px" :"",
                                    viewTransitionName: isTransitioning ? "slide" : "",
                                };
                            }}
                        >
                            registration
                        </NavLink>
                    </li>
                    
                    <li className="one">
                        <NavLink
                            to="/contact"
                            style={({ isActive, isTransitioning }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isActive ? "red" : "",
                                    border:isActive ? "1px solid red" :"",
                                    padding:isActive ? "3px 10px" :"",
                                    viewTransitionName: isTransitioning ? "slide" : "",
                                };
                            }}
                        >
                            contact
                        </NavLink>
                    </li>
                   
                    
                    
                </ul>
                <Link to="/login"><button className="bg-[#CB1546] px-12 py-2 rounded-md text-white oneButton">Login</button></Link>
            </div>

        </div>
    );
};

export default Navbar;