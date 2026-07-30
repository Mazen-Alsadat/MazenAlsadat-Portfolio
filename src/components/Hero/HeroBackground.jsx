import { useEffect, useState } from "react";
import "./HeroBackground.css";


export default function HeroBackground(){

const [pos,setPos]=useState({
x:50,
y:50
});


useEffect(()=>{

const move=(e)=>{

setPos({

x:(e.clientX/window.innerWidth)*100,

y:(e.clientY/window.innerHeight)*100

});

};


window.addEventListener(
"mousemove",
move
);


return()=>window.removeEventListener(
"mousemove",
move
);


},[]);



return(

<div

className="hero-bg"

style={{

"--x":`${pos.x}%`,

"--y":`${pos.y}%`

}}

>


<div className="orb orb1"/>

<div className="orb orb2"/>

<div className="grid-effect"/>


</div>

)


}