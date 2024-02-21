import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { GrGithub } from "react-icons/gr";
import { AuthContext } from "../../Providers/AuthProvider";





const ExtraLoing = () => {

    const {signInGoogle} =useContext(AuthContext)

    const handleGoogleSignIn =()=>{
        signInGoogle()
        .then((result) => {
            console.log(result.user);
        }).catch((err) => {
            console.log(err);
        });
    }





    return (
        <div className="mx-10 my-4  px-4 space-y-2">

            <p onClick={handleGoogleSignIn} className="cursor-pointer text-black relative bg-white p-2 rounded-full text-center">Login with Google
                <span className="absolute top-3 text-xl left-4"><FcGoogle></FcGoogle></span>
            </p>
            <p className=" text-black relative bg-white p-2 rounded-full text-center">Login with Github
                <span className="absolute top-3 text-xl left-4"><GrGithub></GrGithub></span>
            </p>


        </div>
    );
};

export default ExtraLoing;