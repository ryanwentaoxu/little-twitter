import Image from "next/image"
import SidebarMenuItem from "./SidebarMenuItem"
import { HomeIcon, HashtagIcon, BellIcon, InboxIcon, BookmarkIcon, ClipboardIcon, UserIcon, EllipsisHorizontalCircleIcon } from "@heroicons/react/24/solid"

export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">

      {/* little twitter logo */}
      <div className="hoverEffect hover:bg-blue-100 xl:px-1">
        <Image width="50" height="50" src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"></Image>
      </div>

      {/* little menu */}
      <div className="mt-4 mb-2.5 xl:items-start">
        <SidebarMenuItem text="Home" Icon={HomeIcon} active />
        <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
        <SidebarMenuItem text="Notifications" Icon={BellIcon} />
        <SidebarMenuItem text="Messages" Icon={InboxIcon} />
        <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
        <SidebarMenuItem text="Profile" Icon={UserIcon} />
        <SidebarMenuItem text="More" Icon={EllipsisHorizontalCircleIcon} />
      </div>

      {/* little button */}
      <button className="bg-blue-400 text-white rounded-full w-20 h-10 font-bold shadow-md hover:brightness-80 text-lg hidden xl:inline">Tweet</button>

      {/* little profile */}
      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start">
        <img src="https://tether.com/wp-content/uploads/2022/04/curry-brand-2l.png" alt="user-image" className="h-6 w-10 rounded-full xl:mr-2"/>
        <div className="leading-5 hidden xl:inline">
          <h4 className="font-bold">Wentao Xu</h4>
          <p>@ryanwentaoxu</p>
        </div>
        <EllipsisHorizontalCircleIcon className="h-5 xl:ml-8"/>
      </div>

    </div>
  )
}
