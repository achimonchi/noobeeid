import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full">
      <Head>
        <title>NooBeeID</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Banner/>    
    </div>
  )
}

const Banner=()=>{
  return(
    <section id="banner" className="banner h-full pt-20">
      <div className="container mx-auto h-full">
        <div className="grid grid-cols-12 h-full">
          <div className="lg:col-span-4 col-span-12 flex flex-col justify-center h-full p-5">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-center lg:text-left">Siap untuk menuju era <span className="font-bold">Digital</span> ?</h1>
            <h4 className="mt-5 text-center lg:text-left"><b>NooBeeID</b> adalah <b>Full Services Digital Agensi</b> yang siap membantu kamu untuk <b>go-digital</b>.</h4>
            <Link href="/about">
              <div className="bg-gray-800 text-white py-2 px-10 mt-3 text-center rounded-md lg:w-2/4">
                Hubungi Kami
              </div>
            </Link>
          </div>
          <div className="lg:col-span-8 col-span-12  flex items-center">
            <img className="" src="/assets/banner.png" />
          </div>
        </div>
      </div>
    </section>
  )
}