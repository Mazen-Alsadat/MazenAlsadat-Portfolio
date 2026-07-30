import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "./HeroCharacter.css";


export default function HeroCharacter(){

const [mouse,setMouse]=useState({
x:0,
y:0
});


useEffect(()=>{


const move=(e)=>{

const x =
(e.clientX / window.innerWidth - .5) * 20;


const y =
(e.clientY / window.innerHeight - .5) * 20;


setMouse({
x,
y
});


};


window.addEventListener(
"mousemove",
move
);


return()=>{

window.removeEventListener(
"mousemove",
move
);

}


},[]);



return(


<motion.div

className="hero-character"

animate={{

rotateY:mouse.x,

rotateX:-mouse.y

}}

transition={{

type:"spring",

stiffness:80,

damping:15

}}

>


<img

src="/character.png"

alt="character"

/>


<div className="character-glow"/>


</motion.div>


)

}