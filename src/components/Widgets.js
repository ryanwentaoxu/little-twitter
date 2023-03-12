import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import News from "./News"
import { useState } from "react"


export default function Widgets({nr, rur}) {
  // set the function and the number to display
  const [anum, setanum] = useState(1)
  const [unum, setunum] = useState(1)

  return (
    <div className="xl:w-[600px] hidden lg:inline ml-8 space-y-5">
      <div className="w-[90%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-5">
        <div className="flex items-center p-3 rounded-full  relative">
          <MagnifyingGlassIcon className="h-5 z-50 text-gray-500" />
          <input  className="absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100 " type="text" placeholder="Search"/>
        </div>
      </div>

      {/* article */}

      <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]">
        <h4 className="font-bold text-xl px-4" > News </h4>
        {nr.slice(0, anum).map((article)=>(
          <News key={article.title} article={article} />
        ))}
        {/* more and less button */}
        <button onClick={()=>setanum(anum + 3)} className="text-black-300 font-bold pl-4 pb-3 hover:text-black-400"> more </button>
        <button onClick={()=>setanum(anum === 1? anum : anum - 3)} className="text-black-300 font-bold pl-4 pb-3 hover:text-black-400"> less </button>
      </div>

      <div className="sticky top-16 text-gray-700 space-y-3 bg-gray-100 pt-2 rounded-xl w-[90%] xl:w-[75%]">
        <h4 className="font-bold text-xl px-4">People you may be interested</h4>
        {rur.slice(0, unum).map((user)=>(
          <div key={user.login.username} className="flex items-center px-4 py-2  cursor-pointer hover:bg-gray-200 transition duration-500 ease-out">
            <img src={user.picture.thumbnail} className="rounded-xl " width="80" alt=""/>
            <div>
              <h4>{user.login.username}</h4>
              <h5>{user.name.first + " " +user.name.last}</h5>
            </div>
            <button className="ml-auto bg-black text-white rounded-full text-sm px-3.5 py-1.5 font-bold">
              Follow
            </button>
          </div>
        ))}
        <button onClick={()=>setunum(unum + 3)} className="text-black-300 font-bold pl-4 pb-3 hover:text-black-400"> more </button>
        <button onClick={()=>setunum(unum === 1? unum : unum - 3)} className="text-black-300 font-bold pl-4 pb-3 hover:text-black-400"> less </button>
      </div>
    </div>
  )
}
