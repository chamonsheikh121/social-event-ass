import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";


const EventCard = ({ value }) => {

    const {image, title, price} = value



    return (
        <div className="flex justify-between bg-slate-100 flex-col rounded-md">
            <div className="">
                <div className="h-[250px]">
                    <img className="h-full w-full rounded-md" src={image} alt="" />
                </div>
                <div className="space-y-2 p-4">
                    <h4 className="font-semibold text-3xl  ">{title}</h4>
                    <p className="text-xl text-gray-500">{value.description}</p>

                </div>
            </div>
            <div className="flex justify-between items-center p-4">
                <p className="  py-2 text-black text-xl">{price}</p>
                <Link to={`/details/${value.id}`}><button className="bg-[#CE1446] oneButton px-10 py-2 text-white text-xl">Details  </button></Link>
            </div>

        </div>
    );
};

export default EventCard;

EventCard.propTypes = {
    value: PropTypes.object
}