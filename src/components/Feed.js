import { SparklesIcon } from "@heroicons/react/24/outline"
import Input from "./Input"
import Post from "./Post"

export default function Feed() {
  // dummy data
  const posts = [
    {
      id: "1",
      name: "Wentao Xu",
      username: "ryanwentao",
      userImg: "https://tether.com/wp-content/uploads/2022/04/curry-brand-2l.png",
      img: "https://tether.com/wp-content/uploads/2022/04/curry-brand-2l.png",
      text: "nice view!",
      timestamp: "2-hours ago"
    },
    {
      id: "2",
      name: "Wentao Xu",
      username: "ryanwentao",
      userImg: "https://i0.wp.com/www.sneakerreporter.com/wp-content/uploads/2023/02/D0708CCA-FC29-4481-B99C-328DACECC15D.jpeg?resize=1080%2C675&ssl=1",
      img: "https://i0.wp.com/www.sneakerreporter.com/wp-content/uploads/2023/02/D0708CCA-FC29-4481-B99C-328DACECC15D.jpeg?resize=1080%2C675&ssl=1",
      text: "nice view!",
      timestamp: "2-hours ago"
    }
  ]

  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5"/>
        </div>
      </div>

      <Input />

      {posts.map((post) => (
        <Post key={post.id} post={post}></Post>
        )
      )}

    </div>
  )
}
