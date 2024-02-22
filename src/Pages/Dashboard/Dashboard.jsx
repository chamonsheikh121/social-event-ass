import Navbar from "../Navbar";


const Dashboard = () => {


    const getLocalStorageItems = JSON.parse(localStorage.getItem('data'))
    console.log(getLocalStorageItems)

    let display ='block';
    if(getLocalStorageItems){
        display="hidden"
    }




    return (
        <div >

            <Navbar></Navbar>

            <div className="max-w-3xl mx-auto">
                <div className="grid grid-cols-3 gap-5 spy">
                    {
                        getLocalStorageItems?.map(item => <div

                            className="space-y-4 border rounded-md px-5 flex flex-col justify-between items-center"
                            key={item.id}>

                            <img className="rounded-md" src={item.image} alt="" />

                            <h2 className="font-bold text-2xl">{item.title}</h2>

                            <button className="block mx-auto btn-disabled bg-[#e5b5c2] text-xl px-10 py-1 text-white"> <span >Selected</span></button>



                        </div>)
                    }
                    

                </div>
                <div className={`flex justify-center h-screen items-center  ${display}`}><p className="text-5xl font-bold">You do not selected any event</p></div>

            </div>
        </div>
    );
};

export default Dashboard;