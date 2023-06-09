import Head from 'next/head'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import Feed from '@/components/Feed'
import Widgets from '@/components/Widgets'

const inter = Inter({ subsets: ['latin'] })

export default function Home({nr, rur}) 
{
  // console.log(rur);
  return (
    <>
      <Head>
        <title>little twitter</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/124/124021.png" />
      </Head>

      <main className="flex min-h-screen mx-auto">
        {/* Sidebar */}
        <Sidebar />

        {/* Feed */}
        <Feed />

        {/* Widgets */}
        <Widgets nr={nr?.articles} rur={rur?.results || null} />
        {/* Modal */}
      </main>
    </>
  )
}


// https://saurav.tech/NewsAPI/top-headlines/category/business/us.json

export async function getServerSideProps() {
  const nr = await fetch("https://saurav.tech/NewsAPI/top-headlines/category/business/us.json").then((res)=>res.json());

  // https://randomuser.me/api/?results=5000
  // https://randomuser.me/api/?results=30&inc=name,login,%20picture
  // name, login, pictures

  // who can be followed
  const rur = await fetch(
    "https://randomuser.me/api/?results=30&inc=name,login,%20picture"
  ).then((res)=>res.json());
  return {
    props: {
      nr,
      rur,
    },
  }
}
