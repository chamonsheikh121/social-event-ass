import Navbar from "../Navbar";
import "./Login.css"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import ExtraLoing from "../Shared/ExtraLoing";
import Swal from "sweetalert2";


const Login = () => {

    const {loginWEP} = useContext(AuthContext);
    const location = useLocation()
    console.log(location);

    const navigate =useNavigate()


    const handleLoginWEP =(e)=>{
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        loginWEP(email, password)
        .then((result) => {
            console.log(result.user);
            navigate(location.state ? location.state:"/")
            Swal.fire({
                icon: "success",
                title: "Logged in successfully"
              });
            
        }).catch((err) => {
            console.log(err);
        });
        

    }


    return (
        <div>
            <div className="w-full h-screen bg-gradient-to-b to-[#ed8ea7] from-white">
            <Navbar></Navbar>
            <div className="w-full mt-28 z-20">
                        <div className="max-w-md mx-auto border rounded-md bg-gray-700 text-gray-300">
                            <div className="p-4 text-center ">
                                <form onSubmit={handleLoginWEP} className="space-y-8 pt-8">
                                    <h1 className="text-4xl text-start font-semibold font-pixelFont uppercase">Login Now</h1>

                                    <input className="px-5 text-[20px] focus:outline-none py-1 w-full focus:bg-black border rounded-md" placeholder="Enter your email" name="email" type="email" />
                                    <input className="px-5 text-[20px] focus:outline-none py-1 w-full focus:bg-black border rounded-md" placeholder="Password" name="password" type="password" />
                                    <button className="oneButton bg-[#CB1546] font-bold py-2 w-full">Login</button>
                                </form>
                                <p className="text-end py-2 ">Already have an account?<Link className="underline pl-2 text-[#f38aa6]" to="/registration">registration</Link></p>
                            </div>
                        </div>
                        <div className="max-w-md mx-auto mt-4 ">
                            <ExtraLoing></ExtraLoing>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Login;