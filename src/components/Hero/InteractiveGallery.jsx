import { motion } from "framer-motion";
import { useState } from "react";
import "./InteractiveGallery.css";


const images = [
  {
    src:"/home.jpg",
    className:"img-one"
  },
  {
    src:"/project4.jpg",
    className:"img-two"
  },
  {
    src:"/villa.jpg",
    className:"img-three"
  },
  {
    src:"/villa2.jpg",
    className:"img-four"
  }
];


export default function InteractiveGallery(){


const [mouse,setMouse]=useState({
x:0,
y:0
});


function handleMove(e){

const x =
(e.clientX / window.innerWidth - .5) * 20;


const y =
(e.clientY / window.innerHeight - .5) * 20;


setMouse({
x,
y
});

}



return(

<div 
className="interactive-gallery"
onMouseMove={handleMove}
>


{

images.map((img,index)=>(

<motion.div

key={img.src}

className={`floating-image ${img.className}`}

animate={{

x:mouse.x * (index+1),

y:mouse.y * (index+1),

rotate:
mouse.x * .3

}}

transition={{

type:"spring",

stiffness:60,

damping:20

}}

whileHover={{

scale:1.12,

zIndex:10

}}

>


<img src={img.src}/>


</motion.div>


))


}


<div className="gallery-glow"/>


</div>

)

}