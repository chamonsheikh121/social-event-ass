import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Navbar from "../Navbar";


const Profile = () => {

    const { user } = useContext(AuthContext)

    console.log(user)

    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-96 mx-4 h-screen border-2 border-black">
                <div className="flex justify-center items-center m-20  ">
                    <div className="w-full rounded-md space-y-2">
                        <img  className="w-full rounded-2xl" src={user.photoURL} alt="" />
                        <h1 className="text-2xl font-bold">{user.displayName}</h1>
                        <p className="text-xl text-gray-600">{user.email}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Profile;