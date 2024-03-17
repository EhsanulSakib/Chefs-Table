export default function Cooking({cook,counter}) {
  return (
    <tr className="text-xs md:text-base pb-4">
        <td className="w-2 md:w-4 pl-2 pr-1">{counter}</td>
        <td className="w-2 md:w-4 px-1">{cook.recipe_name}</td>
        <td className="w-2 md:w-4 px-1">{cook.preparing_time} minutes</td>
        <td className="w-2 md:w-4 px-1">{cook.calories} calories</td>
        <td className="px-1 md:px-2"><button className="btn btn-success p-1 md:px-4 text-xs md:text-lg">Preparing</button></td>
    </tr>
  )
}
