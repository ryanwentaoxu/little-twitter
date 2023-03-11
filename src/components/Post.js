import { EllipsisHorizontalIcon, ChatBubbleBottomCenterIcon, TrashIcon, HeartIcon, ShareIcon, ChartBarSquareIcon  } from "@heroicons/react/24/solid"

export default function Post({ post }) {
  // const id = props.id;
  const name = post.name;
  const userName = post.username;
  const userImg = post.userImg;
  const img = post.img;
  const text = post.text;
  const timestamp = post.timestamp;

  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-200">
      {/* image */}
      <img src={ userImg } alt="user-Img" className="h-11 w-11 rounded-full  mr-4"/>

      {/* right side */}
      <div className="">
      <div className="flex items-center justify-between">
        {/* post user info */}
        <div className="flex items-center space-x-1 whitespace-nowrap">
          <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">{name}</h4>
          <span className="text-sm sm:text-[15px] hover:underline">{userName}</span>
          <span className="text-sm sm:text-[15px] hover:underline">{timestamp}</span>
        </div>
        {/* dot icon */}
        <EllipsisHorizontalIcon className="h-9 hoverEffect w-10 hover:bg-sky-500 p-2"/>
      </div>

      <p className="text-gray-800 text-[15px] sm:text-[16px] mb=2">{ text }</p>

      <img src={ img } alt="img" className="h-30 w-30 rounded-2xl mr-2"/>

      <div className="flex justify-between text-black-200">
        <ChatBubbleBottomCenterIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
        <TrashIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
        <HeartIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
        <ShareIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
        <ChartBarSquareIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
      </div>
      </div>
    </div>
  )
}
