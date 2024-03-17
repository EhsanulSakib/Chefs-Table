import { useEffect, useState } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import Cooking from "../Cooking/Cooking";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CurrentCooking from "../CurrentCooking/CurrentCooking";

const Recipe = () => {
    let counter = 1;
    let cartCounter =1;
    const [Cards, setCards] = useState([])
    const [Cook,setCook] = useState([])
    const [Prepare,setPrepare] = useState([])
    const [TItems,setTItems] = useState(0)
    const [Current,setCurrent] = useState(0)
    const [totalTime, setTotalTime] = useState(0)
    const [totalCalories, setTotalCalories] = useState(0)

    const handleRemove = removeItem =>{
        const updated = Cook.filter(cook => cook.recipe_id !== removeItem.recipe_id)
        setCook(updated)
    }

    const handleCook = item=>{
        if(Cook.find(cook=> cook.recipe_id === item.recipe_id)){
            toast.error("Item Already Added!")
        }
        else{
            let newItem = [...Cook,item]
            setCook(newItem)
            let total = TItems+1
            setTItems(total)
        }
    }

    const handlePreparing = prepareItem =>{
        let newPrepare = [...Prepare,prepareItem]
        setPrepare(newPrepare)
        setCurrent(Current+1)
        setTotalTime(totalTime+prepareItem.preparing_time)
        setTotalCalories(totalCalories+prepareItem.calories)
        handleRemove(prepareItem)
    }

    useEffect(()=>{
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])


    return (
        <div>
            <div className="w-11/12 lg:w-3/4 m-auto text-center mt-4 lg:mt-16">
                <h2 className="text-xl lg:text-4xl font-bold">Our Recipes</h2>
                <p className="text-xs md:text-sm lg:text-lg mt-2 lg:mt-4">Dive into a world of culinary delights with our recipes content, featuring mouthwatering dishes, step-by-step instructions, expert tips, and tantalizing flavors for every palate to savor.</p>
            </div>


            <div className="recipe-container flex flex-col lg:flex-row mt-4 lg:mt-16">
                <div className="items flex-1 grid grid-cols-1 md:grid-cols-2 gap-y-8 ">
                    {
                      Cards.map(Card => <RecipeCard key={Card.recipe_id} Card={Card} handleCook={handleCook} numOfItem={TItems}></RecipeCard>)  
                    }
                </div>

                <div className="processing w-full lg:w-2/5 my-4 lg:my-0 lg:ml-4 border border-[#28282833] p-4 rounded-xl">
                    <h2 className=" font-semibold text-lg md:text-xl text-center border-b ">Want to cook: {Cook.length}</h2>

                    {/* table */}
                    <table className="my-6 w-full">
                        <thead className="text-sm">
                            <tr>
                                <th className="w-4 md:w-16 lg:w-4 pl-2 pr-1"></th>
                                <th className="w-4 md:w-16 lg:w-4 px-1">Name</th>
                                <th className="w-4 md:w-16 lg:w-4 px-1">Time</th>
                                <th className="w-4 md:w-16 lg:w-4 px-1">Calories</th>
                                <th className="w-4 md:w-16 lg:w-4 pl-1 pr-2"></th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                                Cook.map((cook,idx) => <Cooking key={idx} cook={cook} counter={counter+idx} handlePreparing={handlePreparing}></Cooking>)
                            }
                        </tbody>
                    </table>

                    <h2 className=" font-semibold text-lg md:text-xl text-center border-b ">Currently cooking: {Prepare.length}</h2>

                    <table className="my-6 w-full">
                        <thead className="text-sm">
                            <tr>
                                <th className="w-4 md:w-16 lg:w-4 pl-2 pr-1"></th>
                                <th className="w-8 md:w-16 lg:w-8 px-1">Name</th>
                                <th className="w-4 md:w-16 lg:w-4 px-1">Time</th>
                                <th className="w-4 md:w-16 lg:w-4 px-1">Calories</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                                Prepare.map((prepare,idx) => <CurrentCooking key={idx} prepare={prepare} cartCounter={cartCounter+idx}></CurrentCooking>)
                            }
                        </tbody>
                    </table>
                    
                    <div className="flex justify-end">
                    <div className="w-2/3 flex gap-2">
                        <h4>Total Time = {totalTime} minutes</h4>
                        <h4>Total Calories = {totalCalories} calories</h4>
                    </div>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
        
    );
};

export default Recipe;