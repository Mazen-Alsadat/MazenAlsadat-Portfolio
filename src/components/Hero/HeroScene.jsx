import { motion } from "framer-motion";
import { useState } from "react";
import "./HeroScene.css";


export default function HeroScene(){

const [mouse,setMouse]=useState({
x:0,
y:0
});


function move(e){

const x =
(e.clientX / window.innerWidth - .5) * 30;

const y =
(e.clientY / window.innerHeight - .5) * 30;


setMouse({
x,
y
});

}


return (

<div
className="hero-scene"
onMouseMove={move}
>


<motion.div

className="scene-card main"

animate={{

rotateY:mouse.x,

rotateX:-mouse.y,

x:mouse.x,

y:mouse.y

}}

transition={{

type:"spring",

stiffness:80,

damping:20

}}

>


<div className="video-placeholder">

MOTION

</div>


</motion.div>





<motion.div

className="scene-card small one"

animate={{

x:mouse.x * -1.5,

y:mouse.y * -1.5

}}

>


<div/>

</motion.div>





<motion.div

className="scene-card small two"

animate={{

x:mouse.x * 2,

y:mouse.y * 2

}}

>


<div/>

</motion.div>




<div className="light"/>


</div>

)

}