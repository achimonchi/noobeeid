import Head from "next/head";

export default function Home() {
  return (
    <div>
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
    <div className="container mx-auto">
      <h1 className="text-center text-2xl font-bold uppercase">Hello World</h1>
    </div>
  )
}