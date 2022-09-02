import Head from "next/head"
import CarritoSection from "../components/Carrito"

import Header from "../components/Header"
import HeroSection from "../components/Hero"
import LIstaDeProductosSection from "../components/LIstaDeProductos"
import BasicModal from "../components/ModalImg"
// import TopDosProuctosSection from "../components/TopDosProuctos"

const Home = ({ res }) => {

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>pueva next js</title>
      </Head>
      <BasicModal />
      <CarritoSection />
      <div className="bg-[#333233] p-[0.12rem] rounded-t-3xl rounded-b-3xl max-w-5xl mx-auto my-5">
        <Header />
        <HeroSection />
      </div>
      <main className="max-w-5xl mx-auto py-10 px-1">
        <LIstaDeProductosSection respuestas={res} />
      </main>
    </>
  )
}

// const apiKey = process.env.API_Key

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': apiKey,
//     'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
//   }
// };

// const apiKey = process.env.API_Key
export async function getStaticProps() {

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '23831f48efmsh2be5632ef86fb56p142cacjsn4432a273df68',
      'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
    }
  };
  const url = 'https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US'

  const callApi = await fetch(url, options)
  const res = await callApi.json();

  return {
    props: {
      res
    }
  }
}


export default Home