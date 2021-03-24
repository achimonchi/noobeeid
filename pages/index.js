import Head from "next/head";
import Link from "next/link";
import {useRef, useEffect} from "react";
import {TweenMax, TimelineLite, Power3} from "gsap";

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
  let banner = useRef(null);
  let images = useRef(null);

  const tl = new TimelineLite();

  useEffect(()=>{
    // TweenMax.to(banner, 0, {css:{visibility: 'visible'}})
    const headline = banner.children[0];
    const subHeadline = banner.children[1];
    console.log({headline, subHeadline});

    tl.from(images, 1.2, {scale:0.5, opacity:0, ease: Power3.easeInOut}, .2)
    // tl.from(banner, 1, {x:-500, opacity:0, ease: Power3.easeInOut}, .5)

    // content animation
    // tl.s
    tl.staggerFrom(banner.children, 1, {y:44, opacity:0, ease: Power3.easeInOut, delay: 0.8}, .3);
  }, [])

  return(
    <section id="banner" className="banner h-full pt-10 md:pt-20" >
      <div className="container mx-auto h-full">
        <div className="grid grid-cols-12 h-full">
          <div ref={el=>banner = el} className="lg:col-span-4 col-span-12 flex flex-col justify-start lg:justify-center top-0 h-full lg:p-5 px-5 order-2 lg:order-1 ">
            <h1 className="w-full md:w-10/12 mx-auto lg:w-full text-2xl md:text-4xl lg:text-5xl text-center lg:text-left">Sudah siap untuk menuju era <span className="font-bold">Go-Digital</span> ?</h1>
              <h2 className="text-xs md:text-xl lg:text-base mt-2 lg:mt-5 text-center md:w-10/12 lg:w-full md:mx-auto lg:text-left "><b>NooBeeID</b> adalah <b>Full Services Digital Agensi</b> yang siap membantu kamu untuk <b>go-digital</b>.</h2>
            <div className="grid grid-cols-12">
            </div>
            <Link href="/about">
              <div className="bg-primary text-white py-2 px-10 mt-3 text-center rounded-md lg:w-3/4 md:w-2/4 self-center lg:self-start ">
                Get in Touch
              </div>
            </Link>
          </div>
          <div className="lg:col-span-8 col-span-12 flex items-center justify-end lg:justify-center order-1 lg:order-2 h-6/12 flex-col">
            <img ref={el=>images=el} width="100%" height="100%" alt="banner" className="w-10/12 lg:w-full" src="/assets/banner.svg" />
          </div>
        </div>
      </div>
    </section>
  )
}