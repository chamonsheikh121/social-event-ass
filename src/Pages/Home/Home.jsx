import Navbar from "../Navbar";
import moment from 'moment';
import image from "./../../assets/men-png.png"
import { SlCalender } from "react-icons/sl";
import { MdEventSeat } from "react-icons/md";
import { HiSpeakerphone } from "react-icons/hi";
import { TiLocationOutline } from "react-icons/ti";
import { useEffect, useState } from "react";
import EventCard from "./EventCard";

import Footer from "../Shared/Footer";



const Home = () => {

    const [speakers, setSpeakers] = useState()
    const [teams, setTeams] = useState()
    const [events, setEvents] = useState()

    useEffect(() => {

        fetch("./../../../public/Events.json")
            .then(res => res.json())
            .then(data => setEvents(data))

    }, [])




    useEffect(() => {
        fetch("./../../../public/TallentedSpeader.json")
            .then(res => res.json())
            .then(data => setSpeakers(data))
    }, [])
    useEffect(() => {
        fetch("./../../../public/Team.json")
            .then(res => res.json())
            .then(data => setTeams(data))
    }, [])


    console.log(speakers);



    return (
        <div>

            <header className="bg-gradient-to-t from-[#EFC1CD] h-svh to-white">
                <Navbar></Navbar>

                <div className="max-w-7xl mx-auto flex justify-between items-center ">
                    <div className="space-y-4">
                        <p className="text-xl text-[#cb1546] font-semibold flex items-center gap-4"><span><SlCalender></SlCalender></span> {moment().format("MMMM DD, YYYY")}</p>
                        <h1 className="text-7xl font-bold text-black leading-tight">EVENTS,MEETUPS & <br /><span className="text-[#CE1446] ">CONFERENCES</span> </h1>
                        <div className="text-gray-600 text-[18px] flex border  py-5 justify-between items-center gap-4 font-medium">
                            <span className="flex items-center gap-4"><span><MdEventSeat className="text-2xl"></MdEventSeat></span>500 Seat</span>
                            <span className="flex items-center gap-4"><span><HiSpeakerphone className="text-2xl"></HiSpeakerphone></span>10 Speaker</span>
                            <span className="flex items-center gap-4"><span><TiLocationOutline className="text-2xl"></TiLocationOutline></span>5634 Broadway, Bangladesh</span>
                        </div>
                        <div>
                            <button className="oneButton bg-[#CB1546] font-semibold px-12 py-2 rounded-md text-white">Book Now</button>

                        </div>
                    </div>
                    <div className="h-[500px] w-[400px] ">
                        <img className="w-full h-full rounded-full   bg-red-200" src={image} alt="" />
                    </div>

                </div>

            </header>



            <div className="my-20">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Our Services</h1>
                    <p className="text-sm w-2/4 text-gray-500  mx-auto py-4">Welcome to our vibrant social event management platform! We specialize in curating unforgettable experiences, from weddings to birthday bashes and everything in between. </p>
                </div>
                <div className="max-w-7xl mx-auto gap-10 grid grid-cols-3">
                    {
                        events?.map(event => <EventCard value={event} key={event.id}></EventCard>)
                    }
                </div>

            </div>


            <div className="max-w-7xl mx-auto space-y-10 py-20 ">
                <h1 className="text-4xl font-bold text-black text-center">Our Best Speaker</h1>
                <div className="grid grid-cols-3 gap-6">
                    {

                        speakers?.map(speaker => <div
                            key={speaker.id}
                            className="flex flex-col justify-center items-center ">
                            <img className="w-full rounded-md h-[300px] " src={speaker.image} alt="" />
                            <h1 className="text-2xl font-bold py-4">{speaker.title}</h1>

                        </div>)

                    }
                </div>
            </div>

            <div className="max-w-7xl mx-auto space-y-10 py-20 ">
                <h1 className="text-4xl font-bold text-black text-center">Our Team</h1>
                <div className="grid grid-cols-3 gap-6">
                    {

                        teams?.map(team => <div
                            key={team.id}
                            className="relative ">
                            <img className="w-full rounded-md h-[300px] " src={team.image} alt="" />
                            <h1 className="absolute rounded-sm text-white pl-4 pr-28 bg-[#CE1446] text-2xl font-bold py-2 bottom-6 text-start">{team.title}</h1>

                        </div>)

                    }
                </div>
            </div>




            <Footer></Footer>

        </div>
    );
};

export default Home;