import { useEffect, useState } from "react";
import "./ScrollTop.css";

export default function ScrollTop(){

const [show,setShow]=useState(false);

useEffect(()=>{

const scroll=()=>{

setShow(window.scrollY>500);

}

window.addEventListener("scroll",scroll);

return()=>window.removeEventListener("scroll",scroll);

},[]);

return(

<button

className={`scroll-top ${show?"show":""}`}

onClick={()=>window.scrollTo({

top:0,

behavior:"smooth"

})}

>

↑

</button>

)

}