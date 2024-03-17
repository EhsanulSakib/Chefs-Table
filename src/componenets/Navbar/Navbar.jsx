import user_icon from "../../../public/images/user_icon.png"
import { IoIosSearch } from "react-icons/io";

export default function Navbar() {
  return (
    <div className="navbar flex justify-between mt-1 md:mt-2 lg:mt-4">
  <div className="flex">
    <a className="btn btn-ghost text-lg md:text-2xl font-extrabold">Recipe Calories</a>
  </div>

    <div className="middle hidden lg:block">
      <ul className="lg:flex flex-row gap-4">
        <li><a href="#home">Home</a></li>
        <li><a href="#recipes">Recipes</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#search">Search</a></li>
      </ul>
    </div>


  <div className="flex-none gap-2">
    <div className="search border-2 px-1 rounded-lg hidden md:flex flex-row text-3xl text-slate-400 gap-2 ">
    <div className="flex justify-center items-center">
   <IoIosSearch />
    </div>

    <div className="form-control">
      <input type="text" placeholder="Search" className="input w-24 md:w-auto bg-inherit hidden md:block" />
    </div>
    </div>

    

    {/* for lg */}
    <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar hidden lg:block ">
        <div className="w-10 rounded-full">
          <img alt="user icon" src={user_icon} />
        </div>
      </div>

    {/* for sm */}
    <div className="dropdown dropdown-end lg:hidden">
      <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="user icon" src={user_icon} />
        </div>
      </div>
      <ul tabIndex="0" className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white  rounded-box w-52 text-sm">
      <li><a href="#home">Home</a></li>
        <li><a href="#recipes">Recipes</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#search">Search</a></li>
      </ul>
    </div>
  </div>
</div>
  )
}
