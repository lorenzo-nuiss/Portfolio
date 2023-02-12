// import animejsPlugins from "../Script/animeJs";
import anime from "animejs/lib/anime.es.js";
// Default theme
import "@splidejs/splide/css";
import Splide from "@splidejs/splide";
import { animejsPlugins } from "../Script/animeJs";
// or only core styles
import "@splidejs/splide/css/core";
import { useEffect, useState } from "react";
import HomeNotAanim from "./HomeNotAanim";
import HomeAnim from "./HomeAanim";




export default function Home() {

  const [sizeUn, setSizeUn] = useState(window.innerWidth);

useEffect(()=>{
  function handleResize() {
    setSizeUn(window.innerWidth)
    
}
  window.addEventListener('resize', handleResize)
}, [])

if (sizeUn<1000) {
  return(
    <>
    <HomeNotAanim></HomeNotAanim>
    </>
  )
}else{

  return (
    <>

<HomeAnim></HomeAnim>
    </>
  );
}

}
