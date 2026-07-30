import "./Portfolio.css";

import {
motion,
AnimatePresence
} from "framer-motion";

import {
useRef,
useState
} from "react";

import projects from "../../data/projects";


export default function Portfolio(){


const [active,setActive] = useState(null);

const sliderRef = useRef(null);

const moved = useRef(false);

const startPoint = useRef(0);



function moveSlider(direction){

if(!sliderRef.current) return;


const cardWidth =
window.innerWidth < 700 ? 
window.innerWidth * .82 :
390;


sliderRef.current.scrollBy({

left: direction * cardWidth,

behavior:"smooth"

});

}




function handlePointerDown(e){

moved.current=false;

startPoint.current=e.clientX;

}



function handlePointerMove(e){

const distance =
Math.abs(e.clientX - startPoint.current);


if(distance > 10){

moved.current=true;

}

}




function openProject(project){

if(!moved.current){

setActive(project);

}

}




return(


<section
className="portfolio"
id="work"
>


<div className="container">



<motion.div

className="section-title"

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

>


<h2>

My <span>Projects</span>

</h2>


<p>

Selected creative works and case studies.

</p>


</motion.div>






<div className="projects-slider">



<button

className="slider-arrow"

onClick={()=>moveSlider(-1)}

>

‹

</button>







<div

ref={sliderRef}

className="projects-viewport"

onPointerDown={handlePointerDown}

onPointerMove={handlePointerMove}

>



<div className="projects-track">


{

projects.map((project,index)=>(



<motion.div


key={project.id}


className="project-wrapper"



animate={

window.innerWidth > 700

?

{

y:[0,-6,0],

rotate:[

0,

index % 2 === 0 ? 1:-1,

0

]

}

:

{}

}



transition={{

duration:5 + index*.3,

repeat:Infinity,

ease:"easeInOut"

}}



whileHover={

window.innerWidth > 700

?

{

y:-15,

scale:1.04,

rotate:0

}

:

{}

}



>


<div

className="project-card"

onClick={()=>openProject(project)}

>



<div className="project-image">


<img

src={project.thumbnail || "/placeholder.jpg"}

alt={project.title}

loading="lazy"

/>


</div>





<div className="project-info">


<span>

{project.category}

</span>



<h3>

{project.title}

</h3>



<div className="view-project">

Watch Project ↗

</div>



</div>



</div>



</motion.div>


))

}



</div>



</div>








<button

className="slider-arrow"

onClick={()=>moveSlider(1)}

>

›

</button>






</div>









<AnimatePresence>


{

active && (



<motion.div

className="project-modal"


initial={{
opacity:0
}}

animate={{
opacity:1
}}

exit={{
opacity:0
}}


onClick={()=>setActive(null)}

>



<motion.div

className="modal-content"


initial={{
scale:.85,
y:40
}}

animate={{
scale:1,
y:0
}}

exit={{
scale:.85,
y:40
}}


onClick={(e)=>e.stopPropagation()}

>




<button

className="close-modal"

onClick={()=>setActive(null)}

>

×

</button>




<h2>

{active.title}

</h2>




<p>

{active.description}

</p>





{

active.embed &&

<div className="modal-video">


<iframe

src={`${active.embed}?autoplay=1&title=0&byline=0&portrait=0`}

title={active.title}

loading="lazy"

allow="autoplay; fullscreen"

/>


</div>


}





<div className="modal-meta">


<p>

<strong>
Year:
</strong>

{active.year}

</p>




<p>

<strong>
Tools:
</strong>

{active.tools?.join(" • ")}

</p>



</div>







{

active.link &&


<a

href={active.link}

target="_blank"

rel="noreferrer"

className="behance-btn"

>

Open Project ↗

</a>


}



</motion.div>



</motion.div>


)

}


</AnimatePresence>





</div>


</section>


)


}