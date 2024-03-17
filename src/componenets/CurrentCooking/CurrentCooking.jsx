import React from 'react';

function CurrentCooking({prepare,cartCounter}) {
    return (
        <tr className="text-xs md:text-base bg-[#28282808]">
        <td className="w-2 md:w-4 pl-2 pr-1">{cartCounter}</td>
        <td className="w-2 md:w-4 px-1">{prepare.recipe_name}</td>
        <td className="w-2 md:w-4 px-1">{prepare.preparing_time} minutes</td>
        <td className="w-2 md:w-4 px-1">{prepare.calories} calories</td>
    </tr>
    );
}

export default CurrentCooking;