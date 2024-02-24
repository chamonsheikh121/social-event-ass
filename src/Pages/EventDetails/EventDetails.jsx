import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const EventDetails = () => {
    const [matchedData, setMatchedData] = useState(0)


    const events = useLoaderData()

    const { id } = useParams()
    console.log(events)


    useEffect(() => {
        const data = events?.find(eve => eve.id == id)
        console.log(data);
        setMatchedData(data)
    }, [])

    const { image, title, description, location, price, duration, service_details_description } = matchedData

    const handleConform=()=>{

        const localStorageArray =[]
        localStorageArray.push(matchedData)
        console.log(localStorageArray)

        const beforeItems = JSON.parse(localStorage.getItem('data'))
        
        console.log(beforeItems);
        
        if(!beforeItems){
            localStorage.setItem('data', JSON.stringify(localStorageArray))
        }
        else{
            beforeItems.push(matchedData)
            localStorage.setItem('data', JSON.stringify(beforeItems))
        }

        
            Swal.fire({
                icon: "success",
                title: "Event Added to the Dashboard successfully"
              });
        
    }




    return (
        <div className="max-w-7xl mx-auto my-10">

            <div className="space-y-4">
                <img className="h-[600px] w-full rounded-md" src={image} alt="" />
                <div className="space-y-2">
                    <h1 className="text-5xl font-bold">{title}</h1>
                    <p className="text-gray-700 text-xl">{description}</p>
                    <p className="text-xl"><span className="text-2xl font-semibold">Location: </span>{location}/ where you will choose</p>

                    <p className="text-xl "><span className="font-semibold text-2xl">Event time duration:</span> {duration}</p>

                    <p className="text-xl"><span className="text-2xl font-semibold">price: </span>{price}</p>
                </div>
                <div className="space-y-1">
                <span className="text-2xl font-bold">Here are all the details information:</span>
                <p className="text-sm text-gray-600">{service_details_description}</p>
                </div>

                <div className="flex justify-between items-center">
                    <Link to="/"><button className="oneButton bg-[#CE1446] px-10 py-1 text-white flex justify-center items-center gap-4"><IoArrowBackSharp></IoArrowBackSharp> <span>Back</span></button></Link>
                    <button onClick={handleConform} className="oneButton bg-[#CE1446] text-xl px-10 py-1 text-white"> <span >Conform</span></button>
                </div>
            </div>


        </div>
    );
};

export default EventDetails;