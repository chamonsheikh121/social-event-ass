import Navbar from "../Navbar";
import video from "./../../assets/background.mp4"
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import ExtraLoing from "../Shared/ExtraLoing";



const Registration = () => {

    const {createUserWEP} = useContext(AuthContext)

    const [success, setSuccess] =useState(false)

    const handleLoginWEP = (e) => {
        e.preventDefault()

        let form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        console.log(email, password)
        if(email && password){
            createUserWEP(email, password)
            .then((result) => {

            setSuccess(true)
            console.log(result.user)
            
            }).catch((err) => {

            console.log(err.message)

            });
        }
        else{
            console.log("Null value ")
        }
    }




    return (
        <div>
            <div className="relative">
                <div className="absolute z-10 w-full">
                    <Navbar></Navbar>
                </div>
                <div className=" w-full h-svh flex justify-center items-center">
                    <div className="video-container absolute ">
                        <video autoPlay muted loop className="w-full overflow-hidden">
                            <source className="aspect-video" autoPlay src={video} />
                        </video>
                    </div>
                    <div className="w-full z-20">
                        <div className="max-w-md mx-auto border rounded-md bg-gray-700 ">
                            <div className="p-4 text-center ">
                                <form onSubmit={handleLoginWEP} className="space-y-8 pt-8">
                                    <h1 className="text-4xl text-gray-300 text-start font-semibold font-pixelFont uppercase">Create your account</h1>
                                    <input className="px-5 text-[20px] focus:outline-none py-1 w-full focus:bg-black border rounded-md" placeholder="Enter your name" type="text" />
                                    <input className="px-5 text-[20px] focus:outline-none py-1 w-full focus:bg-black border rounded-md" placeholder="Enter your email" name="email" type="email" />
                                    <input className="px-5 text-[20px] focus:outline-none py-1 w-full focus:bg-black border rounded-md" placeholder="Password" name="password" type="password" />
                                    <button className="oneButton bg-[#CB1546] font-bold py-2 text-white w-full">Registration</button>
                                    <p>{success? "User created successfully" : ""}</p>
                                </form>
                                <p className="text-end py-2 text-gray-300">Already have an account?<Link className="underline pl-2 text-[#f38aa6]" to="/login">login</Link></p>
                            </div>
                        </div>
                        <div className="max-w-md mx-auto mt-4 ">
                            <ExtraLoing></ExtraLoing>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Registration;