import { CiClock2 } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";

const RecipeCard = ({Card}) => {
    return (
        <div className="card w-11/12 m-auto bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={Card.recipe_image} alt="Recipe" className="rounded-xl h-52 w-full object-cover" />
  </figure>
  <div className="my-8 flex flex-col gap-4 w-11/12 m-auto text-[#282828]">
    <h2 className="card-title font-bold text-left text-xl">{Card.recipe_name}</h2>
    <p className="text-sm font-normal text-[rgb(135,135,135)]">{Card.short_description}</p>
    
    <div className="border-y">
        <h2 className="my-4 flex flex-col gap-4 w-11/12 m-auto text-[#282828]">
            Ingredients: {Card.ingredients.length}
        </h2>
        <ul className="ml-12 my-4 text-sm font-normal text-[rgb(135,135,135)]">
            {
                Card.ingredients.map(item=><li className=" list-disc" key={Card.recipe_id}>{item}</li>)                    
            }            
        </ul>
    </div>

    <div className="flex gap-4">
        <div className="flex flex-row gap-1 items-center text-[rgb(135,135,135)]">
            <CiClock2/>
            {Card.preparing_time} minutes
        </div>
        <div className="flex flex-row gap-1 items-center text-[rgb(135,135,135)]">
            <AiOutlineFire />
            {Card.calories} calories
        </div>

    </div>


    <div className="card-actions">
      <button className="btn btn-success">Want to Cook</button>
    </div>
  </div>
</div>
    );
};

export default RecipeCard;