import "./Hero.css";

import {
motion,
useMotionValue,
useSpring,
useTransform
} from "framer-motion";

import { 
useEffect, 
useRef 
} from "react";

import showcaseItems from "../../data/showcase";



function VideoCard({
item,
rotateX,
rotateY,
glowX,
glowY
}){


const videoRef = useRef(null);

const cardRef = useRef(null);



useEffect(()=>{


const video = videoRef.current;


const observer = new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

video?.play().catch(()=>{});


}else{


video?.pause();


}


});


},

{
threshold:.5
}

);



if(cardRef.current){

observer.observe(cardRef.current);

}



return()=>{


if(cardRef.current){

observer.unobserve(cardRef.current);

}


};


},[]);




return(


<motion.div


ref={cardRef}


className="showcase-card"



style={{


rotateX,

rotateY,

transformStyle:"preserve-3d"


}}



>



<motion.div


className="card-glow"


style={{


x:glowX,

y:glowY


}}



/>




<div className="card-video">


<video


ref={videoRef}


src={item.video}


muted


loop


playsInline


preload="metadata"



/>


</div>




<div className="card-overlay"/>




<div className="card-content">


<h3>


{item.title}


<br/>


{item.subtitle}



</h3>



<span>


{item.year}


</span>


</div>



</motion.div>



);


}




export default function Hero(){



const mouseX = useMotionValue(0);

const mouseY = useMotionValue(0);




const smoothX = useSpring(mouseX,{

stiffness:70,

damping:20

});



const smoothY = useSpring(mouseY,{

stiffness:70,

damping:20

});





const rotateX = useTransform(

smoothY,

[-.5,.5],

[10,-10]

);



const rotateY = useTransform(

smoothX,

[-.5,.5],

[-10,10]

);





const glowX = useTransform(

smoothX,

[-.5,.5],

[-40,40]

);



const glowY = useTransform(

smoothY,

[-.5,.5],

[-40,40]

);







const heroCardClasses=[

"hero-main-card",

"hero-left-card",

"hero-right-card",

"hero-bottom-card",

"hero-small-left",

"hero-small-right",

"hero-extra-card"

];






function handleMouse(e){



if(window.innerWidth < 700) return;



const rect = e.currentTarget.getBoundingClientRect();



mouseX.set(

(e.clientX - rect.left) / rect.width - .5

);



mouseY.set(

(e.clientY - rect.top) / rect.height - .5

);



}




function reset(){


mouseX.set(0);

mouseY.set(0);


}






return(



<section className="hero">



<div className="container hero-layout">





<motion.div


className="hero-text"



initial={{

opacity:0,

y:40

}}



animate={{


opacity:1,

y:0


}}



transition={{


duration:.8


}}


>




<p className="hero-tag">


Senior Motion Graphics Designer


</p>





<h1>


Creating


<span>


Visual Stories


</span>


That Move


</h1>





<p className="hero-desc">


I create motion graphics, animations, video editing, and visual experiences for brands and digital platforms.


</p>






<div className="hero-buttons">



<a

href="#work"

className="primary-btn"

>

View Work

</a>






<a

href="#contact"

className="secondary-btn"

>

Contact

</a>



</div>





</motion.div>









<div


className="showcase-list"



onMouseMove={handleMouse}



onMouseLeave={reset}



>







{

showcaseItems.map((item,index)=>(



<motion.div



key={item.id}



className={

heroCardClasses[index] || "hero-extra-card"

}




animate={

window.innerWidth > 700

?

{

y:[0,-10,0],

rotate:[

0,

index % 2 === 0 ? 2 : -2,

0

]

}

:

{}

}




transition={{

duration:5 + index * .4,

repeat:Infinity,

ease:"easeInOut"

}}




>




<VideoCard



item={item}



rotateX={

window.innerWidth > 700

?

rotateX

:

0

}



rotateY={

window.innerWidth > 700

?

rotateY

:

0

}



glowX={

window.innerWidth > 700

?

glowX

:

0

}



glowY={

window.innerWidth > 700

?

glowY

:

0

}




/>



</motion.div>



))


}






</div>





</div>





</section>



);



}