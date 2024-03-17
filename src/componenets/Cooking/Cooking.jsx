export default function Cooking({cook,counter,handlePreparing}) {
  return (
    <tr className="text-xs md:text-base bg-[#28282808]">
        <td className="w-2 md:w-4 pl-2 pr-1">{counter}</td>
        <td className="w-2 md:w-4 px-1">{cook.recipe_name}</td>
        <td className="w-2 md:w-4 px-1">{cook.preparing_time} minutes</td>
        <td className="w-2 md:w-4 px-1">{cook.calories} calories</td>
        <td className="px-1 md:px-2"><button className="btn btn-success p-1 md:px-3 text-xs lg:text-sm" onClick={()=>handlePreparing(cook)}>Preparing</button></td>
    </tr>
  )
}
