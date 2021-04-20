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
      <Services/>
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
              <div className="bg-primary text-white py-2 px-10 mt-3 text-center rounded-md lg:w-3/4 md:w-2/4 self-center lg:self-start cursor-pointer">
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

const Services=()=>{
  let img = useRef(null);
  let text = useRef(null);
  let button = useRef(null);
  const detailService = {
    web : {
      text : "Kembangkan bisnismu dengan membuat websitemu sendiri. Dengan mempunyai website sendiri, tentunya akan meningkatkan kredibilitas bisnis kamu",
      link : "/"
    },
    mobile : {
      text : "Ini adalah halaman mobile",
      link : "/"
    },
    uiux : {
      text : "UI dan UX yang baik, akan mendatangkan pelanggan yang loyal. Hal ini juga mampu membuat bisnismu berkembang sesuai dengan kebutuhan user",
      link : "/"
    },
    branding : {
      text : "Butuh bantuan dalam melakukan branding terhadap bisnismu? Kami siap membantu dalam mendesign logo, feed sosial media, dan keperluan untuk brand kamu.",
      link : "/"
    },
    training : {
      text : "Kami menyediakan training IT yang sesuai standar perusahaan. Tenang, teknologi dan kurikulum yang digunakan selalu up to date.",
      link : "/"
    },
  }

  function changeButton(e){
    const buttons = document.getElementsByTagName("button");

    for(let i = 0; i < buttons.length; i++){
      buttons[i].classList.remove("bg-primary")
      buttons[i].classList.remove("text-white")
      buttons[i].classList.remove("w-full")
      buttons[i].classList.add("w-11/12")
    }

    button = e.target;
    button.classList.add("bg-primary")
    button.classList.add("text-white")
    button.classList.add("font-bold")
    button.classList.add("w-full")
  }

  const changeServices=(services)=>{
    img.setAttribute("src", `/assets/${services}.svg`)
    text.innerHTML = detailService[services]?.text
  }
  return (
    <section id="services" className="mt-10 md:mt-0 mb-10 h-full">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 ">
          <div className="col-start-0 col-span-12 md:col-start-3 md:col-span-8 flex flex-col justify-start lg:justify-center top-0 h-full lg:p-5 px-5 order-2 lg:order-1 ">
            <h1 className="text-center text-xl md:text-4xl lg:text-5xl mx-auto w-10/12">Kami menyediakan berbagai layanan <b>digital</b> untuk bisnis anda !</h1>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-10 h-full">
        <div className="grid grid-cols-12">
          <div className="col-span-4 ">
            <div className="button p-5 ">
              <button id="btn-web" onClick={(e) => {
                  changeServices("web")
                  changeButton(e)
                }
              } className="w-full mb-6 duration-200 text-xl bg-white flex p-5 rounded-xl bg-primary text-white font-bold">WEB DEVELOPMENT</button>
              <button id="btn-mobile"  onClick={(e) => {
                changeServices("mobile")
                changeButton(e)
              }
            } className="w-11/12 mb-6 duration-200 text-xl bg-white flex p-5 rounded-xl">MOBILE DEVELOPMENT</button>
              <button id="btn-uiux"  onClick={(e) => {
                changeServices("uiux")
                changeButton(e)
              }
            } className="w-11/12 mb-6 duration-200 text-xl bg-white flex p-5 rounded-xl">UI / UX DESIGN</button>
              <button id="btn-branding"  onClick={(e) => {
                changeServices("branding")
                changeButton(e)
              }
            } className="w-11/12 mb-6 duration-200 text-xl bg-white flex p-5 rounded-xl">BRANDING</button>
              <button id="btn-training"  onClick={(e) => {
                changeServices("training")
                changeButton(e)
                }
              } className="w-11/12 mb-6 duration-200 text-xl bg-white flex p-5 rounded-xl">TRAINING</button>
            </div>
          </div>
          <div className="col-span-7 col-start-6 flex flex-col mb-20">
            <img ref={el=>img=el} src="/assets/web.svg" className="h-8/12 self-center duration-200"/>
            <p ref={el=>text=el} className="w-7/12 text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ratione doloremque natus ducimus nemo, iusto asperiores, cum possimus rerum amet voluptatum accusantium optio in nesciunt reiciendis. Quaerat possimus nostrum maiores!
            </p>
            <Link href="/">
              <span className="text-xl font-bold mt-4 cursor-pointer">Lihat Detail</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}