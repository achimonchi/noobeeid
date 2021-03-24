import Head from "next/head";
import Link from "next/link";
import {useRef, useEffect} from "react";
import {TweenMax, TimelineLite, Power3, gsap, CSSPlugin} from "gsap";
gsap.registerPlugin(CSSPlugin);

export default function Home() {
  return (
    <div className="h-full">
      <Head>
        <title>NooBeeID</title>
      </Head>
      <Banner/>    
    </div>
  )
}

const Banner=()=>{
  let bannerContainer = useRef(null);
  let banner = useRef(null);
  let images = useRef(null);
  let cloud1 = useRef(null);

  const tl = new TimelineLite();

  useEffect(()=>{

    TweenMax.to(bannerContainer, 0, {css:{visibility: 'visible'}})
    
    tl.staggerFrom([images, cloud1], 1, {scale:0.5, opacity:0, ease: Power3.easeInOut}, .2)

    let time = 3;

    if(innerWidth > 920){
      time = 5;
    } 
    tl
      .to(cloud1, time, {x:-(innerWidth / 5), repeat:-1, ease:"none", yoyo:true}, `-=${time}`)

    tl.staggerFrom(banner.children, 0.5, {y:10, x:10, opacity:0, ease: Power3.easeInOut}, .3);


  }, [])

  return(
    <section id="banner" ref={el=>bannerContainer=el} className="banner h-full pt-10 md:pt-20 invisible" >
      <div className="container mx-auto h-full">
        <div className="grid grid-cols-12 h-full">
          <div ref={el=>banner = el} className="lg:col-span-4 col-span-12 flex flex-col justify-start lg:justify-center top-0 h-full lg:p-5 px-5 order-2 lg:order-1 ">
            <h1 className="leading-snug lg:leading-tight w-full md:w-10/12 mx-auto lg:w-full text-2xl md:text-4xl lg:text-5xl text-center lg:text-left">Sudah siap untuk menuju era <span className="font-bold">Go-Digital</span> ?</h1>
            <h2 className="opacity-80 text-base md:text-xl lg:text-xl mt-2 lg:mt-5 text-center md:w-10/12 lg:w-full md:mx-auto lg:text-left "><b>NooBeeID</b> adalah <b>Full Services Digital Agensi</b> yang siap membantu kamu untuk <b>go-digital</b>.</h2>
            
            <Link href="/about">
              <div className="bg-primary text-white py-2 px-10 mt-3 text-center rounded-md lg:w-3/4 md:w-2/4 self-center lg:self-start ">
                Get in Touch
              </div>
            </Link>
          </div>
          <div className="lg:col-span-8 col-span-12 flex items-center justify-end lg:justify-center order-1 lg:order-2 h-6/12 flex-col">
            <img ref={el=>cloud1=el} width="100%" height="100%" alt="banner" className="w-5/12 lg:w-auto" src="/assets/cloud1.svg" />
            <img ref={el=>images=el} width="100%" height="100%" alt="banner" className="w-10/12 lg:w-full" src="/assets/banner2.svg" />
          </div>
        </div>
      </div>
    </section>
  )
}