import android from "./../../assets/android.png"
import ios from "./../../assets/apple.png"

const Footer = () => {
    return (
        <div className="bg-pink-100 py-20">

            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between  items-center">
                    <div>
                        <h2 className="text-3xl border-b-4 border-black text-black">ABOUT US</h2>
                        <div className="flex flex-col justify-center items-start gap-4 py-6">
                            <span className="text-xl text-gray-600">About us</span>
                            <span className="text-xl text-gray-600">Press And Media</span>
                            <span className="text-xl text-gray-600">Press And Media</span>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl border-b-4 border-black text-black ">FOR COUPLES</h2>
                        <div className="flex flex-col justify-center items-start gap-4 py-6">
                            <span className="text-xl text-gray-600">About us</span>
                            <span className="text-xl text-gray-600">Press And Media</span>
                            <span className="text-xl text-gray-600">Press And Media</span>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl border-b-4 border-black text-black">FOR BUSINESS</h2>
                        <div className="flex flex-col justify-center items-start gap-4 py-6">
                            <span className="text-xl text-gray-600">About us</span>
                            <span className="text-xl text-gray-600">Press And Media</span>
                            <span className="text-xl text-gray-600">Press And Media</span>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl border-b-4 border-black text-black">GET THE APP</h2>
                        <div className="flex flex-col justify-center items-start gap-4 py-6">
                            <img className="w-2/4" src={android} alt="" />
                            <img className="w-2/4" src={ios} alt="" />
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Footer;